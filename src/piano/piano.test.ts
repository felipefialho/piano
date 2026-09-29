// @vitest-environment jsdom
import { beforeAll, beforeEach, describe, expect, it, vi } from 'vitest';

const play = vi.fn();

vi.mock('howler', () => ({
  Howl: vi.fn(function (this: { src: string[]; play: () => void }, options: { src: string[] }) {
    this.src = options.src;
    this.play = () => play(options.src[0]);
  }),
}));

const { piano } = await import('./piano');

const pressKey = (code: string, init: KeyboardEventInit = {}) =>
  window.dispatchEvent(new KeyboardEvent('keydown', { code, ...init }));

const releaseKey = (code: string) => window.dispatchEvent(new KeyboardEvent('keyup', { code }));

describe('piano', () => {
  beforeAll(() => {
    document.body.innerHTML = `
      <div class="piano-key__white" data-code="KeyZ" data-note="1C" data-label="C4"></div>
      <div class="piano-key__black" data-code="KeyS" data-note="1Cs"></div>
    `;
    piano();
  });

  beforeEach(() => {
    play.mockClear();
    document.querySelectorAll('.active').forEach((el) => el.classList.remove('active'));
  });

  it('plays the mapped note and adds .active on keydown', () => {
    const key = document.querySelector('[data-code="KeyZ"]');

    pressKey('KeyZ');

    expect(play).toHaveBeenCalledExactlyOnceWith('medias/261-C.mp3');
    expect(key?.classList.contains('active')).toBe(true);
  });

  it('removes .active on keyup', () => {
    const key = document.querySelector('[data-code="KeyZ"]');

    pressKey('KeyZ');
    releaseKey('KeyZ');

    expect(key?.classList.contains('active')).toBe(false);
  });

  it('removes .active on window blur', () => {
    const key = document.querySelector('[data-code="KeyZ"]');

    pressKey('KeyZ');
    window.dispatchEvent(new Event('blur'));

    expect(key?.classList.contains('active')).toBe(false);
  });

  it('ignores key repeat', () => {
    pressKey('KeyS');
    pressKey('KeyS', { repeat: true });
    pressKey('KeyS', { repeat: true });

    expect(play).toHaveBeenCalledExactlyOnceWith('medias/277-C-sharp.mp3');
  });

  it('ignores key events when a modifier is held', () => {
    pressKey('KeyZ', { ctrlKey: true });
    pressKey('KeyZ', { metaKey: true });
    pressKey('KeyZ', { altKey: true });

    expect(play).not.toHaveBeenCalled();
  });

  it('ignores key events when focus is in an input', () => {
    const input = document.createElement('input');
    document.body.appendChild(input);

    input.dispatchEvent(new KeyboardEvent('keydown', { code: 'KeyZ', bubbles: true }));

    expect(play).not.toHaveBeenCalled();
    input.remove();
  });

  it('ignores unmapped keys', () => {
    pressKey('KeyP');

    expect(play).not.toHaveBeenCalled();
  });

  it('plays the note and adds .active on pointerdown', () => {
    const key = document.querySelector('[data-code="KeyS"]');

    key?.dispatchEvent(new Event('pointerdown'));

    expect(play).toHaveBeenCalledExactlyOnceWith('medias/277-C-sharp.mp3');
    expect(key?.classList.contains('active')).toBe(true);
  });

  it('removes .active on pointerup', () => {
    const key = document.querySelector('[data-code="KeyS"]');

    key?.dispatchEvent(new Event('pointerdown'));
    key?.dispatchEvent(new Event('pointerup'));

    expect(key?.classList.contains('active')).toBe(false);
  });
});
