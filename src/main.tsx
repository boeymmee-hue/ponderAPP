import React, { useEffect, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { categories, questions, type Category, type Question } from './questions';
import { drawQuestion } from './deck';
import './style.css';

const moods: Record<Category, {emoji: string; name: string; description: string; en: string}> = {
  Cute: {emoji:'🌷', name:'可愛', description:'柔軟的心，也有大大的問題。', en:'Soft hearts. Big feelings.'},
  Funny: {emoji:'😂', name:'搞笑', description:'聽起來荒謬，但先聽我說。', en:'Ridiculous, but hear me out.'},
  Moral: {emoji:'⚖️', name:'道德', description:'你的底線，會畫在哪裡？', en:'Where do you draw the line?'},
  Love: {emoji:'❤️', name:'愛情', description:'感情很複雜，不如聊聊。', en:'It’s complicated. Let’s talk.'},
  Deep: {emoji:'🧠', name:'深度', description:'再想一步，也許答案會不同。', en:'A little existential, in a good way.'},
  Weird: {emoji:'🌀', name:'奇想', description:'準備好讓世界變奇怪了嗎？', en:'Things are about to get strange.'},
};

function Tulip() {
  return <svg className="tulip" viewBox="0 0 180 200" aria-hidden="true"><path d="M88 183Q93 126 88 88" fill="none" stroke="#63754c" strokeWidth="8" strokeLinecap="round"/><path d="M88 165Q37 170 32 126Q75 124 88 165M91 143Q134 145 146 108Q106 107 91 143" fill="#63754c"/><path d="M49 32Q53 17 69 42L91 16L110 42Q139 13 134 42L133 71Q133 109 91 111Q48 108 48 72Z" fill="#c35e76"/><path d="M68 44Q71 72 88 82Q110 70 113 44" fill="none" stroke="#a9425d" strokeWidth="3"/><path d="M27 54L21 42M146 78L158 73M137 21L145 10" stroke="#c49c52" strokeWidth="3" strokeLinecap="round"/></svg>;
}

function BilingualText({zh, en, className = ''}: {zh: string; en: string; className?: string}) {
  return <div className={`bilingual-text ${className}`}><div lang="zh-Hant">{zh.split('\n\n').map((p,i)=><p key={i}>{p}</p>)}</div><div lang="en" className="english-copy">{en.split('\n\n').map((p,i)=><p key={i}>{p}</p>)}</div></div>;
}

export function QuestionCard({card, number, deeper, onDeeper, onNext}: {card: Question; number: number; deeper: boolean; onDeeper: () => void; onNext: () => void}) {
  const heading = useRef<HTMLHeadingElement>(null);
  useEffect(() => { heading.current?.focus({preventScroll: true}); }, [card.id, number]);
  return <article className={`question-card ${card.category.toLowerCase()}`}>
    <div className="card-meta"><span>{moods[card.category].emoji} {moods[card.category].name} <span lang="en">{card.category}</span></span><span>第 {String(number).padStart(2,'0')} 題 <span lang="en">· QUESTION</span></span></div>
    <div className="question-body"><span className="question-emoji" aria-hidden="true">{card.emoji}</span>
      <h1 ref={heading} tabIndex={-1}><span lang="zh-Hant">{card.zh.title}</span><span lang="en" className="english-heading">{card.title}</span></h1>
      <BilingualText className="scenario" zh={card.zh.scenario} en={card.scenario}/>
      <h2><span lang="zh-Hant">{card.zh.question}</span><span lang="en" className="english-heading">{card.question}</span></h2>
    </div>
    <div className={`reveal ${deeper ? 'is-open' : ''}`} id="deeper-content" aria-hidden={!deeper}><div><div className="deeper-inner">
      <p className="eyebrow">換個角度想 <span lang="en">· A LITTLE PLOT TWIST</span></p>
      <BilingualText zh={card.zh.twist} en={card.twist}/>
      <h3><span lang="zh-Hant">{card.zh.deeperQuestion}</span><span lang="en" className="english-heading">{card.deeperQuestion}</span></h3>
    </div></div></div>
    <div className="card-actions">{!deeper ? <button className="primary" aria-expanded={deeper} aria-controls="deeper-content" onClick={onDeeper}><span>✨ 深入一層 <span lang="en" className="button-en">Go Deeper</span></span><span aria-hidden="true">↓</span></button> : <button className="primary" onClick={onNext}><span>下一題 <span lang="en" className="button-en">Next Question</span></span><span aria-hidden="true">→</span></button>}</div>
  </article>;
}

function App() {
  const [mode, setMode] = useState<Category | 'Surprise'>('Surprise');
  const [card, setCard] = useState<Question | null>(null);
  const [number, setNumber] = useState(0);
  const [deeper, setDeeper] = useState(false);
  const homeHeading = useRef<HTMLHeadingElement>(null);
  function start(category: Category | 'Surprise') { setMode(category); setCard(drawQuestion(category)); setNumber(1); setDeeper(false); window.scrollTo({top:0}); }
  function next() { setCard(drawQuestion(mode, card?.id)); setNumber(n=>n+1); setDeeper(false); window.scrollTo({top:0, behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth'}); }
  function home() { setCard(null); setDeeper(false); requestAnimationFrame(()=>homeHeading.current?.focus()); }
  return <div className="app"><header className="site-header"><button className="wordmark" onClick={home} aria-label="Ponder 首頁 / Home">PONDER <span>🌷</span></button><span className="header-note">一個問題，聊出另一個角度。<span className="inline-en" lang="en">A little question. A big conversation.</span></span><span className="header-spark" aria-hidden="true">✳</span></header>
    <main>{card ? <section className="play-screen"><nav className="play-nav" aria-label="遊戲操作 / Game controls"><button className="text-button" onClick={home}>← 返回 <span lang="en">Back</span></button><button className="text-button" onClick={next} aria-label="隨機換一題 / Shuffle to another question">⤨ 換一題 <span lang="en">Shuffle</span></button></nav><div key={number + '-' + card.id} className="card-enter"><QuestionCard card={card} number={number} deeper={deeper} onDeeper={()=>setDeeper(true)} onNext={next}/></div><p className="play-note">慢慢想，精彩的部分在對話裡。<span lang="en" className="inline-en">Take your time. The good part is the conversation.</span></p></section> : <section className="home-screen"><div className="intro"><span className="eyebrow intro-label">給好奇的你，和身邊的朋友</span><h1 ref={homeHeading} tabIndex={-1}>值得聊深一點<br/><span>的問題。</span></h1><p className="home-tagline" lang="en">Questions worth arguing about.</p><p>少一點客套，多一點「如果……」<span className="inline-en" lang="en">Less small talk. More “what if…”</span></p><div className="hero-art"><Tulip/><span className="art-caption">一起聊聊 <span lang="en">let’s get into it</span></span></div><span className="tiny-star" aria-hidden="true">✧</span></div><div className="pick-label"><h2>今天想聊甚麼？<span lang="en">What’s the mood?</span></h2><span>{questions.length} 題 <span lang="en">questions</span></span></div><div className="category-grid">{categories.map(category=><button key={category} className={`category-tile ${category.toLowerCase()}`} onClick={()=>start(category)}><span className="category-emoji" aria-hidden="true">{moods[category].emoji}</span><span className="category-copy"><strong>{moods[category].name} <span lang="en">{category}</span></strong><span>{moods[category].description}<span className="inline-en" lang="en">{moods[category].en}</span></span></span><span className="category-count">{questions.filter(q => q.category === category).length} 題 <span lang="en">cards</span></span></button>)}</div><button className="surprise" onClick={()=>start('Surprise')}><span>🎲</span><span>隨機選一題 <span lang="en" className="button-en">Surprise Me</span></span><span className="surprise-note">交給宇宙決定<span lang="en" className="inline-en">Leave it to the universe</span></span><span className="surprise-arrow" aria-hidden="true">→</span></button><div className="how-to"><span>選個分類<span lang="en" className="inline-en">Pick a mood</span></span><i>·</i><span>把情境讀出來<span lang="en" className="inline-en">Read it out loud</span></span><i>·</i><span>聽聽彼此的想法<span lang="en" className="inline-en">See where it goes</span></span></div></section>}</main><footer><span>沒有標準答案，只有好對話。<span lang="en" className="inline-en">No right answers. Just good conversations.</span></span><span className="footer-flower" aria-hidden="true">✿</span><span>為相聚而設。<span lang="en" className="inline-en">Made for being together.</span></span></footer></div>;
}

createRoot(document.getElementById('root')!).render(<React.StrictMode><App/></React.StrictMode>);
