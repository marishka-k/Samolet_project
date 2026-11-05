import { useState } from 'react';
import { sendFeedback } from '../../api/sendFeedback';
import { FEEDBACK } from '../../data/content';
import Button from '../Button/Button';
import FeatheredPhoto from '../FeatheredPhoto/FeatheredPhoto';
import styles from './FeedbackForm.module.css';

const EMPTY = { name: '', email: '', phone: '', message: '', consent: false };

export default function FeedbackForm() {
  const [values, setValues] = useState(EMPTY);
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error

  const handleChange = (event) => {
    const { name, type, value, checked } = event.target;
    setValues((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
    if (status === 'sent' || status === 'error') setStatus('idle');
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus('sending');
    try {
      const { consent, ...fields } = values;
      await sendFeedback({ ...fields, consentGiven: consent });
      setValues(EMPTY);
      setStatus('sent');
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section id={FEEDBACK.id} className={styles.section} aria-labelledby="feedback-title">
      <header className={styles.head}>
        <h2 id="feedback-title" className={styles.title}>
          {FEEDBACK.title}
        </h2>
        <p className={styles.lead}>
          {FEEDBACK.lead}
          <br />
          {FEEDBACK.text}
        </p>
      </header>

      <div className={styles.layout}>
        <FeatheredPhoto className={styles.photo} src={FEEDBACK.image} />

        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.fields}>
            <input
              className={styles.input}
              name="name"
              type="text"
              autoComplete="name"
              placeholder="Имя"
              aria-label="Имя"
              value={values.name}
              onChange={handleChange}
            />
            <input
              className={styles.input}
              name="email"
              type="email"
              autoComplete="email"
              placeholder="Почта"
              aria-label="Почта"
              value={values.email}
              onChange={handleChange}
            />
            <input
              className={styles.input}
              name="phone"
              type="tel"
              autoComplete="tel"
              placeholder="Телефон"
              aria-label="Телефон"
              value={values.phone}
              onChange={handleChange}
            />
            <textarea
              className={`${styles.input} ${styles.textarea}`}
              name="message"
              placeholder="Текст вопроса"
              aria-label="Текст вопроса"
              required
              value={values.message}
              onChange={handleChange}
            />
          </div>

          <label className={styles.consent}>
            <input
              className={styles.checkInput}
              type="checkbox"
              name="consent"
              required
              checked={values.consent}
              onChange={handleChange}
            />
            <span className={styles.checkBox} aria-hidden="true" />
            <span className={styles.consentText}>
              Я подтверждаю ознакомление и даю <a href="#">Согласие на обработку</a> моих персональных данных в порядке и на
              условиях, указанных в <a href="#">Политике обработки персональных данных</a>
            </span>
          </label>

          <Button type="submit" size="l" variant="outline" className={styles.submit} disabled={status === 'sending'}>
            {status === 'sending' ? 'Отправляем…' : 'Отправить вопрос'}
          </Button>

          <p className={styles.status} role="status">
            {status === 'sent' && 'Спасибо! Ваш вопрос отправлен.'}
            {status === 'error' && 'Не удалось отправить. Попробуйте ещё раз чуть позже.'}
          </p>
        </form>
      </div>
    </section>
  );
}
