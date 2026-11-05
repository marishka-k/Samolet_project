import { cx } from '../../utils/cx';
import styles from './FeatheredPhoto.module.css';

/**
 * Фото с «растушёванными» краями, как в макете.
 * Пока файла нет, на его месте мягкий голубой блок — вёрстка не ломается.
 */
export default function FeatheredPhoto({ src, alt = '', className }) {
  return (
    <div className={cx(styles.frame, className)}>
      <img
        className={styles.image}
        src={src}
        alt={alt}
        loading="lazy"
        onError={(event) => {
          event.currentTarget.style.visibility = 'hidden';
        }}
      />
    </div>
  );
}
