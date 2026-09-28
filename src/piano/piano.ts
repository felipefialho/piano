import { createNotes, isNoteName, type Notes } from './notes';

const isTypingTarget = (target: EventTarget | null): boolean => {
  if (!(target instanceof HTMLElement)) return false;

  return target.isContentEditable || target.tagName === 'INPUT' || target.tagName === 'TEXTAREA';
};

const playKey = (key: HTMLElement, notes: Notes) => {
  const { note } = key.dataset;

  if (isNoteName(note)) {
    notes[note].play();
  }
};

const addKeyboardEvents = (notes: Notes) => {
  window.addEventListener('keydown', (event) => {
    if (event.repeat || event.ctrlKey || event.metaKey || event.altKey) return;
    if (isTypingTarget(event.target)) return;

    const key = document.querySelector<HTMLElement>(`[data-code='${event.code}']`);
    if (!key) return;

    playKey(key, notes);
    key.classList.add('active');
  });

  window.addEventListener('keyup', (event) => {
    const key = document.querySelector<HTMLElement>(`[data-code='${event.code}']`);
    key?.classList.remove('active');
  });

  window.addEventListener('blur', () => {
    document.querySelectorAll<HTMLElement>('[data-code].active').forEach((key) => key.classList.remove('active'));
  });
};

const addPointerEvents = (notes: Notes) => {
  document.querySelectorAll<HTMLElement>('[data-note]').forEach((key) => {
    const release = () => key.classList.remove('active');

    key.addEventListener('pointerdown', () => {
      playKey(key, notes);
      key.classList.add('active');
    });
    key.addEventListener('pointerup', release);
    key.addEventListener('pointerleave', release);
    key.addEventListener('pointercancel', release);
  });
};

export const piano = () => {
  const notes = createNotes();

  addKeyboardEvents(notes);
  addPointerEvents(notes);
};
