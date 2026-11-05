import { useReducer } from 'react';
import { CATEGORIES, getCategory } from '../data/questions';
import { dealDeck } from '../utils/deck';

/*
 * Состояние игры:
 *  categoryId — выбранная категория
 *  deck       — 10 случайных вопросов этой категории
 *  index      — номер открытого вопроса (-1: колода закрыта, видна обложка)
 *  seen       — { [categoryId]: Set } вопросы, которые уже были показаны,
 *               чтобы после «Начать игру заново» выпадали другие
 */

function createGame(categoryId, seen = {}) {
  const { questions } = getCategory(categoryId);
  const dealt = dealDeck(questions, seen[categoryId]);
  return {
    categoryId,
    deck: dealt.deck,
    index: -1,
    seen: { ...seen, [categoryId]: dealt.seen },
  };
}

function reveal(state, index) {
  const seenInCategory = new Set(state.seen[state.categoryId]);
  seenInCategory.add(state.deck[index]);
  return {
    ...state,
    index,
    seen: { ...state.seen, [state.categoryId]: seenInCategory },
  };
}

function reducer(state, action) {
  switch (action.type) {
    case 'select':
      return action.categoryId === state.categoryId ? state : createGame(action.categoryId, state.seen);
    case 'open':
      return state.index === -1 ? reveal(state, 0) : state;
    case 'next':
      return state.index >= 0 && state.index < state.deck.length - 1 ? reveal(state, state.index + 1) : state;
    case 'restart':
      return createGame(state.categoryId, state.seen);
    default:
      return state;
  }
}

export function useGame(initialCategoryId = CATEGORIES[0].id) {
  const [state, dispatch] = useReducer(reducer, initialCategoryId, (id) => createGame(id));

  const isOpen = state.index >= 0;
  const isLast = isOpen && state.index === state.deck.length - 1;

  return {
    categories: CATEGORIES,
    category: getCategory(state.categoryId),
    deck: state.deck,
    index: state.index,
    question: isOpen ? state.deck[state.index] : null,
    isOpen,
    isLast,
    actions: {
      selectCategory: (categoryId) => dispatch({ type: 'select', categoryId }),
      open: () => dispatch({ type: 'open' }),
      next: () => dispatch({ type: 'next' }),
      restart: () => dispatch({ type: 'restart' }),
    },
  };
}
