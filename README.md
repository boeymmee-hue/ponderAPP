# Ponder 🌷

**多想一點，靠近一點。Make real connections.**

[Play Ponder](https://boeymmee-hue.github.io/ponderAPP/)

400 imaginative, bilingual what-if cards with cute premises, meaningful choices and simple language: 100 each for Couples, Family, Friends and Solo reflection. Friends includes 34 cards for 2–3 people, 33 for 4–6, and 33 for 7 or more. Traditional Chinese appears first; English is available with a toggle.

Enter a playful hypothetical world and make a choice that opens up values, money, love or inner life. “One more” reveals an optional follow-up that changes a condition or explores the same story. “Next question” is always available. Players can skip any question without explanation. Cards prioritize unseen questions within the selected category and group size. Progress stays on the device, with an in-memory fallback if storage is unavailable.

## Sharing

Every card has a sharing panel with Chinese or English PNG postcards, device sharing, image download, and a copyable link. Links use `?q=<stable-card-id>` to open the exact card. Older links still resolve through an archived 1,000-card collection, clearly marked as the previous edition. Archived cards are excluded from the new random decks.

Posters are generated on the device. Social link previews use a common brand image; exact-card posters are available inside the app.

## Feedback and reviewed submissions

Feedback and question suggestions open the owner's published Google Form. They are not submitted until the player presses Submit in Google Forms. The form does not collect email addresses. Responses are private to the owner, and submitting does not publish a question.

Community questions are a separate section. It starts empty. This static website does not read private form responses and has no automatic approval integration. The owner reviews responses in Google Forms, edits approved questions for clarity, then adds only approved content to `src/approved-questions.json` and publishes a new website build. Never place pending submissions or private form responses in this public repository.

See [REVIEW.md](REVIEW.md) for the publication procedure and record format.

## Development and publishing

React, TypeScript, Vite and plain CSS. With Node.js 22 or newer, `npm install` followed by `npm run dev` starts a local preview. `npm run build` checks TypeScript and builds static files. GitHub Actions builds and verifies assets; successful main builds deploy to GitHub Pages. Dependencies were not downloaded locally during this update, as requested by the owner.

## Files

- `src/questions.ts`: 400 current cards and types
- `src/archive.ts`: previous editions for old links only
- `src/deck.ts`: selection, filters and local history
- `src/main.tsx`: game, feedback, submission and community screens
- `src/catalog.ts`: category descriptions, form URL and approved-record validation
- `src/approved-questions.json`: public, reviewed community cards only
- `src/share.ts` and `src/ShareCard.tsx`: links and share posters
- `src/style.css`: responsive styles

No login, backend or offline installation is required for the game. Google Forms is an external service used only when a player opens feedback or submission.
