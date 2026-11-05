import { ABOUT, MANUAL } from './data/content';
import FeedbackForm from './components/FeedbackForm/FeedbackForm';
import Footer from './components/Footer/Footer';
import Game from './components/Game/Game';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import TextSection from './components/TextSection/TextSection';
import styles from './App.module.css';

export default function App() {
  return (
    <div id="top">
      <Header />
      <main>
        <Hero />
        <div className={styles.content}>
          <TextSection {...ABOUT} imagePosition="left" />
          <TextSection {...MANUAL} imagePosition="right" />
          <Game />
          <FeedbackForm />
        </div>
      </main>
      <Footer />
    </div>
  );
}
