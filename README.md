# Самолёт — карточки для разговора (React + Vite)

Одностраничный сайт по макету Figma «Samolet — Digital Cards».

## Запуск

```bash
npm install
npm run dev      # разработка
npm run build    # сборка в dist/
```

## Как работает игра

- В `src/data/questions.js` у каждой категории (пара, друзья, семья, коллеги) по 30 вопросов.
- Колода — 10 случайных вопросов категории (`DECK_SIZE` в `src/utils/deck.js`).
- Клик по обложке переворачивает верхнюю карточку, «Следующий вопрос» открывает следующую.
- На последней карточке появляется «последний вопрос» и кнопка **«Начать игру заново»**:
  она раздаёт новую колоду из той же категории, сначала из вопросов, которые ещё не выпадали.
  Когда непоказанных вопросов остаётся меньше 10, круг начинается заново.
- Смена категории — новая колода выбранной категории.

## Структура

```
src/
  main.jsx, App.jsx
  styles/global.css          # цвета, шрифты, размеры (токены из UI Kit)
  data/
    questions.js             # вопросы по категориям
    content.js               # тексты страницы, меню, соцсети
  hooks/useGame.js           # состояние игры (колода, индекс, уже показанные)
  utils/                     # shuffle, deck (раздача), share, cx
  api/sendFeedback.js        # отправка формы (адрес в .env)
  components/
    Header/ (Header, Logo)   Hero/   TextSection/   FeatheredPhoto/
    Game/ (Game, Card, CategoryTabs)
    FeedbackForm/   Footer/   SocialLinks/   Button/   Icons/
```

У каждого компонента свой `*.module.css` (CSS Modules).

## Что нужно добавить

- `public/fonts/` — файлы CoFo Sans (см. README.txt внутри).
- `public/images/` — все изображения уже лежат (фото страницы и обложки колод). Чтобы заменить, положите файл с тем же именем.
- `.env` — `VITE_FEEDBACK_URL` для формы (см. `.env.example`). Без него форма работает в демо-режиме.
- Ссылки на соцсети и документы: `src/data/content.js` и `FeedbackForm.jsx` (сейчас `#`).
