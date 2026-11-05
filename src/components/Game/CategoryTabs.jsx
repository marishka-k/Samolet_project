import { cx } from '../../utils/cx';
import styles from './CategoryTabs.module.css';

export default function CategoryTabs({ categories, activeId, onSelect }) {
  return (
    <div className={styles.tabs} role="group" aria-label="Для кого игра">
      {categories.map(({ id, label }) => (
        <button
          key={id}
          type="button"
          className={cx(styles.tab, id === activeId && styles.active)}
          aria-pressed={id === activeId}
          onClick={() => onSelect(id)}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
