# Module Selection Documentation Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Implement the module selection documentation in the getting started guide as specified in the design document.

**Architecture:** Enhance existing Astro/Starlight documentation by modifying `start-here.mdx` to include module selection guidance and create placeholder module reference pages. Uses Starlight's built-in components (Tabs, Aside/Note/Tip callouts) for consistent styling.

**Tech Stack:** Astro 5.x, Starlight (documentation theme), MDX (markdown with JSX)

---

## Task 1: Update "Create a new project" section with module selection context

**Files:**

- Modify: `src/content/docs/start-here.mdx:47`

**Step 1: Add forward reference to module selection**

After line 47 (the project directory creation sentence), add the module selection context paragraph:

```mdx
This will create a new [project directory](/guides/project-structure/) with all the necessary files and configurations for your platform.

During the setup process, you'll be prompted to select which modules to include. See [Choose your modules](#choose-your-modules) below for details on the available options.
```

**Step 2: Verify the change in dev server**

Run: `npm run dev` (or your package manager equivalent)
Expected: Page renders correctly, forward link to "Choose your modules" section works (even though section doesn't exist yet)

**Step 3: Commit**

```bash
jj commit -m "docs(start-here): add forward reference to module selection"
```

---

## Task 2: Add "Choose your modules" section

**Files:**

- Modify: `src/content/docs/start-here.mdx:49` (insert new section before "Start the development server")

**Step 1: Insert the new section heading and introduction**

Insert after line 48 (after the module selection context paragraph from Task 1), before the "Start the development server" heading:

```mdx
### Choose your modules

During project creation, you'll be prompted to select which modules to include in your platform. You can select any combination of modules, or none at all to start with a minimal base.
```

**Step 2: Add available modules list**

Continue adding to the section:

```mdx
#### Available Modules

- **[Chat](/reference/modules/chat/)** - Real-time messaging and conversations
- **[User Profiles](/reference/modules/user-profiles/)** - Member profiles and user management
- **[Posts](/reference/modules/posts/)** - Content publishing and feeds
- **[Calendar](/reference/modules/calendar/)** - Event scheduling and calendar management
- **[Map](/reference/modules/map/)** - Location-based features and geographic data
- **[Media Library](/reference/modules/media-library/)** - File uploads, storage, and media management

Use the arrow keys to navigate, space to select/deselect, and enter to confirm your choices.
```

**Step 3: Add callouts with important notes**

Continue adding to the section:

```mdx
:::note
Your module selections are stored in `config/cohera.config.js` and can be modified later by running the configuration command.
:::

:::tip
If you're not sure which modules you need, you can start with none and add them as your platform requirements become clearer.
:::
```

**Step 4: Add "Modifying modules later" subsection**

Continue adding to the section:

````mdx
#### Modifying modules later

You can add or remove modules at any time by running:

<Tabs syncKey="pkg">
<TabItem label="npm">

```sh
npx cohera module add
```
````

</TabItem>
<TabItem label="pnpm">

```sh
pnpm cohera module add
```

</TabItem>
<TabItem label="Yarn">

```sh
yarn cohera module add
```

</TabItem>

<TabItem label="bun">

```sh
bun cohera module add
```

</TabItem>

</Tabs>

This will show the same module selection interface with your current selections pre-checked.

````

**Step 5: Verify section renders correctly**

Check dev server preview:
- Section heading appears correctly
- Module list displays with proper formatting and links
- Callouts (:::note and :::tip) render with proper Starlight styling
- Package manager tabs work and sync properly
- All anchor links work

Expected: All content renders properly (module reference links will be broken until Task 4)

**Step 6: Commit**

```bash
jj commit -m "docs(start-here): add complete module selection section"
````

---

## Task 3: Add "Next steps" section

**Files:**

- Modify: `src/content/docs/start-here.mdx:89` (append at end of file)

**Step 1: Add Next steps section**

Add at the very end of the file:

```mdx
## Next steps

Now that you have your platform running, learn more about:

- **[Project Structure](/guides/project-structure/)** - Understand how your Cohera project is organized
- **[Module Reference](/reference/modules/)** - Detailed documentation for each module
- **[Configuration](/reference/configuration/)** - Customize your platform settings
```

**Step 2: Verify section renders**

Check dev server preview:

- Section appears at bottom of page
- Links have proper styling
- Navigation flows naturally from previous section

Expected: Section renders correctly (links will be broken until supporting pages are created)

**Step 3: Commit**

```bash
jj commit -m "docs(start-here): add next steps section"
```

---

## Task 4: Create module reference directory structure

**Files:**

- Create: `src/content/docs/reference/modules/index.md`
- Create: `src/content/docs/reference/modules/chat.md`
- Create: `src/content/docs/reference/modules/user-profiles.md`
- Create: `src/content/docs/reference/modules/posts.md`
- Create: `src/content/docs/reference/modules/calendar.md`
- Create: `src/content/docs/reference/modules/map.md`
- Create: `src/content/docs/reference/modules/media-library.md`

**Step 1: Create modules directory**

Run: `mkdir -p src/content/docs/reference/modules`

**Step 2: Create module index page**

Create `src/content/docs/reference/modules/index.md`:

```md
---
title: Module Reference
description: Detailed documentation for each Cohera module.
---

Cohera modules provide pre-built functionality for common community platform features. Each module can be independently added to or removed from your platform.

## Available Modules

- **[Chat](./chat/)** - Real-time messaging and conversations
- **[User Profiles](./user-profiles/)** - Member profiles and user management
- **[Posts](./posts/)** - Content publishing and feeds
- **[Calendar](./calendar/)** - Event scheduling and calendar management
- **[Map](./map/)** - Location-based features and geographic data
- **[Media Library](./media-library/)** - File uploads, storage, and media management

## Adding and Removing Modules

See the [Getting Started guide](/start-here/#choose-your-modules) for instructions on adding or removing modules from your platform.
```

**Step 3: Create Chat module placeholder**

Create `src/content/docs/reference/modules/chat.md`:

```md
---
title: Chat Module
description: Real-time messaging and conversations
---

:::caution[Work in Progress]
This module documentation is under development. Check back soon for complete details.
:::

## Overview

The Chat module provides real-time messaging and conversation features for your community platform.

## Features

- Real-time messaging
- Direct messages and group conversations
- Message history
- Typing indicators
- Read receipts

## Configuration

Configuration details coming soon.

## API Reference

API documentation coming soon.
```

**Step 4: Create User Profiles module placeholder**

Create `src/content/docs/reference/modules/user-profiles.md`:

```md
---
title: User Profiles Module
description: Member profiles and user management
---

:::caution[Work in Progress]
This module documentation is under development. Check back soon for complete details.
:::

## Overview

The User Profiles module provides member profile management and user account features for your community platform.

## Features

- User profile pages
- Profile customization
- Avatar management
- User directories
- Privacy controls

## Configuration

Configuration details coming soon.

## API Reference

API documentation coming soon.
```

**Step 5: Create Posts module placeholder**

Create `src/content/docs/reference/modules/posts.md`:

```md
---
title: Posts Module
description: Content publishing and feeds
---

:::caution[Work in Progress]
This module documentation is under development. Check back soon for complete details.
:::

## Overview

The Posts module provides content publishing and feed features for your community platform.

## Features

- Create and publish posts
- Content feeds
- Comments and reactions
- Rich media support
- Categories and tags

## Configuration

Configuration details coming soon.

## API Reference

API documentation coming soon.
```

**Step 6: Create Calendar module placeholder**

Create `src/content/docs/reference/modules/calendar.md`:

```md
---
title: Calendar Module
description: Event scheduling and calendar management
---

:::caution[Work in Progress]
This module documentation is under development. Check back soon for complete details.
:::

## Overview

The Calendar module provides event scheduling and calendar management features for your community platform.

## Features

- Event creation and management
- Calendar views (day, week, month)
- Event RSVPs
- Recurring events
- Event reminders

## Configuration

Configuration details coming soon.

## API Reference

API documentation coming soon.
```

**Step 7: Create Map module placeholder**

Create `src/content/docs/reference/modules/map.md`:

```md
---
title: Map Module
description: Location-based features and geographic data
---

:::caution[Work in Progress]
This module documentation is under development. Check back soon for complete details.
:::

## Overview

The Map module provides location-based features and geographic data visualization for your community platform.

## Features

- Interactive maps
- Location markers
- Geographic search
- Custom map layers
- Location-based filtering

## Configuration

Configuration details coming soon.

## API Reference

API documentation coming soon.
```

**Step 8: Create Media Library module placeholder**

Create `src/content/docs/reference/modules/media-library.md`:

```md
---
title: Media Library Module
description: File uploads, storage, and media management
---

:::caution[Work in Progress]
This module documentation is under development. Check back soon for complete details.
:::

## Overview

The Media Library module provides file upload, storage, and media management features for your community platform.

## Features

- File uploads and storage
- Image optimization
- Media galleries
- File organization
- Access controls

## Configuration

Configuration details coming soon.

## API Reference

API documentation coming soon.
```

**Step 9: Verify all module pages render**

Check dev server:

- Visit `/reference/modules/` - index page should display
- Click each module link to verify individual pages load
- Verify "Work in Progress" callouts display properly
- Verify all links from start-here.mdx to module pages now work

Expected: All module reference pages accessible and properly formatted

**Step 10: Commit**

```bash
jj commit -m "docs(modules): create module reference structure with placeholders"
```

---

## Task 5: Create project structure guide placeholder

**Files:**

- Create: `src/content/docs/guides/project-structure.md`

**Step 1: Create project structure guide**

Create `src/content/docs/guides/project-structure.md`:

```md
---
title: Project Structure
description: Understand how your Cohera project is organized
---

:::caution[Work in Progress]
This guide is under development. Check back soon for complete details.
:::

## Overview

A Cohera project follows a structured directory layout designed to organize your community platform's code, configuration, and content.

## Directory Structure
```

my-cohera-project/
├── config/
│ └── cohera.config.js # Main configuration file
├── src/
│ ├── modules/ # Installed modules
│ ├── components/ # Custom components
│ └── pages/ # Application pages
├── public/ # Static assets
└── package.json

```

## Configuration Files

### cohera.config.js

The main configuration file where your module selections and platform settings are stored.

## Modules Directory

When you select modules during project creation or via `cohera module add`, they are installed in the `src/modules/` directory.

## Next Steps

- Learn about [available modules](/reference/modules/)
- Customize your [platform configuration](/reference/configuration/)
```

**Step 2: Update sidebar in astro.config.mjs**

Modify `astro.config.mjs` to include the new guide in the sidebar:

Change line 26 from:

```javascript
            { label: "Example Guide", slug: "guides/example" },
```

To:

```javascript
            { label: "Example Guide", slug: "guides/example" },
            { label: "Project Structure", slug: "guides/project-structure" },
```

**Step 3: Verify guide is accessible**

Check dev server:

- Navigate to Guides section in sidebar
- Verify "Project Structure" link appears
- Click link to verify page loads
- Verify link from start-here.mdx works

Expected: Project structure guide accessible from sidebar and direct links

**Step 4: Commit**

```bash
jj commit -m "docs(guides): add project structure guide placeholder"
```

---

## Task 6: Create configuration reference placeholder

**Files:**

- Create: `src/content/docs/reference/configuration.md`

**Step 1: Create configuration reference**

Create `src/content/docs/reference/configuration.md`:

````md
---
title: Configuration Reference
description: Customize your platform settings
---

:::caution[Work in Progress]
This reference is under development. Check back soon for complete details.
:::

## Overview

Cohera platforms are configured through the `config/cohera.config.js` file, which controls module selection, platform settings, and feature flags.

## Configuration File Location

By default: `config/cohera.config.js`

## Module Configuration

Your selected modules are stored in the configuration file and can be modified by running:

```sh
npx cohera module add
```
````

See the [Module Selection guide](/start-here/#choose-your-modules) for details.

## Platform Settings

Platform-wide configuration options:

- Site metadata
- Authentication providers
- Database connections
- Feature flags

Detailed configuration options coming soon.

## Environment Variables

Environment-specific settings can be managed through `.env` files.

## Next Steps

- Learn about [available modules](/reference/modules/)
- Understand the [project structure](/guides/project-structure/)

````

**Step 2: Verify reference page renders**

Check dev server:
- Navigate to Reference section (should auto-generate based on directory)
- Verify "Configuration" link appears
- Click link to verify page loads
- Verify link from start-here.mdx Next Steps section works

Expected: Configuration reference accessible and properly linked

**Step 3: Commit**

```bash
jj commit -m "docs(reference): add configuration reference placeholder"
````

---

## Task 7: Final verification and cleanup

**Files:**

- Verify: All files in `src/content/docs/`
- Verify: `astro.config.mjs`

**Step 1: Verify all internal links work**

Navigate through the documentation in dev server:

1. Start at `/start-here`
2. Click every link on the page
3. Verify all destinations load without 404 errors
4. Verify all module reference links work
5. Verify all Next Steps links work
6. Verify navigation breadcrumbs work

Expected: Zero broken links, all pages accessible

**Step 2: Verify consistent formatting**

Check each page for:

- Proper frontmatter (title, description)
- Consistent heading hierarchy (h2 for major sections, h3 for subsections)
- Proper code block formatting
- Consistent callout usage (:::note, :::tip, :::caution)
- Consistent link formatting

Expected: All pages follow same styling conventions

**Step 3: Verify package manager tabs sync**

Test tabs component:

- Switch package manager on one tab group
- Verify other tab groups on same page switch automatically (syncKey="pkg")

Expected: All tabs sync properly across the page

**Step 4: Check for typos and grammar**

Read through all modified/created content:

- `start-here.mdx` - all new sections
- All module reference pages
- Project structure guide
- Configuration reference

Expected: No obvious typos or grammatical errors

**Step 5: Run production build test**

Run: `npm run build`
Expected: Build succeeds with no errors or warnings

**Step 6: Final commit if any fixes needed**

If any issues found and fixed in steps 1-5:

```bash
jj commit -m "docs: final verification and fixes"
```

Otherwise, skip this step.

---

## Completion Checklist

After completing all tasks, verify:

- [ ] "Create a new project" section includes forward reference to module selection
- [ ] "Choose your modules" section exists with all subsections
- [ ] Available modules list includes all 6 modules with links
- [ ] CLI interaction guidance provided
- [ ] Note and Tip callouts present and properly formatted
- [ ] "Modifying modules later" subsection with package manager tabs
- [ ] "Next steps" section at end of start-here.mdx
- [ ] Module reference index page created
- [ ] All 6 module placeholder pages created
- [ ] Project structure guide created and linked in sidebar
- [ ] Configuration reference created
- [ ] All internal links working (zero 404s)
- [ ] Package manager tabs sync properly
- [ ] Production build succeeds
- [ ] All work committed to version control

## Notes for Implementation

### Astro/Starlight Conventions

- **Frontmatter:** All content files need YAML frontmatter with `title` and `description`
- **Callouts:** Use `:::note`, `:::tip`, `:::caution` syntax (Starlight auto-converts these)
- **Links:** Use relative links for internal navigation (`/reference/modules/` not `./reference/modules/`)
- **Tabs:** Import from `@astrojs/starlight/components` and use `syncKey` for synchronized tabs
- **Auto-generated sidebar:** Reference section uses `autogenerate` in astro.config.mjs

### File Naming Conventions

- Use kebab-case for file names: `user-profiles.md`, `media-library.md`
- Index files: `index.md` for directory landing pages
- Extensions: `.mdx` for files with JSX components, `.md` for plain markdown

### Commit Message Format

Following conventional commits:

- `docs(start-here):` - Changes to getting started guide
- `docs(modules):` - Changes to module reference
- `docs(guides):` - Changes to guides section
- `docs(reference):` - Changes to reference section
- `docs:` - General documentation changes

### Design Document Deviations

None expected. This plan implements the design document exactly as specified.
