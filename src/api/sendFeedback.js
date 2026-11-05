/**
 * Отправка формы обратной связи.
 * Укажите адрес вашего бэкенда в .env: VITE_FEEDBACK_URL=https://...
 * Пока адрес не задан, форма работает в демо-режиме и ничего не отправляет.
 */
export async function sendFeedback(payload) {
  const url = import.meta.env.VITE_FEEDBACK_URL;

  if (!url) {
    await new Promise((resolve) => setTimeout(resolve, 400));
    return { ok: true, demo: true };
  }

  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });

  if (!response.ok) throw new Error(`HTTP ${response.status}`);
  return { ok: true };
}
