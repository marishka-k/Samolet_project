import { LogoMark } from '../Icons/Icons';
import styles from './Logo.module.css';

export default function Logo() {
  return (
    <a className={styles.logo} href="#top" aria-label="Самолет — в начало страницы">
      <span className={styles.mark}>
        <LogoMark />
      </span>
      <span className={styles.name}>самолет</span>
    </a>
  );
}
