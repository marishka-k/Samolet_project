import { shuffle } from './shuffle';

export const DECK_SIZE = 10;

/**
 * Собирает колоду из `size` случайных вопросов.
 * Сначала берём вопросы, которые игроки ещё не видели (seen).
 * Если новых вопросов осталось меньше, чем нужно, добираем
 * уже показанными и начинаем новый круг (seen обнуляется).
 */
export function dealDeck(questions, seen = new Set(), size = DECK_SIZE) {
  const unseen = questions.filter((question) => !seen.has(question));

  if (unseen.length >= size) {
    return { deck: shuffle(unseen).slice(0, size), seen };
  }

  const alreadySeen = questions.filter((question) => seen.has(question));
  const topUp = shuffle(alreadySeen).slice(0, size - unseen.length);

  return { deck: shuffle([...unseen, ...topUp]), seen: new Set() };
}
