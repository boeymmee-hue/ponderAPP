import { questions, type Category, type Question } from './questions';

const KEY = 'ponder.seen.v1';
type History = Partial<Record<Category, string[]>>;
let memory: History = {};
function readHistory(): History {
  try {
    const value: unknown = JSON.parse(localStorage.getItem(KEY) || '{}');
    if (!value || typeof value !== 'object' || Array.isArray(value)) return memory;
    const result: History = {};
    for (const category of new Set(questions.map(q => q.category))) {
      const ids = (value as Record<string, unknown>)[category];
      if (Array.isArray(ids)) result[category] = ids.filter((id): id is string => typeof id === 'string');
    }
    return result;
  } catch { return memory; }
}

export function drawQuestion(category: Category | 'Surprise', previousId?: string): Question {
  const history = readHistory();
  const selected = category === 'Surprise' ? [...new Set(questions.map(q => q.category))] : [category];
  let available = questions.filter(q => selected.includes(q.category) && !history[q.category]?.includes(q.id));
  if (!available.length) {
    for (const name of selected) history[name] = [];
    available = questions.filter(q => selected.includes(q.category));
  }
  const different = available.filter(q => q.id !== previousId);
  if (different.length) available = different;
  const question = available[Math.floor(Math.random() * available.length)];
  history[question.category] = [...new Set([...(history[question.category] || []), question.id])];
  memory = history;
  try { localStorage.setItem(KEY, JSON.stringify(history)); } catch { /* Private browsing can restrict storage; keep playing in memory. */ }
  return question;
}
