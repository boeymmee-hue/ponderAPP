import { questions, type Question } from './questions';

export function questionFromUrl(href: string): Question | null {
  const id = new URL(href).searchParams.get('q');
  return questions.find(card => card.id === id) ?? null;
}
export function questionUrl(id: string, href = window.location.href): string {
  const url = new URL(href);
  url.search = '';
  url.hash = '';
  url.searchParams.set('q', id);
  return url.href;
}
export function updateQuestionUrl(id?: string) {
  const url = new URL(window.location.href);
  url.search = '';
  url.hash = '';
  if (id) url.searchParams.set('q', id);
  window.history.replaceState(null, '', url);
}

const palettes = {Cute:'#f6dfdc', Funny:'#f6e8b4', Moral:'#e4e8d7', Love:'#f1dce6', Deep:'#e2def0', Weird:'#dbe9ea'};
const names = {Cute:'可愛', Funny:'搞笑', Moral:'道德', Love:'愛情', Deep:'深度', Weird:'奇想'};
const sans = 'Arial, "PingFang TC", "Microsoft JhengHei", sans-serif';
const serif = 'Georgia, "Songti TC", serif';

// Measure real glyphs, preserving English words and wrapping long tokens as needed.
export function wrapText(ctx: Pick<CanvasRenderingContext2D, 'measureText'>, text: string, width: number): string[] {
  const lines: string[] = [];
  for (const paragraph of text.split(/\n+/)) {
    let line = '';
    for (const token of paragraph.match(/[A-Za-z0-9]+(?:['’\-][A-Za-z0-9]+)*|\s+|./gu) ?? []) {
      if (ctx.measureText(line + token).width <= width) { line += token; continue; }
      if (line.trim()) lines.push(line.trim());
      line = token.trimStart();
      if (ctx.measureText(line).width > width) {
        let part = '';
        for (const char of line) {
          if (part && ctx.measureText(part + char).width > width) { lines.push(part); part = ''; }
          part += char;
        }
        line = part;
      }
    }
    if (line.trim()) lines.push(line.trim());
  }
  return lines;
}

export async function makeShareImage(card: Question, language: 'zh' | 'en'): Promise<Blob> {
  await document.fonts.ready;
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  if (!ctx) throw new Error('Canvas unavailable');
  const copy = language === 'zh' ? card.zh : card;
  const width = 824;
  ctx.font = `bold 48px ${sans}`;
  const title = wrapText(ctx, copy.title, width);
  ctx.font = `34px ${sans}`;
  const scenario = wrapText(ctx, copy.scenario, width);
  ctx.font = `46px ${serif}`;
  const question = wrapText(ctx, copy.question, width);
  const titleY = 370;
  const scenarioY = titleY + title.length * 66 + 38;
  const questionY = scenarioY + scenario.length * 55 + 76;
  const bottom = questionY + question.length * 68 + 76;
  canvas.width = 1080;
  canvas.height = Math.max(1350, bottom + 270);
  ctx.fillStyle = '#fff9e9'; ctx.fillRect(0, 0, 1080, canvas.height);
  ctx.fillStyle = palettes[card.category];
  ctx.beginPath(); ctx.roundRect(48, 188, 984, canvas.height - 390, 36); ctx.fill();
  ctx.fillStyle = '#54243d'; ctx.textBaseline = 'top';
  ctx.font = `900 48px ${sans}`; ctx.fillText('PONDER', 64, 64);
  ctx.font = `24px ${sans}`; ctx.fillText('MAKE REAL CONNECTIONS', 610, 79);
  ctx.strokeStyle = '#54243d33'; ctx.lineWidth = 2;
  ctx.beginPath(); ctx.moveTo(64, 145); ctx.lineTo(1016, 145); ctx.stroke();
  ctx.font = `24px ${sans}`; ctx.fillText(`${names[card.category]} / ${card.category.toUpperCase()}`, 128, 244);
  ctx.textAlign = 'right'; ctx.fillText('換個角度 · A NEW PERSPECTIVE', 952, 244); ctx.textAlign = 'left';
  ctx.font = `bold 48px ${sans}`; title.forEach((line,i) => ctx.fillText(line, 128, titleY + i*66));
  ctx.fillStyle = '#67515b'; ctx.font = `34px ${sans}`;
  scenario.forEach((line,i) => ctx.fillText(line, 128, scenarioY + i*55));
  ctx.strokeStyle = '#54243d33'; ctx.beginPath(); ctx.moveTo(128, questionY-38); ctx.lineTo(952, questionY-38); ctx.stroke();
  ctx.fillStyle = '#54243d'; ctx.font = `46px ${serif}`;
  question.forEach((line,i) => ctx.fillText(line, 128, questionY+i*68));
  const footerY = canvas.height - 145;
  ctx.font = `bold 30px ${sans}`; ctx.fillText(language === 'zh' ? '我想聽聽，你會怎樣想？' : 'I’d love to hear your perspective.', 64, footerY);
  ctx.font = `22px ${sans}`; ctx.fillStyle = '#826570';
  ctx.fillText('Overthinking → perspective → connection', 64, footerY+53);
  ctx.textAlign = 'right'; ctx.font = `22px ${sans}`; ctx.fillText(`PONDER / ${card.id.toUpperCase()}`, 1016, footerY+53);
  return new Promise((resolve,reject) => canvas.toBlob(blob => blob ? resolve(blob) : reject(new Error('Image unavailable')), 'image/png'));
}
