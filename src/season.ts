import type { Question } from './questions';
// Recurs every year, using the player's local calendar. Jan 2 returns to normal.
export function isFestiveSeason(now = new Date()): boolean {
  return (now.getMonth() === 10 && now.getDate() >= 26) || now.getMonth() === 11 || (now.getMonth() === 0 && now.getDate() === 1);
}
export function isQuestionAvailable(card: Question, now = new Date()): boolean {
  return card.season !== 'festive' || isFestiveSeason(now);
}
