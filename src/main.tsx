import React, { useEffect, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { categories, questions, type Category, type Question } from './questions';
import { drawQuestion } from './deck';
import './style.css';

const moods: Record<Category, {emoji: string; description: string}> = {
  Cute: {emoji:'🌷', description:'Soft hearts. Big feelings.'},
  Funny: {emoji:'😂', description:'Ridiculous, but hear me out.'},
  Moral: {emoji:'⚖️', description:'Where do you draw the line?'},
  Love: {emoji:'❤️', description:'It’s complicated. Let’s talk.'},
  Deep: {emoji:'🧠', description:'A little existential, in a good way.'},
  Weird: {emoji:'🌀', description:'Things are about to get strange.'},
};

function Tulip() {
  return <svg className="tulip" viewBox="0 0 180 200" aria-hidden="true"><path d="M88 183Q93 126 88 88" fill="none" stroke="#63754c" strokeWidth="8" strokeLinecap="round"/><path d="M88 165Q37 170 32 126Q75 124 88 165M91 143Q134 145 146 108Q106 107 91 143" fill="#63754c"/><path d="M49 32Q53 17 69 42L91 16L110 42Q139 13 134 42L133 71Q133 109 91 111Q48 108 48 72Z" fill="#c35e76"/><path d="M68 44Q71 72 88 82Q110 70 113 44" fill="none" stroke="#a9425d" strokeWidth="3"/><path d="M27 54L21 42M146 78L158 73M137 21L145 10" stroke="#c49c52" strokeWidth="3" strokeLinecap="round"/></svg>;
}

export function QuestionCard({ card, number, deeper, onDeeper, onNext }: {card: Question; number: number; deeper: boolean; onDeeper: () => void; onNext: () => void}) {
  const heading = useRef<HTMLHeadingElement>(null);
  useEffect(() => { heading.current?.focus({preventScroll: true}); }, [card.id, number]);
  return <article className={`question-card ${card.category.toLowerCase()}`}>
    <div className="card-meta"><span>{moods[card.category].emoji} {card.category}</span><span>QUESTION {String(number).padStart(2,'0')}</span></div>
    <div className="question-body"><span className="question-emoji" aria-hidden="true">{card.emoji}</span><h1 ref={heading} tabIndex={-1}>{card.title}</h1><p className="scenario">{card.scenario}</p><h2>{card.question}</h2></div>
    <div className={`reveal ${deeper ? 'is-open' : ''}`} id="deeper-content" aria-hidden={!deeper}><div><div className="deeper-inner"><p className="eyebrow">A LITTLE PLOT TWIST</p><p>{card.twist}</p><h3>{card.deeperQuestion}</h3></div></div></div>
    <div className="card-actions">{!deeper ? <button className="primary" aria-expanded={deeper} aria-controls="deeper-content" onClick={onDeeper}>✨ Go Deeper <span>↓</span></button> : <button className="primary" onClick={onNext}>Next Question <span>→</span></button>}</div>
  </article>;
}

function App() {
  const [mode, setMode] = useState<Category | 'Surprise'>('Surprise');
  const [card, setCard] = useState<Question | null>(null);
  const [number, setNumber] = useState(0);
  const [deeper, setDeeper] = useState(false);
  const homeHeading = useRef<HTMLHeadingElement>(null);
  function start(category: Category | 'Surprise') { setMode(category); setCard(drawQuestion(category)); setNumber(1); setDeeper(false); window.scrollTo({top:0}); }
  function next() { setCard(drawQuestion(mode, card?.id)); setNumber(n=>n+1); setDeeper(false); window.scrollTo({top:0, behavior:'smooth'}); }
  function home() { setCard(null); setDeeper(false); requestAnimationFrame(()=>homeHeading.current?.focus()); }
  return <div className="app"><header className="site-header"><button className="wordmark" onClick={home} aria-label="Ponder home">PONDER <span>🌷</span></button><span className="header-note">A little question. A big conversation.</span><span className="header-spark" aria-hidden="true">✳</span></header>
    <main>{card ? <section className="play-screen"><nav className="play-nav" aria-label="Game controls"><button className="text-button" onClick={home}>← Back</button><button className="text-button" onClick={next} aria-label="Shuffle to another question">⤨ Shuffle</button></nav><div key={number + '-' + card.id} className="card-enter"><QuestionCard card={card} number={number} deeper={deeper} onDeeper={()=>setDeeper(true)} onNext={next}/></div><p className="play-note">Take your time. The good part is the conversation.</p>{questions.filter(q=>mode==='Surprise'||q.category===mode).length===1 && <p className="deck-note">One starter card in this category. Try Surprise Me for the full deck.</p>}</section> : <section className="home-screen"><div className="intro"><span className="eyebrow intro-label">FOR CURIOUS MINDS & GOOD COMPANY</span><h1 ref={homeHeading} tabIndex={-1}>Questions worth<br/><span>arguing about.</span></h1><p>Less small talk. More “wait, but what if…”</p><div className="hero-art"><Tulip/><span className="art-caption">let’s get into it</span></div><span className="tiny-star" aria-hidden="true">✧</span></div><div className="pick-label"><h2>What’s the mood?</h2><span>Pick a category to begin</span></div><div className="category-grid">{categories.map(category=><button key={category} className={`category-tile ${category.toLowerCase()}`} onClick={()=>start(category)}><span className="category-emoji" aria-hidden="true">{moods[category].emoji}</span><span className="category-copy"><strong>{category}</strong><span>{moods[category].description}</span></span><span className="category-arrow" aria-hidden="true">↗</span></button>)}</div><button className="surprise" onClick={()=>start('Surprise')}><span>🎲</span> Surprise Me <span className="surprise-note">Leave it to the universe</span><span className="surprise-arrow">→</span></button><div className="how-to"><span>Pick a mood</span><i>·</i><span>Read it out loud</span><i>·</i><span>See where it goes</span></div></section>}</main><footer><span>No right answers. Just good conversations.</span><span className="footer-flower" aria-hidden="true">✿</span><span>Made for being together.</span></footer></div>;
}

createRoot(document.getElementById('root')!).render(<React.StrictMode><App/></React.StrictMode>);
