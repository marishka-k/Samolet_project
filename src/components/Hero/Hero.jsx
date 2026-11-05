import { HERO } from '../../data/content';
import Button from '../Button/Button';
import FeatheredPhoto from '../FeatheredPhoto/FeatheredPhoto';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <FeatheredPhoto className={styles.photo} src={`${import.meta.env.BASE_URL}images/hero.jpg`} alt="" />

      <div className={styles.inner}>
        <h1 id="hero-title" className={styles.title}>
          {HERO.title[0]}
          <br />
          {HERO.title[1]}
        </h1>
        <p className={styles.subtitle}>{HERO.subtitle}</p>
        <Button href="#game" variant="outline" className={styles.button}>
          {HERO.button}
        </Button>
      </div>
    </section>
  );
}
