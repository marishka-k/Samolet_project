import { useEffect, useState } from 'react';
import { NAV_LINKS } from '../../data/content';
import { cx } from '../../utils/cx';
import { CloseIcon, MenuIcon } from '../Icons/Icons';
import SocialLinks from '../SocialLinks/SocialLinks';
import Logo from './Logo';
import styles from './Header.module.css';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Закрываем мобильное меню по Escape
  useEffect(() => {
    if (!menuOpen) return undefined;
    const onKeyDown = (event) => event.key === 'Escape' && setMenuOpen(false);
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [menuOpen]);

  return (
    <header className={styles.header}>
      <div className={styles.bar}>
        <Logo />

        <SocialLinks className={styles.social} />

        <button
          type="button"
          className={styles.burger}
          aria-expanded={menuOpen}
          aria-controls="site-nav"
          aria-label={menuOpen ? 'Закрыть меню' : 'Открыть меню'}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>

        <nav id="site-nav" className={cx(styles.nav, menuOpen && styles.open)} aria-label="Основная навигация">
          <ul className={styles.list}>
            {NAV_LINKS.map(({ href, label }) => (
              <li key={href}>
                <a className={styles.link} href={href} onClick={() => setMenuOpen(false)}>
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
