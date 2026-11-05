import { cx } from '../../utils/cx';
import FeatheredPhoto from '../FeatheredPhoto/FeatheredPhoto';
import styles from './TextSection.module.css';

/** Блок «текст + фото». Используется для «О Самолете» и «Инструкция к игре». */
export default function TextSection({ id, title, paragraphs, image, imagePosition = 'left' }) {
  return (
    <section id={id} className={cx(styles.section, imagePosition === 'right' && styles.reverse)} aria-labelledby={`${id}-title`}>
      <FeatheredPhoto className={styles.photo} src={image} />

      <div className={styles.text}>
        <h2 id={`${id}-title`} className={styles.title}>
          {title}
        </h2>
        <div className={styles.body}>
          {paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
