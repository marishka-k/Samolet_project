import { useEffect, useRef, useState } from 'react';
import { GAME_TEXT } from '../../data/content';
import { useGame } from '../../hooks/useGame';
import { shareQuestion } from '../../utils/share';
import Button from '../Button/Button';
import { ArrowRightIcon, ShareIcon } from '../Icons/Icons';
import Card from './Card';
import CategoryTabs from './CategoryTabs';
import styles from './Game.module.css';

export default function Game() {
  const { categories, category, deck, index, question, isOpen, isLast, actions } = useGame();

  const cardRef = useRef(null);
  const actionsRef = useRef(null);
  const restartedRef = useRef(false);
  const prevIndexRef = useRef(index);
  const noticeTimerRef = useRef(null);
  const [notice, setNotice] = useState('');

  // Управление фокусом: после переворота — на кнопку действия,
  // после «Начать игру заново» — обратно на колоду
  useEffect(() => {
    const prev = prevIndexRef.current;
    if (prev === -1 && index === 0) {
      actionsRef.current?.querySelector('button')?.focus();
    } else if (prev > -1 && index === -1 && restartedRef.current) {
      cardRef.current?.focus();
    }
    restartedRef.current = false;
    prevIndexRef.current = index;
  }, [index]);

  useEffect(() => () => clearTimeout(noticeTimerRef.current), []);

  const flash = (message) => {
    setNotice(message);
    clearTimeout(noticeTimerRef.current);
    noticeTimerRef.current = setTimeout(() => setNotice(''), 2500);
  };

  const handleRestart = () => {
    restartedRef.current = true;
    actions.restart();
  };

  const handleShare = async () => {
    const result = await shareQuestion(question);
    if (result === 'copied') flash('Вопрос скопирован в буфер обмена');
    if (result === 'failed') flash('Не удалось поделиться — скопируйте вопрос вручную');
  };

  let hint = '';
  if (!isOpen) hint = GAME_TEXT.hintClosed;
  else if (isLast) hint = GAME_TEXT.hintFinished;

  return (
    <section id="game" className={styles.game} aria-labelledby="game-title">
      <h2 id="game-title" className={styles.title}>
        {GAME_TEXT.title}
      </h2>

      <CategoryTabs categories={categories} activeId={category.id} onSelect={actions.selectCategory} />

      <p className={styles.hint}>{hint}</p>

      <Card
        ref={cardRef}
        category={category}
        question={question}
        index={index}
        total={deck.length}
        isLast={isLast}
        onOpen={actions.open}
      />

      <div className={styles.actions} ref={actionsRef}>
        {isOpen && (
          <>
            {isLast ? (
              <Button variant="solid" size="m" onClick={handleRestart}>
                Начать игру заново
              </Button>
            ) : (
              <Button variant="solid" size="m" icon={<ArrowRightIcon />} onClick={actions.next}>
                Следующий вопрос
              </Button>
            )}
            <Button variant="light" size="m" icon={<ShareIcon />} onClick={handleShare}>
              Поделиться вопросом
            </Button>
          </>
        )}
      </div>

      <p className={styles.notice} role="status">
        {notice}
      </p>
    </section>
  );
}
