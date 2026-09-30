<p align="center">
  <img width="400" src="./logo/Logotype_horizontall.png" alt="Piano Keyboard">
</p>

# Piano Keyboard

> Two octaves, playable with touch, mouse or keyboard.

[![CI](https://github.com/felipefialho/piano/actions/workflows/ci.yml/badge.svg)](https://github.com/felipefialho/piano/actions/workflows/ci.yml)
[![Netlify Status](https://api.netlify.com/api/v1/badges/1289139d-1809-4ba1-9417-18530eb3caf9/deploy-status)](https://app.netlify.com/sites/felipefialho-piano/deploys)
[![license](https://img.shields.io/github/license/felipefialho/piano.svg)](./license)

**Live demo:** [piano.felipefialho.com](https://piano.felipefialho.com)

## Features

- 24 keys with sampled notes, starting at C4.
- Play with touch, mouse or your computer keyboard. Keys stay down while held.
- Installable PWA that works offline, with all samples precached.
- Light and dark themes that follow your system preference.

## Keyboard layout

| Octave | White keys                | Black keys           |
| ------ | ------------------------- | -------------------- |
| Lower  | `Z X C V B N M`           | `S D` `G H J`        |
| Upper  | `Q W E R T Y U`           | `2 3` `5 6 7`        |

## Tech stack

[Vite](https://vite.dev), TypeScript, plain CSS, [Howler.js](https://howlerjs.com/) and [Vitest](https://vitest.dev). Fonts (Bodoni Moda and Instrument Sans) are self-hosted.

## Getting started

Requires Node.js 22.12+ and [pnpm](https://pnpm.io/).

```sh
pnpm install
pnpm dev
```

### Tasks

- `pnpm dev`: start the dev server with hot reload
- `pnpm build`: type-check and create a `dist` folder to deploy
- `pnpm preview`: serve the production build locally
- `pnpm test`: run the unit tests
- `pnpm typecheck`: run the TypeScript compiler without emitting
- `pnpm lint`: lint TypeScript and CSS
- `pnpm lint:fix`: fix lint errors automatically
- `pnpm generate-pwa-assets`: regenerate the PWA icons from `public/images/piano.png`

## Project structure

```
src/piano/     key handling and note playback (with tests)
src/styles/    plain CSS, split by concern
public/medias/ one MP3 sample per note
public/images/ PWA icons and social image
logo/          logo files
```

## Security

See [SECURITY.md](./SECURITY.md) to report a vulnerability.

## License

MIT License © Felipe Fialho

If you enjoyed it, you can [sponsor my work on GitHub](https://github.com/sponsors/felipefialho).
