import { cx } from '../../utils/cx';
import styles from './Button.module.css';

/**
 * variant: 'solid' | 'outline' | 'light'
 * size:    'm' (кнопки в игре) | 'l' (крупные кнопки: «Поехали!», «Отправить вопрос»)
 * Если передан href — рендерится ссылкой.
 */
export default function Button({ variant = 'outline', size = 'l', icon, className, children, ...rest }) {
  const Tag = rest.href ? 'a' : 'button';
  const props = Tag === 'button' ? { type: 'button', ...rest } : rest;

  return (
    <Tag className={cx(styles.button, styles[variant], styles[size], className)} {...props}>
      <span>{children}</span>
      {icon && <span className={styles.icon}>{icon}</span>}
    </Tag>
  );
}
