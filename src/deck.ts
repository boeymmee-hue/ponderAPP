import { isQuestionAvailable } from './season';
import { questions, type Category, type GroupSize, type Level, type PartyMood, type Question } from './questions';
const KEY = 'ponder.seen.v2';
let memory: string[] = [];
function readHistory(): string[] {
  try {
    const value: unknown = JSON.parse(localStorage.getItem(KEY) || '[]');
    return Array.isArray(value) ? value.filter((id): id is string=>typeof id==='string') : memory;
  } catch { return memory; }
}
export function partyMoodFor(card: Question): PartyMood {
  return card.partyMood ?? (card.level==='deeper' ? 'dilemma' : 'personality');
}
export function questionPool(category: Category, _groupSize?: GroupSize, level?: Level, partyMood?: PartyMood, festiveOnly = false, now = new Date()): Question[] {
  return questions.filter(q=>q.category===category && isQuestionAvailable(q,now) && (festiveOnly
    ? q.season==='festive'
    : !q.season && (category==='Party' ? !partyMood || partyMoodFor(q)===partyMood
      : category==='Crush' || category==='Girls' || !level || (q.level ?? 'classic')===level)));
}
export function drawQuestion(category: Category, previousId?: string, groupSize?: GroupSize, level?: Level, partyMood?: PartyMood, festiveOnly = false): Question {
  const pool = questionPool(category,groupSize,level,partyMood,festiveOnly);
  if (!pool.length) throw new Error('No questions for this selection');
  let history = readHistory();
  let available = pool.filter(q=>!history.includes(q.id));
  if (!available.length) {
    const poolIds=new Set(pool.map(q=>q.id));
    history=history.filter(id=>!poolIds.has(id)); available=pool;
  }
  const different=available.filter(q=>q.id!==previousId);
  if(different.length)available=different;
  const card=available[Math.floor(Math.random()*available.length)];
  memory=[...new Set([...history,card.id])];
  try {localStorage.setItem(KEY,JSON.stringify(memory));}catch{/* Keep the same behavior when storage is blocked. */}
  return card;
}
