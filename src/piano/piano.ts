import { createNotes, isNoteName, type Notes } from './notes';

const ACTIVE_DURATION_MS = 100;

const playKey = (key: HTMLElement, notes: Notes) => {
  const { note } = key.dataset;

  if (isNoteName(note)) {
    notes[note].play();
  }
};

const addKeyboardEvents = (notes: Notes) => {
  window.addEventListener('keydown', (event) => {
    if (event.repeat) return;

    const key = document.querySelector<HTMLElement>(`[data-code='${event.code}']`);
    if (!key) return;

    playKey(key, notes);
    key.classList.add('active');
    setTimeout(() => key.classList.remove('active'), ACTIVE_DURATION_MS);
  });
};

const addPointerEvents = (notes: Notes) => {
  document.querySelectorAll<HTMLElement>('[data-note]').forEach((key) => {
    key.addEventListener('pointerdown', () => playKey(key, notes));
  });
};

export const piano = () => {
  const notes = createNotes();

  addKeyboardEvents(notes);
  addPointerEvents(notes);
};
