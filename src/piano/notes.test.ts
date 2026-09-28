import { describe, expect, it, vi } from 'vitest';

import { createNotes, isNoteName } from './notes';

vi.mock('howler', () => ({
  Howl: vi.fn(function (this: { src: string[] }, options: { src: string[] }) {
    this.src = options.src;
  }),
}));

describe('isNoteName', () => {
  it('accepts known notes', () => {
    expect(isNoteName('1C')).toBe(true);
    expect(isNoteName('3B')).toBe(true);
  });

  it('rejects unknown or missing values', () => {
    expect(isNoteName('4C')).toBe(false);
    expect(isNoteName('toString')).toBe(false);
    expect(isNoteName(undefined)).toBe(false);
  });
});

describe('createNotes', () => {
  it('creates one sound per note pointing to its sample', () => {
    const notes = createNotes();

    expect(Object.keys(notes)).toHaveLength(24);
    expect(notes['1C']).toMatchObject({ src: ['medias/261-C.mp3'] });
    expect(notes['1Fs']).toMatchObject({ src: ['medias/369F-sharp.mp3'] });
    expect(notes['3B']).toMatchObject({ src: ['medias/987-B.mp3'] });
  });
});
