import { Howl } from 'howler';

const sources = {
  '1C': '261-C',
  '1Cs': '277-C-sharp',
  '1D': '293-D',
  '1Ds': '311-D-sharp',
  '1E': '329-E',
  '1F': '349-F',
  '1Fs': '369F-sharp',
  '1G': '391-G',
  '1Gs': '415-G-sharp',
  '2A': '440-A',
  '2As': '466-A-sharp',
  '2B': '495-B',
  '2C': '523-C',
  '2Cs': '545-C-sharp',
  '2D': '587-D',
  '2Ds': '622-D-sharp',
  '2E': '659-E',
  '2F': '698-F',
  '2Fs': '698-F-sharp',
  '2G': '783-G',
  '2Gs': '830-G-sharp',
  '3A': '880-A',
  '3As': '932-A-sharp',
  '3B': '987-B',
} as const;

export type NoteName = keyof typeof sources;

export type Notes = Record<NoteName, Howl>;

export const isNoteName = (value: string | undefined): value is NoteName =>
  value !== undefined && Object.hasOwn(sources, value);

export const createNotes = (): Notes => {
  const entries = Object.entries(sources).map(([note, file]) => [
    note,
    new Howl({ src: [`medias/${file}.mp3`] }),
  ]);

  return Object.fromEntries(entries) as Notes;
};
