// Делится вопросом: системное меню «Поделиться» или копирование в буфер
export async function shareQuestion(question) {
  const url = window.location.href.split('#')[0];
  const text = `«${question}» — вопрос из игры «Самолёт»`;

  try {
    if (navigator.share) {
      await navigator.share({ title: 'Самолёт', text, url });
      return 'shared';
    }
    await navigator.clipboard.writeText(`${text}\n${url}`);
    return 'copied';
  } catch (error) {
    // Пользователь закрыл окно «Поделиться» — это не ошибка
    if (error && error.name === 'AbortError') return 'cancelled';
    return 'failed';
  }
}
