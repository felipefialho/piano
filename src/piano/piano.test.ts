// @vitest-environment jsdom
import { afterEach, beforeAll, beforeEach, describe, expect, it, vi } from 'vitest';

const play = vi.fn();

vi.mock('howler', () => ({
  Howl: vi.fn(function (this: { src: string[]; play: () => void }, options: { src: string[] }) {
    this.src = options.src;
    this.play = () => play(options.src[0]);
  }),
}));

const { piano } = await import('./piano');

const pressKey = (code: string, repeat = false) =>
  window.dispatchEvent(new KeyboardEvent('keydown', { code, repeat }));

describe('piano', () => {
  beforeAll(() => {
    document.body.innerHTML = `
      <div class="piano-key__white" data-code="CapsLock" data-note="1C"></div>
      <div class="piano-key__black" data-code="KeyQ" data-note="1Cs"></div>
    `;
    piano();
  });

  beforeEach(() => {
    vi.useFakeTimers();
    play.mockClear();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('plays the mapped note and flashes the key on keydown', () => {
    const key = document.querySelector('[data-code="CapsLock"]');

    pressKey('CapsLock');

    expect(play).toHaveBeenCalledExactlyOnceWith('medias/261-C.mp3');
    expect(key?.classList.contains('active')).toBe(true);

    vi.advanceTimersByTime(100);

    expect(key?.classList.contains('active')).toBe(false);
  });

  it('ignores key repeat', () => {
    pressKey('KeyQ');
    pressKey('KeyQ', true);
    pressKey('KeyQ', true);

    expect(play).toHaveBeenCalledExactlyOnceWith('medias/277-C-sharp.mp3');
  });

  it('ignores unmapped keys', () => {
    pressKey('KeyZ');

    expect(play).not.toHaveBeenCalled();
  });

  it('plays the note on pointerdown', () => {
    document.querySelector('[data-note="1Cs"]')?.dispatchEvent(new Event('pointerdown'));

    expect(play).toHaveBeenCalledExactlyOnceWith('medias/277-C-sharp.mp3');
  });
});
