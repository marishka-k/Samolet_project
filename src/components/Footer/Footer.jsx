import Logo from '../Header/Logo';
import SocialLinks from '../SocialLinks/SocialLinks';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <Logo />
        <SocialLinks />
      </div>
    </footer>
  );
}
