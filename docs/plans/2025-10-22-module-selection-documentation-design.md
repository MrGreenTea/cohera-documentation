# Module Selection Documentation Design

**Date:** 2025-10-22
**Purpose:** Design documentation structure for Cohera's module selection feature in the getting started guide

## Overview

This design covers how to document the CLI's module selection feature in the getting started tutorial. The documentation serves dual purposes:

1. User-facing guide for understanding and using the module selection process
2. Implementation specification for CLI developers building the feature

## Requirements

### User Experience Requirements

- Module selection available during `npm create cohera` AND via post-creation configuration
- Multi-select checkbox interface for choosing modules
- All 6 modules are fully independent (no dependencies)
- Users can select zero modules (with warning/confirmation)
- Interactive CLI flow documentation (primary focus)

### Available Modules

1. Chat
2. User Profiles
3. Posts
4. Calendar
5. Map
6. File / Media Library/Archive

### Technical Requirements

- Module selections stored in `config/cohera.config.js`
- Post-creation modification via `cohera module add` command
- Same multi-select interface for both initial and later configuration
- Non-destructive module changes where possible

## Documentation Structure

### Overall Page Structure

The getting started guide (`src/content/docs/start-here.mdx`) will be organized as:

1. **Quick Start** (existing)
2. **Create a new project** (existing, with additions)
3. **Choose your modules** (NEW)
4. **Start the development server** (existing, unchanged)
5. **Next steps** (NEW)

This maintains clear separation between scaffolding, configuration, and running the platform.

## Detailed Section Designs

### Section: Create a new project (modifications)

**Location:** After the package manager command tabs

**Content addition:**

```markdown
This will create a new [project directory](/guides/project-structure/) with all the necessary files and configurations for your platform.

During the setup process, you'll be prompted to select which modules to include. See [Choose your modules](#choose-your-modules) below for details on the available options.
```

**Purpose:** Provides forward context so users aren't surprised by the module selection prompt.

### Section: Choose your modules (NEW)

**Structure:**

1. Introduction paragraph
2. Available Modules list with links
3. CLI interaction guidance
4. Callouts for important notes
5. Modifying modules later subsection

**Content:**

```markdown
### Choose your modules

During project creation, you'll be prompted to select which modules to include in your platform. You can select any combination of modules, or none at all to start with a minimal base.

#### Available Modules

- **[Chat](/reference/modules/chat/)** - Real-time messaging and conversations
- **[User Profiles](/reference/modules/user-profiles/)** - Member profiles and user management
- **[Posts](/reference/modules/posts/)** - Content publishing and feeds
- **[Calendar](/reference/modules/calendar/)** - Event scheduling and calendar management
- **[Map](/reference/modules/map/)** - Location-based features and geographic data
- **[Media Library](/reference/modules/media-library/)** - File uploads, storage, and media management

Use the arrow keys to navigate, space to select/deselect, and enter to confirm your choices.

:::note
Your module selections are stored in `config/cohera.config.js` and can be modified later by running the configuration command.
:::

:::tip
If you're not sure which modules you need, you can start with none and add them as your platform requirements become clearer.
:::

#### Modifying modules later

You can add or remove modules at any time by running:

[package manager tabs with commands like `npx cohera module add`]

This will show the same module selection interface with your current selections pre-checked.
```

**Module Documentation Links:**
All modules link to `/reference/modules/{module-name}/`:

- Chat → `/reference/modules/chat/`
- User Profiles → `/reference/modules/user-profiles/`
- Posts → `/reference/modules/posts/`
- Calendar → `/reference/modules/calendar/`
- Map → `/reference/modules/map/`
- Media Library → `/reference/modules/media-library/`

Note: These module detail pages don't exist yet but establish the expected information architecture.

### Section: Next steps (NEW)

**Location:** End of page, after "Start the development server"

**Content:**

```markdown
## Next steps

Now that you have your platform running, learn more about:

- **[Project Structure](/guides/project-structure/)** - Understand how your Cohera project is organized
- **[Module Reference](/reference/modules/)** - Detailed documentation for each module
- **[Configuration](/reference/configuration/)** - Customize your platform settings
```

**Purpose:** Provides clear pathways for users to continue learning after completing the getting started guide.

## Implementation Specification Details

### CLI Behavior - Initial Creation

During `npm create cohera`:

1. Collect project name/directory (existing behavior)
2. Show module selection prompt
3. Multi-select interface:
   - Arrow keys (↑/↓) to navigate
   - Space to toggle selection
   - Enter to confirm choices
   - All modules unchecked by default
4. If zero modules selected:
   - Show warning: "No modules selected - you'll have a minimal platform. Continue? (y/n)"
   - Allow user to confirm or go back
5. Persist selections to `config/cohera.config.js`

### CLI Behavior - Post-Creation Configuration

Command: `cohera module add` (accessed via `npx cohera module add`, `npm run cohera module add`, etc.)

Behavior:

1. Load existing selections from `config/cohera.config.js`
2. Show same multi-select interface with current selections pre-checked
3. Allow toggling modules on/off
4. Update config file with new selections
5. Handle module scaffolding/removal non-destructively where possible

### Configuration Storage

**File:** `config/cohera.config.js` (default location)

**Expected format:** (to be defined by implementation)

- Should store array/object of enabled modules
- Should be human-readable and editable
- Should be version-controllable

## Design Rationale

### Why Separate Sections?

- **Maintainability:** Module selection documentation can grow independently
- **Clarity:** Each section has a single, clear purpose
- **Flexibility:** Easy to reorder or restructure without affecting other content
- **Scannability:** Users can jump directly to the section they need

### Why Interactive Flow Only?

- Primary use case is developers setting up their first project
- Interactive experience is more approachable for new users
- Non-interactive/scripted setup is advanced use case (can be added later if needed)

### Why Allow Zero Modules?

- Supports learning/experimentation
- Enables incremental adoption
- Users might want bare framework first
- Warning ensures it's intentional, not accidental

### Why Independent Modules?

- Reduces complexity in selection UI
- Gives maximum flexibility to users
- Simplifies implementation (no dependency resolution needed)
- Aligns with modular framework philosophy

## Open Questions

1. **Module descriptions:** The 1-2 sentence descriptions in this design are placeholders. Final copy should come from module authors/maintainers.

2. **Package manager tabs:** The "Modifying modules later" section references package manager tabs - need to determine exact command format for each package manager.

3. **Configuration command name:** Using `cohera module add` but this might need refinement (e.g., `cohera modules` or `cohera configure`).

4. **Module detail pages:** `/reference/modules/` pages need to be created - should define their structure/template.

5. **Project structure page:** Referenced but may not exist - need to verify or create.

6. **Configuration reference:** Referenced in Next Steps but may not exist - need to verify or create.

## Next Steps

If implementing this design:

1. Set up worktree for isolated development (if needed)
2. Create implementation plan breaking down the documentation changes
3. Define module descriptions (coordinate with module authors)
4. Update `start-here.mdx` with new structure
5. Create placeholder module reference pages
6. Verify/create supporting pages (project structure, configuration reference)
