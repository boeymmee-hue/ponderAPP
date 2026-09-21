# Ponder 🌷

Questions worth arguing about. A mobile-first conversation game built with React, TypeScript, Vite, and plain CSS.

Play now: https://boeymmee-hue.github.io/ponderAPP/

## Play

Choose Cute, Funny, Moral, Love, Deep, or Weird. Read the dilemma aloud, discuss it, then tap **Go Deeper** for the twist and follow-up. **Next Question** and **Shuffle** draw again. **Surprise Me** draws across all categories.

Includes 600 conversation cards: 100 each in Cute, Funny, Moral, Love, Deep, and Weird. All six original starter cards are preserved. Every card includes a scenario, main question, twist, and deeper follow-up. Each category prioritizes unseen cards before resetting.

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

The build checks TypeScript and generates the static app in `dist/`. The GitHub Actions workflow also runs this build on pushes and pull requests and saves the result as a downloadable artifact. Successful builds on main automatically publish the app to GitHub Pages.

## Edit questions

Edit `src/questions.ts`. Each card requires a unique, stable `id`, a category from the existing list, an `emoji`, `title`, `scenario`, `question`, `twist`, and `deeperQuestion`.

## Project layout

- `src/main.tsx` — screens and reusable `QuestionCard` component
- `src/questions.ts` — local question content
- `src/deck.ts` — unseen-first selection and storage
- `src/style.css` — responsive layout and reduced-motion support

## Validation status

Dependencies were not downloaded locally at the user's request. GitHub checks TypeScript, builds the production app, and verifies that the preview serves its assets before publishing. Installable/offline PWA support is not included in this initial version.

## Bilingual cards

600 expanded scenarios, with 100 cards in each of six categories. Traditional Chinese appears first, followed by English, including the question, reveal, and deeper discussion. Chinese translations were drafted with Google Translate and edited for context. Stable card IDs preserve existing browsing history.
