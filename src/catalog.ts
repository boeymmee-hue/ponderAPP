import { categories, type Category, type PartyMood, type Question } from './questions';
import approved from './approved-questions.json';
export const moods: Record<Category, {emoji:string;name:string;en:string;description:string;detail:string;descriptionEn:string;detailEn:string}> = {
  Girls:{emoji:'🍸',name:'老BEST 夜話',en:'BESTIE Night Talk',description:'今晚，聊一點平時不說的。',detail:'24 題 · 感情、職場、金錢',descriptionEn:'Tonight, say the things you usually keep to yourself.',detailEn:'24 cards · Love, careers and money'},
  Crush:{emoji:'♡',name:'初次約會・曖昧',en:'First date / Crush',description:'從一個假設，認識眼前的你。',detail:'2 人 · 好奇、相處、彼此的方向',descriptionEn:'Explore a what-if and get to know each other.',detailEn:'2 people · Curiosity, connection and life choices'},
  Couple:{emoji:'💗',name:'情侶',en:'Couples',description:'從日常的小選擇，慢慢讀懂彼此。',detail:'2 人 · 愛情、信任、一起的未來',descriptionEn:'Understand each other through small everyday choices.',detailEn:'2 people · Love, trust and a shared future'},
  Family:{emoji:'🏠',name:'家庭',en:'Family',description:'從熟悉的小事，聊到未聽過的故事。',detail:'2 人以上 · 關心、自由、公平',descriptionEn:'Start with familiar moments. Discover untold stories.',detailEn:'2+ people · Care, freedom and fairness'},
  Party:{emoji:'🎉',name:'朋友聚會',en:'Friends',description:'一起想像、一起選，發現朋友的另一面。',detail:'性格、心動與兩難 · 選擇今晚的程度',descriptionEn:'Imagine, choose and discover another side of your friends.',detailEn:'Personality, sparks and dilemmas · Choose your intensity'},
  Solo:{emoji:'🌿',name:'一人思考',en:'Solo',description:'從一個假設，看看自己如何成為現在的自己。',detail:'1 人 · 性格、家庭影響、人生意義',descriptionEn:'Explore a what-if and what makes you who you are.',detailEn:'1 person · Identity, family influences and meaning'},
};
export const partyMoods: {id:PartyMood;name:string;en:string;description:string;descriptionEn:string}[] = [
  {id:'personality',name:'看見性格',en:'Get to know each other',description:'從小選擇出發，看看朋友跟你哪裡不一樣。',descriptionEn:'Small choices reveal surprisingly different ways of seeing things.'},
  {id:'spark',name:'有點刺激',en:'Turn up the spark',description:'心動、嫉妒、面子與野心，聊一點平時不說的。',descriptionEn:'Attraction, envy, pride and ambition—the things usually left unsaid.'},
  {id:'dilemma',name:'兩難考驗',en:'Dilemmas & human nature',description:'當友情、公平和自己的利益撞在一起，你會怎樣選？',descriptionEn:'What happens when friendship, fairness and self-interest collide?'},
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
