# Ponder 🌷

Questions worth arguing about. A mobile-first conversation game built with React, TypeScript, Vite, and plain CSS.

## Play

Choose Cute, Funny, Moral, Love, Deep, or Weird. Read the dilemma aloud, discuss it, then tap **Go Deeper** for the twist and follow-up. **Next Question** and **Shuffle** draw again. **Surprise Me** draws across all categories.

Includes all six original starter cards. Each category currently has one card, so it repeats after that category resets; Surprise Me offers the full six-card deck. Add more cards to expand each category.

Seen question IDs are stored locally on your device. Unseen cards take priority, and an exhausted category resets when drawn again. If browser storage is unavailable, the game keeps an in-memory history. There is no backend, login, or external API.

## Preview locally

With Node.js 22 or newer installed:

```sh
npm install
npm run dev
```

Open the local address printed in your terminal, normally http://127.0.0.1:5173.

## Production build

```sh
npm run build
npm run preview
```

The build checks TypeScript and generates the static app in `dist/`. The GitHub Actions workflow also runs this build on pushes and pull requests and saves the result as a downloadable artifact. This does not deploy a website automatically.

## Edit questions

Edit `src/questions.ts`. Each card requires a unique, stable `id`, a category from the existing list, an `emoji`, `title`, `scenario`, `question`, `twist`, and `deeperQuestion`.

## Project layout

- `src/main.tsx` — screens and reusable `QuestionCard` component
- `src/questions.ts` — local question content
- `src/deck.ts` — unseen-first selection and storage
- `src/style.css` — responsive layout and reduced-motion support

## Validation status

Dependencies were not downloaded locally at the user's request. The GitHub workflow performs the full TypeScript and production-build checks after push. Installable/offline PWA support is not included in this initial version.
