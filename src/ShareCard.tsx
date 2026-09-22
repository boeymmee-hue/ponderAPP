import { useEffect, useRef, useState } from 'react';
import type { Question } from './questions';
import { makeShareImage, questionUrl } from './share';

export function ShareCard({card}: {card: Question}) {
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const [open, setOpen] = useState(false);
  const [language, setLanguage] = useState<'zh' | 'en'>('zh');
  const [image, setImage] = useState<{url: string; file: File} | null>(null);
  const [imageError, setImageError] = useState(false);
  const [message, setMessage] = useState('');
  const [sharing, setSharing] = useState(false);
  const link = questionUrl(card.id);
  useEffect(() => {
    if (!open) return;
    dialog.current?.showModal();
    const overflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { dialog.current?.close(); document.body.style.overflow = overflow; trigger.current?.focus({preventScroll:true}); };
  }, [open]);
  useEffect(() => {
    if (!open) return;
    let cancelled = false;
    let url: string | undefined;
    setImage(null); setImageError(false); setMessage('');
    makeShareImage(card, language).then(blob => {
      if (cancelled) return;
      url = URL.createObjectURL(blob);
      setImage({url, file: new File([blob], `ponder-${card.id}-${language}.png`, {type:'image/png'})});
    }).catch(() => { if (!cancelled) setImageError(true); });
    return () => { cancelled = true; if (url) URL.revokeObjectURL(url); };
  }, [open, card, language]);
  async function copyLink() {
    try { await navigator.clipboard.writeText(link); setMessage('連結已複製，貼畀朋友就可以打開同一題。 Link copied.'); }
    catch { setMessage('請選取下方網址，再複製分享。 Select and copy the link below.'); }
  }
  async function share() {
    setMessage(''); setSharing(true);
    try {
      const text = language === 'zh' ? `我想聽聽你嘅想法：${card.zh.title}\n${card.zh.question}` : `I’d love your perspective: ${card.title}\n${card.question}`;
      const data: ShareData = {title:`Ponder · ${card.zh.title}`, text, url:link};
      if (image && navigator.canShare?.({files:[image.file]})) data.files = [image.file];
      if (typeof navigator.share === 'function') await navigator.share(data);
      else await copyLink();
    } catch (error) {
      if (!(error instanceof DOMException && error.name === 'AbortError')) setMessage('未能開啟分享選單；可以儲存圖片，再複製連結傳畀朋友。 Save the image and copy the link instead.');
    } finally { setSharing(false); }
  }
  return <>
    <button ref={trigger} className="share-trigger" onClick={()=>setOpen(true)}><span aria-hidden="true">↗</span><span>分享畀朋友 <span lang="en">Share to friends</span></span><span aria-hidden="true">♡</span></button>
    {open && <dialog ref={dialog} className="share-dialog" aria-labelledby="share-title" onCancel={event=>{event.preventDefault();setOpen(false);}} onClick={event=>{if(event.target===event.currentTarget)setOpen(false);}}>
      <div className="share-panel"><div className="share-top"><div><p className="eyebrow">A THOUGHT WORTH SHARING</p><h2 id="share-title">把問題，變成連結。</h2><p>傳畀一個你想更了解嘅人。<span lang="en" className="inline-en">Send this to someone you want to know better.</span></p></div><button className="close-share" onClick={()=>setOpen(false)} aria-label="關閉分享 / Close share">×</button></div>
      <div className="share-languages" role="group" aria-label="分享圖片語言 / Image language"><button aria-pressed={language==='zh'} onClick={()=>setLanguage('zh')}>繁體中文</button><button aria-pressed={language==='en'} onClick={()=>setLanguage('en')}>English</button></div>
      <div className="share-preview">{image ? <img src={image.url} alt={`Ponder 分享卡：${language==='zh' ? card.zh.title : card.title}。${language==='zh' ? card.zh.scenario : card.scenario} ${language==='zh' ? card.zh.question : card.question}`}/> : <p role="status">{imageError ? '圖片暫時未能製作，仍可分享題目連結。' : '正在製作分享卡……'}</p>}</div>
      <button className="primary" disabled={sharing || (!image && !imageError)} onClick={share}><span>分享這一題 <span className="button-en" lang="en">Share this card</span></span><span aria-hidden="true">↗</span></button>
      <div className="share-options"><button onClick={copyLink}>複製連結 <span lang="en">Copy link</span></button>{image && <a href={image.url} download={`ponder-${card.id}-${language}.png`}>儲存圖片 <span lang="en">Save image</span></a>}</div>
      <p className="share-hint">朋友打開連結，就會見到同一題。<span lang="en" className="inline-en">The link opens this exact card. Send it with your image.</span></p>
      <label className="share-link-label" htmlFor="share-link">題目連結 <span lang="en">Card link</span></label><input id="share-link" className="share-link" readOnly value={link} onFocus={event=>event.currentTarget.select()}/>
      <p className="share-status" role="status">{message}</p></div>
    </dialog>}
  </>;
}
