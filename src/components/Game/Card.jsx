import { forwardRef } from 'react';
import { GAME_TEXT } from '../../data/content';
import { cx } from '../../utils/cx';
import styles from './Card.module.css';

/**
 * Колода карточек.
 * index = -1 — колода закрыта (видна обложка категории),
 * иначе показан вопрос deck[index]. Под верхней карточкой
 * рисуются «листы» оставшихся карточек (не больше двух).
 */
const Card = forwardRef(function Card({ category, question, index, total, isLast, onOpen }, ref) {
  const isOpen = index >= 0;
  const cardsBehind = isOpen ? total - index - 1 : total - 1;
  const layers = Math.min(2, cardsBehind);

  return (
    <div className={styles.wrapper}>
      <div className={styles.stack}>
        {/* Дальний лист рисуем первым, чтобы ближний лёг поверх него */}
        {Array.from({ length: layers }, (_, i) => layers - i).map((depth) => (
          <span key={depth} className={styles.layer} style={{ '--i': depth }} aria-hidden="true" />
        ))}

        <div className={cx(styles.card, isOpen && styles.flipped)}>
          {/* Лицевая сторона: обложка */}
          <button
            ref={ref}
            type="button"
            className={styles.front}
            onClick={onOpen}
            disabled={isOpen}
            tabIndex={isOpen ? -1 : 0}
            aria-hidden={isOpen}
            aria-label={`Перевернуть верхнюю карточку, категория: ${category.label}`}
          >
            <span className={styles.mark} aria-hidden="true">
              ?
            </span>
            <img
              key={category.id}
              className={styles.cover}
              src={`${import.meta.env.BASE_URL}images/cover-${category.id}.jpg`}
              alt=""
              onError={(event) => {
                event.currentTarget.style.visibility = 'hidden';
              }}
            />
          </button>

          {/* Обратная сторона: вопрос */}
          <div className={styles.back} aria-hidden={!isOpen} aria-live="polite">
            {['tl', 'tr', 'bl', 'br'].map((position) => (
              <span key={position} className={cx(styles.corner, styles[position])} aria-hidden="true">
                <span className={styles.inner} />
              </span>
            ))}

            {isOpen && (
              <>
                <span className="visually-hidden">
                  Вопрос {index + 1} из {total}.
                </span>
                <p key={index} className={styles.question}>
                  {question}
                </p>
              </>
            )}

            {isLast && <span className={styles.last}>{GAME_TEXT.lastLabel}</span>}
          </div>
        </div>
      </div>
    </div>
  );
});

export default Card;
