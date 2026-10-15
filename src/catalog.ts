import { categories, type Category, type GroupSize, type Question } from './questions';
import approved from './approved-questions.json';
export const moods: Record<Category, {emoji:string;name:string;en:string;description:string;detail:string}> = {
  Crush:{emoji:'♡',name:'心動之間',en:'Crush',description:'從一個假設，認識眼前的你。',detail:'2 人 · 好奇、相處、彼此的方向'},
  Couple:{emoji:'💗',name:'情侶',en:'Couples',description:'聊聊怎樣相愛，也聽見不同的需要。',detail:'2 人 · 愛情、信任、一起的未來'},
  Family:{emoji:'🏠',name:'家庭',en:'Family',description:'從熟悉的小事，認識未聽過的故事。',detail:'2 人以上 · 關心、自由、公平'},
  Party:{emoji:'🎉',name:'朋友聚會',en:'Friends',description:'一起想像、一起選，發現朋友的另一面。',detail:'按人數選玩法 · 不熟也能加入'},
  Solo:{emoji:'🌿',name:'一人思考',en:'Solo',description:'換個情境，聽清自己真正想要甚麼。',detail:'1 人 · 願望、金錢、自己的方向'},
};
export const groupSizes: {id:GroupSize;name:string;description:string}[] = [
  {id:'small',name:'2–3 人',description:'輪流分享，慢慢了解'},
  {id:'medium',name:'4–6 人',description:'一起選擇，合作想點子'},
  {id:'large',name:'7 人以上',description:'快速投票或分小組'},
];
export const SUPPORT_URL = 'https://buy.stripe.com/bJe4gA9Elaksbq33hc2Fa0c';
export const FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSf7J6WV1a64O9N4-Arg4FwbjWrL8KAF3j-e1gpLExUR8QHlCQ/viewform';
const isRecord = (value: unknown): value is Record<string,unknown> => Boolean(value) && typeof value === 'object' && !Array.isArray(value);
// Only explicitly approved, complete records are eligible for publication.
function isApproved(value: unknown): value is Question & {status:'approved'} {
  if (!isRecord(value) || value.status !== 'approved' || typeof value.id !== 'string' || !/^community-[a-z0-9-]+$/.test(value.id)) return false;
  if (!categories.includes(value.category as Category) || typeof value.emoji !== 'string' || !isRecord(value.zh)) return false;
  const fields = ['title','scenario','question','deeperQuestion'];
  return fields.every(key => typeof value[key] === 'string' && (value[key] as string).trim() && typeof (value.zh as Record<string,unknown>)[key] === 'string' && ((value.zh as Record<string,unknown>)[key] as string).trim())
    && typeof value.twist === 'string' && typeof value.zh.twist === 'string'
    && (value.author === undefined || typeof value.author === 'string')
    && (value.groupSize === undefined || ['small','medium','large'].includes(String(value.groupSize)));
}
const ids = new Set<string>();
export const communityQuestions: Question[] = (approved as unknown[]).filter(isApproved).filter(card => {
  if (ids.has(card.id)) return false;
  ids.add(card.id); return true;
}).map(card=>({...card,legacy:false}));
