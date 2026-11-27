import { isFestiveSeason, isQuestionAvailable } from './season';
import React, { useEffect, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { categories, questions, type Category, type PartyMood, type Level, type Question } from './questions';
import { drawQuestion, questionPool, partyMoodFor } from './deck';
import { moods, partyMoods, FORM_URL, SUPPORT_URL, communityQuestions } from './catalog';
import { ShareCard } from './ShareCard';
import { questionFromUrl, updateQuestionUrl, questionUrl } from './share';
import './style.css';
import './festive.css';

function QuestionCard({card, number, onNext, singleCard}: {card:Question; number:number; onNext:()=>void; singleCard:boolean}) {
  const [follow, setFollow] = useState(false);
  const heading = useRef<HTMLHeadingElement>(null);
  useEffect(()=>{heading.current?.focus({preventScroll:true});},[]);
  return <article className={`question-card ${card.category.toLowerCase()}`}>
    <div className="card-meta"><span>{moods[card.category].emoji} {moods[card.category].name}{card.category!=='Party' && card.level==='deeper' ? ' · 再深一點' : ''}<span lang="en" className="inline-en">{moods[card.category].en}{card.category!=='Party' && card.level==='deeper' ? ' · Go a little deeper' : ''}</span></span><span>第 {String(number).padStart(2,'0')} 題<span lang="en" className="inline-en">Card {number}</span></span></div>
    <div className="question-body"><span className="question-emoji" aria-hidden="true">{card.emoji}</span>
      <h1 tabIndex={-1} ref={heading}>{card.zh.title}<span lang="en" className="english-heading">{card.title}</span></h1>
      {card.author && <p className="contributor">玩家提供 / Contributed by · {card.author}</p>}
      <div className="simple-scenario">{card.zh.scenario.split(/\n\n+/).map((paragraph,index)=><p key={index}>{paragraph}</p>)}<div lang="en" className="english-question">{card.scenario.split(/\n\n+/).map((paragraph,index)=><p key={index}>{paragraph}</p>)}</div></div>
      <h2>{card.zh.question}<span lang="en" className="english-heading">{card.question}</span></h2>
    </div>
    {!card.legacy && <div className="follow-up"><button className="follow-button" onClick={()=>setFollow(!follow)} aria-expanded={follow} aria-controls="follow-up"><span className="follow-label"><span className="follow-title">{follow?'收起追問':'再聊一句'}</span><span className="follow-subtitle" lang="en">{follow?'Close follow-up':'Keep the conversation going'}</span></span><span className="follow-symbol" aria-hidden="true">{follow?'−':'＋'}</span></button>
      {follow && <div id="follow-up" className="follow-copy"><p>{card.zh.deeperQuestion}</p><p lang="en" className="inline-en">{card.deeperQuestion}</p></div>}
    </div>}
    <div className="card-actions"><button className="primary" onClick={onNext}><span>{singleCard?'換一種玩法':'下一題'} <span lang="en" className="button-en">{singleCard?'Try another way to play':'Next question'}</span></span><span aria-hidden="true">→</span></button><p className="skip-note">不想回答？隨時可以跳過，或換個主題。<span lang="en" className="inline-en">You can skip any question or choose another theme.</span></p></div>
  </article>;
}

type Page = 'home' | 'depth' | 'play' | 'feedback' | 'submit' | 'community';
const initialCard = questionFromUrl(window.location.href);
function App() {
  const [festive, setFestive] = useState(()=>isFestiveSeason());
  const [motionPaused, setMotionPaused] = useState(false);
  useEffect(()=>{document.body.classList.toggle('festive-paused',motionPaused);return()=>document.body.classList.remove('festive-paused');},[motionPaused]);
  const [festiveOnly, setFestiveOnly] = useState(initialCard?.season==='festive');
  useEffect(()=>{
    const refresh=()=>setFestive(isFestiveSeason());
    const timer=window.setInterval(refresh,15000);
    window.addEventListener('focus',refresh);document.addEventListener('visibilitychange',refresh);
    return()=>{window.clearInterval(timer);window.removeEventListener('focus',refresh);document.removeEventListener('visibilitychange',refresh);};
  },[]);
  useEffect(()=>{document.body.classList.toggle('festive-theme',festive);return()=>document.body.classList.remove('festive-theme');},[festive]);
  const [page, setPage] = useState<Page>(initialCard ? 'play' : 'home');
  const [mode, setMode] = useState<Category>(initialCard?.category ?? 'Couple');
  const [level, setLevel] = useState<Level>(initialCard?.level ?? 'classic');
  const [partyMood, setPartyMood] = useState<PartyMood>(initialCard ? partyMoodFor(initialCard) : 'personality');
  const [card, setCard] = useState<Question|null>(initialCard);
  const [number, setNumber] = useState(initialCard ? 1 : 0);
  const [sharedArrival, setSharedArrival] = useState(Boolean(initialCard));
  const [communityMode, setCommunityMode] = useState(Boolean(initialCard?.id.startsWith('community-')));
  const [feedbackCard, setFeedbackCard] = useState<Question|null>(null);
  const [copyMessage, setCopyMessage] = useState('');
  useEffect(()=>{if(!festive && card?.season==='festive'){setCard(null);setPage('home');setFestiveOnly(false);setSharedArrival(false);updateQuestionUrl();}},[festive,card]);
  const pageHeading = useRef<HTMLHeadingElement>(null);
  useEffect(()=>{if(page!=='play')pageHeading.current?.focus({preventScroll:true});},[page]);
  useEffect(()=>{
    function sync(){const found=questionFromUrl(window.location.href);setCard(found);setFestiveOnly(found?.season==='festive');setPage(found?'play':'home');setNumber(found?1:0);setSharedArrival(Boolean(found));setCommunityMode(Boolean(found?.id.startsWith('community-')));if(found){setMode(found.category);setLevel(found.level ?? 'classic');setPartyMood(partyMoodFor(found));}}
    window.addEventListener('popstate',sync);return()=>window.removeEventListener('popstate',sync);
  },[]);
  function top(){window.scrollTo({top:0});}
  function go(nextPage:Page){updateQuestionUrl();setPage(nextPage);setCopyMessage('');top();}
  function start(category:Category, chosenLevel=level, chosenMood=partyMood, holiday=false){
    if(holiday && !isFestiveSeason()){setFestive(false);go('home');return;}
    const chosen=drawQuestion(category,undefined,undefined,chosenLevel,chosenMood,holiday);
    setFestiveOnly(holiday);
    setLevel(chosenLevel);setMode(category);setPartyMood(chosenMood);setCard(chosen);setNumber(1);setSharedArrival(false);setCommunityMode(false);setPage('play');updateQuestionUrl(chosen.id);top();
  }
  function choose(category:Category){if(category==='Crush'||category==='Girls'){start(category);return;}setMode(category);go('depth');}
  function chooseDepth(chosenLevel:Level){start(mode,chosenLevel);}
  function openCommunity(chosen:Question){setFestiveOnly(false);setCard(chosen);setMode(chosen.category);setPartyMood(partyMoodFor(chosen));setNumber(1);setCommunityMode(true);setSharedArrival(false);setPage('play');updateQuestionUrl(chosen.id);top();}
  function next(){
    if(festiveOnly && !isFestiveSeason()){setFestive(false);go('home');return;}
    if(communityMode){const available=communityQuestions.filter(q=>q.id!==card?.id);if(!available.length){go('community');return;}const chosen=available[Math.floor(Math.random()*available.length)];setCard(chosen);updateQuestionUrl(chosen.id);}
    else {const chosen=drawQuestion(mode,card?.id,undefined,level,partyMood,festiveOnly);setCard(chosen);updateQuestionUrl(chosen.id);}
    setNumber(n=>n+1);setSharedArrival(false);top();
  }
  function feedback(target:Question|null){setFeedbackCard(target);go('feedback');}
  async function copyReference(){
    if(!feedbackCard)return;
    try{await navigator.clipboard.writeText(`${feedbackCard.zh.title}\n${questionUrl(feedbackCard.id)}`);setCopyMessage('已複製。請貼到表單的「補充資料」。 Copied. Paste it into the form’s additional information field.');}
    catch{setCopyMessage('未能自動複製，請選取下方連結並手動複製。 Please select and copy the link below.');}
  }
  return <div className={`app ${festive?'festive-app':''}`}>{festive && <div className="festive-flight" aria-hidden="true"><div className="festive-santa" /></div>}<header className="site-header"><button className="wordmark" onClick={()=>go('home')} aria-label="Ponder 首頁 / Home">PONDER <span>{festive?'🎄':'🌷'}</span></button><span className="header-note">把想太多，變成更懂彼此。<span className="inline-en" lang="en">Turn overthinking into perspective.</span></span><a className="support-header" href={SUPPORT_URL} target="_blank" rel="noopener noreferrer" aria-label="自願支持 Ponder / Support Ponder (opens Stripe)"><span aria-hidden="true">♡</span> 支持 Ponder <span lang="en" className="support-label-en">Support</span></a></header>
    <main>
    {festive && <button className="festive-motion" type="button" aria-pressed={motionPaused} onClick={()=>setMotionPaused(v=>!v)}>{motionPaused?'播放節日動畫 / Play animation':'暫停節日動畫 / Pause animation'}</button>}
    {festive && <div className="season-ribbon"><span aria-hidden="true">✧</span><span>聖誕到新年，留一點時間給彼此。<span lang="en" className="inline-en">A little time together, from Christmas to New Year.</span></span><span aria-hidden="true">✧</span></div>}
    {!festive && new URLSearchParams(window.location.search).get('q')?.startsWith('ponder-festive-') && <p role="status" className="season-notice">這張節日卡每年 11 月 26 日至 1 月 1 日開放。先選一個平日題目繼續聊。<span lang="en" className="inline-en">This festive card is available November 26–January 1 each year. Choose a year-round conversation below.</span></p>}
    {page==='home' && <section className="home-screen"><div className="intro liquid-intro"><h1 ref={pageHeading} tabIndex={-1} lang="en">Real connections in a digital world.</h1></div>

      <div className="pick-label"><h2>今天想和誰一起玩？<span lang="en">Who are you with?</span></h2><span>{questions.filter(q=>isQuestionAvailable(q)).length} 題 / cards</span></div>

      <div className="category-grid audience-grid">{categories.filter(category=>category!=='Crush'&&category!=='Girls').map(category=><button key={category} className={`category-tile ${category.toLowerCase()}`} onClick={()=>choose(category)}><span className="category-emoji" aria-hidden="true">{moods[category].emoji}</span><span className="category-copy"><strong>{moods[category].name}<span lang="en">{moods[category].en}</span></strong><span>{moods[category].description}<span lang="en" className="inline-en">{moods[category].descriptionEn}</span></span><span className="audience-detail">{moods[category].detail}<span lang="en" className="inline-en">{moods[category].detailEn}</span></span></span><span className="category-count">{questionPool(category).length+(category==='Party'?questionPool('Girls').length:0)} 題<span lang="en" className="inline-en">cards</span></span></button>)}</div>
      <button type="button" className="crush-entry" onClick={()=>start('Crush')} aria-label="First date / Crush"><svg className="glass-heart" viewBox="0 0 120 112" aria-hidden="true"><defs><linearGradient id="heart-glass" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#fff" stopOpacity=".95"/><stop offset=".42" stopColor="#f5b7d0" stopOpacity=".65"/><stop offset="1" stopColor="#b6a3dd" stopOpacity=".8"/></linearGradient></defs><path d="M60 99C47 89 13 66 13 38C13 12 45 7 60 29C75 7 107 12 107 38C107 66 73 89 60 99Z" fill="url(#heart-glass)" stroke="white" strokeOpacity=".85" strokeWidth="2"/><path d="M25 37C25 23 41 20 49 30" fill="none" stroke="white" strokeOpacity=".85" strokeWidth="5" strokeLinecap="round"/></svg><span className="crush-invite"><strong><span lang="en">First date / Crush</span></strong><span>從第一次見面到有點心動，用一個假設認識彼此。</span><span lang="en">From a first date to a growing crush. Get to know each other through a what-if.</span><span className="crush-invite-action">一起玩 · Start here <span aria-hidden="true">→</span></span></span></button>
      {festive && <section className="holiday-collection" aria-labelledby="holiday-title"><span className="eyebrow">NOV 26 — JAN 1</span><h2 id="holiday-title">聖誕・新年限定版<span lang="en" className="english-heading">Christmas & New Year Edition</span></h2><p>六個分類，每類 50 題，共 300 道聖誕與新年假設題。選擇分類，開始節日對話。<span lang="en" className="inline-en">300 Christmas and New Year what-ifs: 50 in each of six categories. Pick a category and play.</span></p><div className="holiday-choices">{categories.map(c=><button key={c} onClick={()=>start(c,level,partyMood,true)}><span aria-hidden="true">{moods[c].emoji}</span><span>{moods[c].name}<span lang="en" className="inline-en">{moods[c].en}</span></span></button>)}</div><small>依你的裝置日期開放；1 月 2 日恢復平日版本。<span lang="en" className="inline-en">Based on your device's calendar. The everyday edition returns January 2.</span></small></section>}
      <nav className="content-links" aria-label="閱讀與玩法 / Read and play"><a href="./library.html">閱讀題庫<span lang="en">Browse the cards</span></a><a href="./how-to-play.html">玩法與對話靈感<span lang="en">How to play</span></a></nav>
      <p className="home-rule">先說說自己的選擇，再聽聽彼此的理由。沒有標準答案，也可以隨時跳過。<span className="inline-en" lang="en">Share your choice, then listen to each other’s reasons. You can always skip.</span></p>

      <section className="community-section" aria-labelledby="community-heading"><div className="pick-label"><h2 id="community-heading">一起讓 Ponder 更好玩<span lang="en">Made better with you</span></h2></div><div className="community-grid"><button onClick={()=>feedback(null)}><span aria-hidden="true">✎</span><strong>改善意見</strong><span>哪裡不容易理解？你希望如何改善？<span lang="en" className="inline-en">What feels unclear? What would you improve?</span></span><small lang="en">Give feedback →</small></button><button onClick={()=>go('submit')}><span aria-hidden="true">＋</span><strong>投稿題目</strong><span>分享好問題，審核後刊登。<span lang="en" className="inline-en">Share a question for review and publication.</span></span><small lang="en">Suggest a question →</small></button><button onClick={()=>go('community')}><span aria-hidden="true">♡</span><strong>玩家題目</strong><span>{communityQuestions.length ? `${communityQuestions.length} 題已審核` : '認識大家想聊的事'}<span lang="en" className="inline-en">{communityQuestions.length ? `${communityQuestions.length} reviewed cards` : 'Discover what others want to talk about.'}</span></span><small lang="en">Community questions →</small></button></div></section>
    </section>}
    {page==='depth' && <section className="utility-screen"><button className="text-button" onClick={()=>go('home')}>← 選擇分類 <span lang="en">Back</span></button><p className="eyebrow">{moods[mode].emoji} {moods[mode].en}</p><h1 tabIndex={-1} ref={pageHeading}>{moods[mode].name}<span lang="en" className="english-heading">{moods[mode].en}</span></h1>{mode==='Party' ? <fieldset className="depth-picker"><legend>今晚，想聊到哪個程度？<span lang="en">Choose your intensity</span></legend><div className="depth-options party-intensities">{partyMoods.map(option=><button key={option.id} type="button" onClick={()=>start('Party',level,option.id)}><strong>{option.name}</strong><span lang="en">{option.en}</span><small>{option.description}<span lang="en" className="inline-en">{option.descriptionEn}</span></small><small>{questionPool('Party',undefined,undefined,option.id).length} 題 / cards</small><span aria-hidden="true">→</span></button>)}</div><p>不分人數。先各自選，再聊理由；不用點名，也不用證明自己做過。隨時可以跳題或換個程度。<span className="inline-en" lang="en">Any group size. Choose individually, then compare reasons. No naming names or proving what you have done. Skip or change intensity anytime.</span></p></fieldset> : <fieldset className="depth-picker"><legend>今天想聊多深入？ <span lang="en">Choose your depth</span></legend><div className="depth-options"><button type="button" onClick={()=>chooseDepth('classic')}><strong>輕鬆聊</strong><span lang="en">Start a conversation</span><small>{questionPool(mode,undefined,'classic').length} 題 · 從小假設開始<span lang="en" className="inline-en">Little what-ifs</span></small><span aria-hidden="true">→</span></button><button type="button" onClick={()=>chooseDepth('deeper')}><strong>再深一點</strong><span lang="en">Go a little deeper</span><small>{questionPool(mode,undefined,'deeper').length} 題 · 聊聊取捨與內心<span lang="en" className="inline-en">Choices and inner worlds</span></small><span aria-hidden="true">→</span></button></div><p>這個主題有 {questionPool(mode).length} 題。選一種深度開始，隨時可以跳題或返回這裡換個深度。<span className="inline-en" lang="en">{questionPool(mode).length} cards. Choose a depth to begin. Skip anytime or come back to change depth.</span></p></fieldset>}{mode==='Party' && <button type="button" className="girls-entry" onClick={()=>start('Girls')}><span className="girls-icon" aria-hidden="true">🍸</span><span><small>AFTER HOURS · BESTIE NIGHT TALK</small><strong>老BEST 夜話<span lang="en" className="inline-en">BESTIE Night Talk</span></strong><span>前任、野心、錢，還有那些「我才不會」的選擇。<span lang="en" className="inline-en">Exes, ambition, money—and choices you swore you would never make.</span></span><span className="girls-action">今晚，聊一點平時不說的 →<span lang="en" className="inline-en">Let’s get into it → · 24 cards</span></span></span></button>}</section>}
    {page==='play' && card && <section className="play-screen"><nav className="play-nav" aria-label="遊戲操作 / Game controls"><button className="text-button" onClick={()=>{if(!festiveOnly && !communityMode && mode==='Girls'){setMode('Party');go('depth');}else go(festiveOnly?'home':communityMode?'community':mode==='Crush'?'home':'depth');}}>← {communityMode?'玩家題目':mode==='Girls'?'朋友聚會':mode==='Crush'?'選擇分類':mode==='Party'?'選擇程度':'選擇深度'} <span lang="en">Back</span></button><span className="session-label">{moods[card.category].name}{card.category==='Party' ? ` · ${partyMoods.find(g=>g.id===partyMoodFor(card))?.name}`:''}<span lang="en" className="inline-en">{moods[card.category].en}{card.category==='Party' ? ` · ${partyMoods.find(g=>g.id===partyMoodFor(card))?.en}`:''}</span></span></nav>
      {card.season==='festive' && <p className="season-card-label">聖誕・新年限定 <span lang="en">Christmas & New Year edition</span></p>}
      {sharedArrival && <p className="shared-arrival">有人想和你聊聊這一題。<span lang="en" className="inline-en">Someone wants to talk about this with you.</span></p>}
      {card.legacy && <p className="legacy-note">這是先前分享的舊版題目。按「下一題」即可開始新版題目。<span lang="en" className="inline-en">This is an earlier edition shared previously. Select Next question to play the current edition.</span></p>}
      {mode==='Girls' && <p className="girls-note">可以不說真名，也可以跳過；不必喝酒才能加入。<span lang="en" className="inline-en">No names needed. Skip freely. Drinks are optional.</span></p>}
      <div className="card-enter" key={`${card.id}-${number}`}><QuestionCard card={card} number={number} onNext={next} singleCard={false}/><ShareCard card={card}/></div>
      <button className="card-feedback" onClick={()=>feedback(card)}>這一題不容易理解，或有想改善的地方？<span lang="en">Give feedback on this card ↗</span></button>
    </section>}
    {(page==='feedback'||page==='submit') && <section className="utility-screen"><button className="text-button" onClick={()=>go('home')}>← 返回 Back</button><p className="eyebrow">一點意見，讓對話更美好<span lang="en" className="inline-en">A LITTLE INPUT, A BETTER CONVERSATION</span></p><h1 tabIndex={-1} ref={pageHeading}>{page==='feedback'?'我們想聽聽你的意見。':'你有想和大家分享的題目嗎？'}<span lang="en" className="english-heading">{page==='feedback'?'We would love to hear your thoughts.':'Have a question to share with everyone?'}</span></h1><p>{page==='feedback'?'題目不容易理解、難以回答，或有希望改善的功能？提供一個具體例子，就能幫助我們調整。':'想像一個容易明白的小情境，讓每個人都可以有自己的選擇。再加一句你想繼續聊的追問。不用複雜的規則，也不用有標準答案。'}</p>
      <p className="inline-en" lang="en">{page==='feedback'?'Tell us what was confusing or what could work better. A specific example helps.':'Suggest a simple situation, a choice people might see differently, and a follow-up that keeps the conversation going.'}</p>
      {page==='submit' && <div className="submission-example"><span className="eyebrow">例如 / EXAMPLE</span><p>你可以替朋友安排一個下午，預算是一百元。對方答應一起試一件你喜歡、但平常沒人陪你做的事。<span lang="en" className="inline-en">You have HK$100 to plan an afternoon with a friend. They agree to try something you enjoy but rarely have company for.</span></p><strong>你會帶朋友做甚麼？<span lang="en" className="inline-en">What would you do together?</span></strong><p>再聊一句：這件事有哪個部分，你最想讓朋友也感受到？<span lang="en" className="inline-en">Keep talking: Which part of the experience would you most want your friend to share?</span></p></div>}
      {page==='feedback'&&feedbackCard&&<div className="reference-card"><strong>關於：{feedbackCard.zh.title}<span lang="en" className="inline-en">About: {feedbackCard.title}</span></strong><button onClick={copyReference}>複製題目資料 <span lang="en">Copy card details</span></button><label htmlFor="feedback-reference">題目連結 / Card link</label><input id="feedback-reference" readOnly value={questionUrl(feedbackCard.id)} onFocus={event=>event.currentTarget.select()}/><p role="status">{copyMessage}</p></div>}
      <div className="review-explainer"><h2>{page==='submit'?'投稿後會如何處理？':'安心分享，不必留下姓名。'}<span lang="en" className="inline-en">{page==='submit'?'What happens after you submit?':'Share freely. No name required.'}</span></h2><p>{page==='submit'?'投稿後，管理者會審核並整理內容。通過審核的題目才會加入「玩家題目」，不會自動公開。':'意見僅供管理者查看，不會自動公開。暱稱可以留空，表單不會收集電子郵件地址。'}</p><p className="inline-en" lang="en">{page==='submit'?'Submissions are reviewed and edited before appearing in Community questions. Nothing is published automatically.':'Feedback goes to the owner. Your email is not collected, and a name is optional.'}</p></div>
      <a className="primary form-link" href={FORM_URL} target="_blank" rel="noopener noreferrer"><span>{page==='submit'?'投稿題目':'填寫改善意見'} <span className="button-en" lang="en">Open Google Form</span></span><span aria-hidden="true">↗</span></a><p className="form-note">將開啟 Google 表單。請選擇「{page==='submit'?'投稿題目':'提出改善意見'}」，填寫完成後，按「提交」才會送出。{feedbackCard&&page==='feedback'?'請將題目資料貼入「補充資料」。':''}<span lang="en" className="inline-en">Google Forms opens in a new tab. Choose {page==='submit'?'the question submission option':'the feedback option'}, then select Submit when finished.{feedbackCard&&page==='feedback'?' Paste the card details into the additional information field.':''}</span></p>
    </section>}
    {page==='community' && <section className="utility-screen"><button className="text-button" onClick={()=>go('home')}>← 返回 Back</button><p className="eyebrow">來自玩家的靈感<span lang="en" className="inline-en">FROM THE COMMUNITY</span></p><h1 tabIndex={-1} ref={pageHeading}>玩家題目<span lang="en" className="english-heading">Community questions</span></h1><p>玩家分享的好問題，審核後在這裡刊登。<span className="inline-en" lang="en">Questions from players, reviewed before publication.</span></p>{communityQuestions.length ? <div className="approved-list">{communityQuestions.map(q=><button key={q.id} onClick={()=>openCommunity(q)}><span>{moods[q.category].name} / {moods[q.category].en}</span><strong>{q.zh.title}<span lang="en" className="inline-en">{q.title}</span></strong><small>{q.author ? `來自 / By ${q.author}`:'匿名投稿 / Anonymous'} →</small></button>)}</div> : <div className="empty-community"><span aria-hidden="true">🌱</span><h2>第一道玩家題目，可能就來自你。<span lang="en" className="inline-en">The first community card could be yours.</span></h2><p>目前尚未刊登玩家題目。歡迎先投稿，經管理者審核後再加入。</p><p lang="en" className="inline-en">No published community questions yet. Send the first suggestion.</p></div>}<button className="primary" onClick={()=>go('submit')}><span>我想投稿 <span className="button-en" lang="en">Suggest a question</span></span><span aria-hidden="true">＋</span></button></section>}
    </main><nav className="site-info-nav" aria-label="網站資訊 / Site information"><a href="./library.html">題庫 / Cards</a><a href="./how-to-play.html">玩法 / How to play</a><a href="./about.html">關於與聯絡 / About & contact</a><a href="./privacy.html">私隱 / Privacy</a></nav><footer><span>多一個角度，多一分理解。<span className="inline-en" lang="en">More perspectives. Deeper connections.</span></span><span className="footer-flower" aria-hidden="true">✿</span><span>為相聚而設。<span className="inline-en" lang="en">Made for being together.</span></span></footer></div>;
}
createRoot(document.getElementById('root')!).render(<React.StrictMode><App/></React.StrictMode>);
