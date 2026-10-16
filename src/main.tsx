import React, { useEffect, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { categories, questions, type Category, type GroupSize, type Level, type Question } from './questions';
import { drawQuestion, questionPool } from './deck';
import { moods, groupSizes, FORM_URL, SUPPORT_URL, communityQuestions } from './catalog';
import { ShareCard } from './ShareCard';
import { questionFromUrl, updateQuestionUrl, questionUrl } from './share';
import './style.css';

function Tulip() {
  return <svg className="tulip" viewBox="0 0 180 200" aria-hidden="true"><path d="M88 183Q93 126 88 88" fill="none" stroke="#63754c" strokeWidth="8" strokeLinecap="round"/><path d="M88 165Q37 170 32 126Q75 124 88 165M91 143Q134 145 146 108Q106 107 91 143" fill="#63754c"/><path d="M49 32Q53 17 69 42L91 16L110 42Q139 13 134 42L133 71Q133 109 91 111Q48 108 48 72Z" fill="#c35e76"/><path d="M68 44Q71 72 88 82Q110 70 113 44" fill="none" stroke="#a9425d" strokeWidth="3"/><path d="M27 54L21 42M146 78L158 73M137 21L145 10" stroke="#c49c52" strokeWidth="3" strokeLinecap="round"/></svg>;
}

function QuestionCard({card, number, onNext, singleCard}: {card:Question; number:number; onNext:()=>void; singleCard:boolean}) {
  const [follow, setFollow] = useState(false);
  const [english, setEnglish] = useState(false);
  const heading = useRef<HTMLHeadingElement>(null);
  useEffect(()=>{heading.current?.focus({preventScroll:true});},[]);
  return <article className={`question-card ${card.category.toLowerCase()}`}>
    <div className="card-meta"><span>{moods[card.category].emoji} {moods[card.category].name}{card.level==='deeper' ? ' · 再深一點' : ''}</span><span>第 {String(number).padStart(2,'0')} 題</span></div>
    <div className="question-body"><span className="question-emoji" aria-hidden="true">{card.emoji}</span>
      <h1 tabIndex={-1} ref={heading}>{card.zh.title}</h1>
      {card.author && <p className="contributor">玩家提供 · {card.author}</p>}
      <div className="simple-scenario">{card.zh.scenario.split(/\n\n+/).map((paragraph,index)=><p key={index}>{paragraph}</p>)}</div><h2>{card.zh.question}</h2>
      <button className="language-toggle" aria-expanded={english} aria-controls="english-question" onClick={()=>setEnglish(!english)} lang="en">{english?'Hide English':'Read in English'} <span aria-hidden="true">{english?'−':'+'}</span></button>
      {english && <div id="english-question" lang="en" className="english-question"><p className="english-title">{card.title}</p>{card.scenario.split(/\n\n+/).map((paragraph,index)=><p key={index}>{paragraph}</p>)}<p><strong>{card.question}</strong></p></div>}
    </div>
    {!card.legacy && <div className="follow-up"><button className="follow-button" onClick={()=>setFollow(!follow)} aria-expanded={follow} aria-controls="follow-up"><span className="follow-label"><span className="follow-title">{follow?'收起追問':'再聊一句'}</span><span className="follow-subtitle" lang="en">{follow?'Close follow-up':'Keep the conversation going'}</span></span><span className="follow-symbol" aria-hidden="true">{follow?'−':'＋'}</span></button>
      {follow && <div id="follow-up" className="follow-copy"><p>{card.zh.deeperQuestion}</p>{english && <p lang="en" className="inline-en">{card.deeperQuestion}</p>}</div>}
    </div>}
    <div className="card-actions"><button className="primary" onClick={onNext}><span>{singleCard?'換一種玩法':'下一題'} <span lang="en" className="button-en">{singleCard?'Try another way to play':'Next question'}</span></span><span aria-hidden="true">→</span></button><p className="skip-note">唔想答？隨時跳過，或者換個主題。<span lang="en" className="inline-en">You can always skip. No explanation needed.</span></p></div>
  </article>;
}

type Page = 'home' | 'depth' | 'play' | 'party' | 'feedback' | 'submit' | 'community';
const initialCard = questionFromUrl(window.location.href);
function App() {
  const [page, setPage] = useState<Page>(initialCard ? 'play' : 'home');
  const [mode, setMode] = useState<Category>(initialCard?.category ?? 'Couple');
  const [level, setLevel] = useState<Level>(initialCard?.level ?? 'classic');
  const [size, setSize] = useState<GroupSize>(initialCard?.groupSize ?? 'small');
  const [card, setCard] = useState<Question|null>(initialCard);
  const [number, setNumber] = useState(initialCard ? 1 : 0);
  const [sharedArrival, setSharedArrival] = useState(Boolean(initialCard));
  const [communityMode, setCommunityMode] = useState(Boolean(initialCard?.id.startsWith('community-')));
  const [feedbackCard, setFeedbackCard] = useState<Question|null>(null);
  const [copyMessage, setCopyMessage] = useState('');
  const pageHeading = useRef<HTMLHeadingElement>(null);
  useEffect(()=>{if(page!=='play')pageHeading.current?.focus({preventScroll:true});},[page]);
  useEffect(()=>{
    function sync(){const found=questionFromUrl(window.location.href);setCard(found);setPage(found?'play':'home');setNumber(found?1:0);setSharedArrival(Boolean(found));setCommunityMode(Boolean(found?.id.startsWith('community-')));if(found){setMode(found.category);setLevel(found.level ?? 'classic');setSize(found.groupSize??'small');}}
    window.addEventListener('popstate',sync);return()=>window.removeEventListener('popstate',sync);
  },[]);
  function top(){window.scrollTo({top:0});}
  function go(nextPage:Page){updateQuestionUrl();setPage(nextPage);setCopyMessage('');top();}
  function start(category:Category, groupSize=size, chosenLevel=level){
    const chosen=drawQuestion(category,undefined,category==='Party'?groupSize:undefined,chosenLevel);
    setLevel(chosenLevel);setMode(category);setSize(groupSize);setCard(chosen);setNumber(1);setSharedArrival(false);setCommunityMode(false);setPage('play');updateQuestionUrl(chosen.id);top();
  }
  function choose(category:Category){if(category==='Crush'){start(category);return;}setMode(category);go('depth');}
  function chooseDepth(chosenLevel:Level){setLevel(chosenLevel);if(mode==='Party')go('party');else start(mode,size,chosenLevel);}
  function openCommunity(chosen:Question){setCard(chosen);setMode(chosen.category);setSize(chosen.groupSize??'small');setNumber(1);setCommunityMode(true);setSharedArrival(false);setPage('play');updateQuestionUrl(chosen.id);top();}
  function next(){
    if(communityMode){const available=communityQuestions.filter(q=>q.id!==card?.id);if(!available.length){go('community');return;}const chosen=available[Math.floor(Math.random()*available.length)];setCard(chosen);updateQuestionUrl(chosen.id);}
    else {if(!card?.legacy && mode==='Party' && questionPool(mode,size,level).length===1){go('party');return;}const chosen=drawQuestion(mode,card?.id,mode==='Party'?size:undefined,level);setCard(chosen);updateQuestionUrl(chosen.id);}
    setNumber(n=>n+1);setSharedArrival(false);top();
  }
  function feedback(target:Question|null){setFeedbackCard(target);go('feedback');}
  async function copyReference(){
    if(!feedbackCard)return;
    try{await navigator.clipboard.writeText(`${feedbackCard.zh.title}\n${questionUrl(feedbackCard.id)}`);setCopyMessage('已複製。貼到表單的「補充資料」就得。');}
    catch{setCopyMessage('未能自動複製，請選取下方連結再複製。');}
  }
  return <div className="app"><header className="site-header"><button className="wordmark" onClick={()=>go('home')} aria-label="Ponder 首頁 / Home">PONDER <span>🌷</span></button><span className="header-note">把想太多，變成更懂彼此。<span className="inline-en" lang="en">Turn overthinking into perspective.</span></span><a className="support-header" href={SUPPORT_URL} target="_blank" rel="noopener noreferrer" aria-label="自願支持 Ponder / Support Ponder (opens Stripe)"><span aria-hidden="true">♡</span> 支持 Ponder</a></header>
    <main>
    {page==='home' && <section className="home-screen"><div className="intro"><span className="eyebrow intro-label">如果是你，你會怎樣選？</span><h1 ref={pageHeading} tabIndex={-1}>多想一點，<br/><span>靠近一點。</span></h1><p className="home-tagline" lang="en">Make real connections.</p><p>從可愛的假設，聊到心裡真正重視的事。<span lang="en" className="inline-en">Little what-ifs. Real connections.</span></p><div className="hero-art"><Tulip/><span className="art-caption">一起聊聊 <span lang="en">one question at a time</span></span></div></div>
      <aside className="support-panel" aria-labelledby="support-heading"><div><h2 id="support-heading">喜歡這次對話？支持 Ponder 繼續成長。</h2><p>Ponder 免費遊玩。你的自願支持，讓我們繼續用心整理題目。</p><p className="support-en" lang="en">Free to play. Optional support helps us keep creating thoughtful questions.</p></div><a className="support-cta" href={SUPPORT_URL} target="_blank" rel="noopener noreferrer"><span>自願支持 <span lang="en">Support Ponder</span></span><span aria-hidden="true">↗</span></a><small>付款將於 Stripe 開啟；不付款也可使用所有題目。<span lang="en"> Opens Stripe. All questions remain free.</span></small></aside>
      <div className="pick-label"><h2>今日同邊個玩？<span lang="en">Who are you with?</span></h2><span>{questions.length} 題</span></div>

      <div className="category-grid audience-grid">{categories.filter(category=>category!=='Crush').map(category=><button key={category} className={`category-tile ${category.toLowerCase()}`} onClick={()=>choose(category)}><span className="category-emoji" aria-hidden="true">{moods[category].emoji}</span><span className="category-copy"><strong>{moods[category].name}<span lang="en">{moods[category].en}</span></strong><span>{moods[category].description}</span><span className="audience-detail">{moods[category].detail}</span></span><span className="category-count">{questionPool(category).length} 題</span></button>)}</div>
      <button type="button" className="crush-entry" onClick={()=>start('Crush')} aria-label="有點心動，還想再了解一點？一起試一個假設 · Explore a what-if with your crush"><svg className="glass-heart" viewBox="0 0 120 112" aria-hidden="true"><defs><linearGradient id="heart-glass" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#fff" stopOpacity=".95"/><stop offset=".42" stopColor="#f5b7d0" stopOpacity=".65"/><stop offset="1" stopColor="#b6a3dd" stopOpacity=".8"/></linearGradient></defs><path d="M60 99C47 89 13 66 13 38C13 12 45 7 60 29C75 7 107 12 107 38C107 66 73 89 60 99Z" fill="url(#heart-glass)" stroke="white" strokeOpacity=".85" strokeWidth="2"/><path d="M25 37C25 23 41 20 49 30" fill="none" stroke="white" strokeOpacity=".85" strokeWidth="5" strokeLinecap="round"/></svg><span className="crush-invite"><strong>有點心動，還想再了解一點？</strong><span>從一個小假設，聊出彼此的想法。</span><span lang="en">Start with a what-if. Get a little closer.</span><span className="crush-invite-action">一起玩 · Start here <span aria-hidden="true">→</span></span></span></button>
      <p className="home-rule">先說說自己的選擇，再聽聽彼此的理由。沒有標準答案，也可以隨時跳過。<span className="inline-en" lang="en">Share your choice, then listen to each other’s reasons. You can always skip.</span></p>
      <section className="community-section" aria-labelledby="community-heading"><div className="pick-label"><h2 id="community-heading">一起令 Ponder 更好玩<span lang="en">Made better with you</span></h2></div><div className="community-grid"><button onClick={()=>feedback(null)}><span aria-hidden="true">✎</span><strong>改善意見</strong><span>邊度難明？你想點改？</span><small lang="en">Give feedback →</small></button><button onClick={()=>go('submit')}><span aria-hidden="true">＋</span><strong>投稿題目</strong><span>分享好問題，審核後刊登。</span><small lang="en">Suggest a question →</small></button><button onClick={()=>go('community')}><span aria-hidden="true">♡</span><strong>玩家題目</strong><span>{communityQuestions.length ? `${communityQuestions.length} 題已審核` : '認識大家想聊的事'}</span><small lang="en">Community questions →</small></button></div></section>
    </section>}
    {page==='depth' && <section className="utility-screen"><button className="text-button" onClick={()=>go('home')}>← 揀分類 <span lang="en">Back</span></button><p className="eyebrow">{moods[mode].emoji} {moods[mode].en}</p><h1 tabIndex={-1} ref={pageHeading}>{moods[mode].name}</h1><fieldset className="depth-picker"><legend>今日想聊到邊一層？ <span lang="en">Choose your depth</span></legend><div className="depth-options"><button type="button" onClick={()=>chooseDepth('classic')}><strong>輕鬆聊</strong><span lang="en">Start a conversation</span><small>100 題 · 從小假設開始</small><span aria-hidden="true">→</span></button><button type="button" onClick={()=>chooseDepth('deeper')}><strong>再深一點</strong><span lang="en">Go a little deeper</span><small>100 題 · 聊聊取捨與內心</small><span aria-hidden="true">→</span></button></div><p>這個主題有 200 題，兩種深度各 100 題。{mode==='Party'?'選好深度，再按人數揀玩法。':'選一種，開始聊天。'}隨時可以跳題，或返回這裡換個深度。<span className="inline-en" lang="en">200 cards, 100 at each depth. {mode==='Party'?'Choose a depth, then your group size.':'Choose a depth to begin.'} Skip anytime, or come back to change depth.</span></p></fieldset></section>}
    {page==='party' && <section className="utility-screen"><button className="text-button" onClick={()=>go('depth')}>← 揀深度 Back</button><p className="eyebrow">FRIENDS, OLD & NEW</p><h1 tabIndex={-1} ref={pageHeading}>今次有幾多人？</h1><p className="depth-status">{level==='deeper'?'再深一點 · 100 題聚會題':'輕鬆聊 · 100 題聚會題'}</p><p>按人數揀玩法，唔使每個人都講好耐。<span className="inline-en" lang="en">Choose a group size for the right kind of game.</span></p><div className="size-grid">{groupSizes.map(group=><button key={group.id} onClick={()=>start('Party',group.id)}><strong>{group.name}</strong><span>{group.description}</span><small>{questionPool('Party',group.id,level).length} 題 <span aria-hidden="true">→</span></small></button>)}</div><p className="home-rule">可以輪流講、舉手揀，或者分組傾。唔想答某題，跳過就得。</p></section>}
    {page==='play' && card && <section className="play-screen"><nav className="play-nav" aria-label="遊戲操作 / Game controls"><button className="text-button" onClick={()=>go(communityMode?'community':mode==='Crush'?'home':mode==='Party'?'party':'depth')}>← {communityMode?'玩家題目':mode==='Crush'?'揀分類':mode==='Party'?'揀人數':'揀深度'} <span lang="en">Back</span></button><span className="session-label">{moods[card.category].name}{card.category==='Party'&&card.groupSize ? ` · ${groupSizes.find(g=>g.id===card.groupSize)?.name}`:''}</span></nav>
      {sharedArrival && <p className="shared-arrival">有人想同你聊聊呢一題。<span lang="en" className="inline-en">Someone wants to talk about this with you.</span></p>}
      {card.legacy && <p className="legacy-note">呢張係之前分享嘅舊版題目。按「下一題」就可以玩新版。</p>}
      <div className="card-enter" key={`${card.id}-${number}`}><QuestionCard card={card} number={number} onNext={next} singleCard={!card.legacy && !communityMode && mode==='Party' && questionPool(mode,size,level).length===1}/><ShareCard card={card}/></div>
      <button className="card-feedback" onClick={()=>feedback(card)}>呢題難明，或者想改一改？<span lang="en">Give feedback on this card ↗</span></button>
    </section>}
    {(page==='feedback'||page==='submit') && <section className="utility-screen"><button className="text-button" onClick={()=>go('home')}>← 返回 Back</button><p className="eyebrow">A LITTLE INPUT, A BETTER CONVERSATION</p><h1 tabIndex={-1} ref={pageHeading}>{page==='feedback'?'你嘅意見，我哋想聽。':'你有一條想問大家嘅題目？'}</h1><p>{page==='feedback'?'題目太難明、唔好答，定係有功能想改善？講一個例子就幫到手。':'想像一個容易明白的小情境，讓每個人都可以有自己的選擇。再加一句你想繼續聊的追問。不用複雜的規則，也不用有標準答案。'}</p>
      <p className="inline-en" lang="en">{page==='feedback'?'Tell us what was confusing or what could work better. A specific example helps.':'Suggest a simple situation, a choice people might see differently, and a follow-up that keeps the conversation going.'}</p>
      {page==='submit' && <div className="submission-example"><span className="eyebrow">例如 / EXAMPLE</span><p>你可以替朋友安排一個下午，預算是一百元。對方答應一起試一件你喜歡、但平常沒人陪你做的事。</p><strong>你會帶朋友做甚麼？</strong><p>再聊一句：這件事有哪個部分，你最想讓朋友也感受到？</p></div>}
      {page==='feedback'&&feedbackCard&&<div className="reference-card"><strong>關於：{feedbackCard.zh.title}</strong><button onClick={copyReference}>複製題目資料</button><label htmlFor="feedback-reference">題目連結 / Card link</label><input id="feedback-reference" readOnly value={questionUrl(feedbackCard.id)} onFocus={event=>event.currentTarget.select()}/><p role="status">{copyMessage}</p></div>}
      <div className="review-explainer"><h2>{page==='submit'?'投稿會點處理？':'放心講，唔使留名。'}</h2><p>{page==='submit'?'投稿 → 管理者審核及整理 → 批准後加入「玩家題目」。未批准嘅題目唔會自動公開。':'意見只會交畀管理者查看，唔會自動公開。暱稱可留空，表單唔會收集電郵。'}</p><p className="inline-en" lang="en">{page==='submit'?'Submissions are reviewed and edited before appearing in Community questions. Nothing is published automatically.':'Feedback goes to the owner. Your email is not collected, and a name is optional.'}</p></div>
      <a className="primary form-link" href={FORM_URL} target="_blank" rel="noopener noreferrer"><span>{page==='submit'?'去投稿題目':'去填改善意見'} <span className="button-en" lang="en">Open Google Form</span></span><span aria-hidden="true">↗</span></a><p className="form-note">會開啟 Google 表單。請選「{page==='submit'?'投稿題目':'提出改善意見'}」，填完按「提交」先算送出。{feedbackCard&&page==='feedback'?'記得將題目資料貼入「補充資料」。':''}</p>
    </section>}
    {page==='community' && <section className="utility-screen"><button className="text-button" onClick={()=>go('home')}>← 返回 Back</button><p className="eyebrow">FROM THE COMMUNITY</p><h1 tabIndex={-1} ref={pageHeading}>玩家題目</h1><p>玩家分享的好問題，審核後在這裡刊登。<span className="inline-en" lang="en">Questions from players, reviewed before publication.</span></p>{communityQuestions.length ? <div className="approved-list">{communityQuestions.map(q=><button key={q.id} onClick={()=>openCommunity(q)}><span>{moods[q.category].name}</span><strong>{q.zh.title}</strong><small>{q.author ? `來自 ${q.author}`:'匿名投稿'} →</small></button>)}</div> : <div className="empty-community"><span aria-hidden="true">🌱</span><h2>第一題，可能就係你嗰題。</h2><p>目前未有已刊登嘅玩家題目。你可以先投稿，由管理者睇過再加入。</p><p lang="en" className="inline-en">No published community questions yet. Send the first suggestion.</p></div>}<button className="primary" onClick={()=>go('submit')}><span>我想投稿 <span className="button-en" lang="en">Suggest a question</span></span><span aria-hidden="true">＋</span></button></section>}
    </main><footer><span>多一個角度，多一分理解。<span className="inline-en" lang="en">More perspectives. Deeper connections.</span></span><span className="footer-flower" aria-hidden="true">✿</span><span>為相聚而設。<span className="inline-en" lang="en">Made for being together.</span></span></footer></div>;
}
createRoot(document.getElementById('root')!).render(<React.StrictMode><App/></React.StrictMode>);
