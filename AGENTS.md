# Repository Guidelines

## Project Structure & Module Organization

The Astro + Starlight site lives in `src/`.
Published docs belong in `src/content/docs/`, with the filename as route slug.
Shared images go in `src/assets/`, while static files such as favicons stay in `public/`.

Configuration is split across

- `astro.config.mjs`
- `src/content.config.mjs`
- `wrangler.jsonc`

## Build, Test, and Development Commands

Install dependencies with `bun install`.
Use `bun run dev` to launch the live-reloading dev server at `http://localhost:4321`.
`bun run build` creates the production bundle in `dist/`,
and `bun run preview` serves that bundle for smoke testing.
Run `bun run astro check` for content and configuration validation,
and `bun run format` to apply Prettier before submitting a change.

## Coding Style & Naming Conventions

Prettier (configured in `prettier.config.mjs`) is the source of truth;
keep files formatted with two-space indentation and trailing commas.
Use kebab-case filenames for docs (`src/content/docs/architecture-overview.md`).
Use Title Case for page headings and sentence case for section headings.
Keep frontmatter concise and use relative paths (`../assets/diagram.png`).

## Testing Guidelines

Always run `bun run astro check` after content edits.
This catches broken links and schema issues.

## Commit & Pull Request Guidelines

Follow the conventional style used in the history: `type(scope): summary`
(for example, `docs(plan): refine success criteria`).
Keep subjects under 60 characters and use the imperative mood.
Each PR describes the change, links the issue, include screenshots for visual updates.
Limit PRs to a focused topic, check formatting and build work.

## Content Authoring Tips

Prefer short paragraphs and lead with key actions so readers can scan quickly.
Stick to built-in Starlight components (Callouts, Cards, Tabs).
When introducing new assets, document their purpose inline to aid future contributors.
