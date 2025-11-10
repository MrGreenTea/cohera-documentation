# Index Page Rewrite Design

**Date:** 2025-10-30
**Status:** Approved
**Context:** Vision document for Cohera - architecture not yet defined, seeking validation and engagement

## Purpose

Rewrite the landing page (src/content/docs/index.mdx) to:

- Reduce length from ~1,400 to ~900 words
- Eliminate repetition and consolidate redundant sections
- Front-load the solution (what Cohera is) rather than burying it 60% down the page
- Adopt a manifesto-style tone that rallies people to the vision
- Clearly position this as a vision document while using present tense
- Invite readers to validate the idea and join the effort

## Constraints & Context

### Project Maturity

- **Status:** Pure vision/dream - architecture not yet defined
- **Approach:** Present tense writing with subtle cues it's conceptual
- **No specific promises:** Generic placeholders for examples, no module names, no timelines
- **Tech stack:** Undecided - keep documentation stack-agnostic

### Reader Goals

- **Primary action:** Validate the idea - "does this resonate?"
- **Secondary actions:** Contribute expertise, follow progress, join conversation

### Links

- Hero CTAs (`/start-here/` and `/reference/modules/`) will be added in future
- Keep existing CTAs in place for now

## Proposed Structure

### Overall Flow (target ~900 words)

1. **Hero section** (unchanged)
   - Keep existing tagline and CTAs

2. **The Problem** (~200 words)
   - Communities face false choice: generic platforms or custom builds
   - The long tail (20-200 people) goes unserved
   - Mass-market fails, custom builds are economically impossible
   - Single focused section (cut from current ~400 words)

3. **The Vision: What Cohera Is** (~250 words)
   - Immediately define what Cohera provides
   - Library of building blocks for community platforms
   - Backend modules, web/mobile frontend components, data models
   - Generic placeholder example (brief scenario)
   - Present tense, declarative, confident

4. **Why Existing Solutions Fall Short** (~150 words)
   - Quick critique: mass-market platforms, federated alternatives, component libraries
   - Establish the gap Cohera fills

5. **Revised Values Cards** (4 cards)
   - Built for True Community
   - Ownership & Sovereignty
   - Adaptable by Design
   - Federation by Choice

6. **How Cohera Works** (~200 words)
   - Modularity first (no forced dependencies)
   - Customization levels (config → theme → extend → source)
   - Federation by design (always a choice)
   - Target scale (20-200 people)
   - Note: tech stack is flexible/adaptable

7. **Join the Vision** (~100 words)
   - Manifesto-style closing
   - Civil society deserves better tools
   - Call to help make it real
   - Invitation to contribute, validate, engage

## Revised Values Cards

### Card 1: Built for True Community

- **Icon:** "heart"
- **Content:** Real communities of 20-200 people have unique needs that mass-market platforms ignore. Cohera is designed for associations, cooperatives, and purpose-driven organizations—the scale where relationships matter and specific needs emerge. Not billions of users. True community.

### Card 2: Ownership & Sovereignty

- **Icon:** "star"
- **Content:** Organizations own their data, their platforms, their futures. No vendor lock-in, no data held hostage, no compromises. Your community, your rules, your infrastructure.

### Card 3: Adaptable by Design

- **Icon:** "puzzle"
- **Content:** Every community is different—your platform should reflect that. Compose the building blocks you need, customize them to fit, extend when necessary. From configuration to source-level changes, the framework adapts to you.

### Card 4: Federation by Choice

- **Icon:** "external"
- **Content:** Connect across boundaries when it serves you. Every component built for cross-platform federation from day one. Communities decide who to connect with, what to share, and when. The capability is built-in; the decision remains local.

## Content Details

### The Problem (~200 words)

**Key points:**

- Every community is unique, yet they face the same false choice
- Communities of 20-200 people are underserved—too specific for mass-market, too small for custom builds
- Mass-market platforms (Facebook, Slack, Discord) serve lowest common denominator
- Custom software is economically impossible for civil society organizations
- The long tail goes unserved not because need doesn't exist, but because it's not profitable to serve

**Approach:**

- Keep it abstract and universal—no specific community examples yet
- Focus on structural problem, not individual cases
- Single punchy section

### The Vision: What Cohera Is (~250 words)

**Key points:**

- **Definition:** Cohera is a library of building blocks for community platforms
- **Core concept:** Developers compose pre-built components, customize them, deploy tailored platforms
- **The pieces:** Backend modules (logic/data), web frontend components, mobile frontend components, data models for interoperability
- **Generic example:** Brief scenario showing modules working together (calendar + messaging + profiles) without specific module names
- **Key benefit:** Custom-built platforms without months of development time

**Tone:** Present tense, declarative, confident—this is what Cohera provides

### Why Existing Solutions Fall Short (~150 words)

**Quick critique of alternatives:**

- **Mass-market platforms:** Built for billions, serve no one in particular. Can't be customized beyond theming. Data lock-in.
- **Federated platforms:** Purpose-built for specific cases (Mastodon, Diaspora), resist adaptation
- **Component libraries:** Enterprise focus (forms, tables, dashboards), not community features (discussions, events, directories)
- **The gap:** Missing middle ground—building blocks for community platforms, flexible, federation-ready

### How Cohera Works (~200 words)

**Core principles:**

- **Modularity First:** Pick what you need. No forced dependencies. Start small or use full suite.
- **Customization Levels:**
  - Configuration (toggle features)
  - Theming (visual identity)
  - Extension (plugins/hooks)
  - Source modification (when needs truly diverge)
  - Framework adapts, doesn't fight you
- **Federation by Design:** Posts, events, profiles connect across platforms. Always a choice—communities decide who, what, when.
- **Target Scale:** 20-200 people. Not enterprise. Not social media scale. Where community actually happens.
- **Tech flexibility:** Stack is adaptable (note: since undecided)

### Join the Vision (~100 words)

**Manifesto-style closing:**

- **The stake:** Civil society organizations drive social change. They deserve tools that support their work, not exploit it.
- **The vision:** Communities have the tools they need to organize effectively. Long tail of specific needs gets served. Technology infrastructure respects civil society's values and serves its mission.
- **The call:** This is what we're building. Help us make it real.
- **Actions:** Contribute expertise, validate the vision, join conversation, follow progress

## Writing Principles

### Tone & Voice

- **Present tense throughout:** "Cohera is..." not "Cohera will be..."
- **Confident, declarative:** Manifesto-style assertions
- **Subtle conceptual cues:** Language like "this is what we're building" appears only in closing
- **No specific promises:** Generic examples, no module names, no timelines
- **Strong values language:** "deserve," "sovereignty," "true community"
- **Action-oriented:** Every section builds toward call to join/validate

### What Gets Cut from Current Version

- "Building for Real Communities, Enabling the Long Tail" section (redundant)
- Repetitive value proposition statements (appears 4-5 times currently)
- Vague references to "real communities we're working with"
- The phrase "our measure of success" (too meta for manifesto)
- "Compose, Customize, Connect" section (consolidated into "How Cohera Works")
- Excessive detail about customization levels (streamlined)

### Key Improvements

- Problem section: ~400 words → ~200 words
- "What is Cohera" moved from 60% down to immediately after problem
- Total length: ~1,400 words → ~900 words
- Eliminated two redundant sections
- Added explicit "Join the Vision" closing with clear call to action
- Stronger, more focused values cards
- Consistent manifesto tone throughout

## Implementation Notes

### Files to Modify

- `src/content/docs/index.mdx` - complete rewrite following structure above

### Technical Considerations

- Keep existing frontmatter (title, description, template, hero)
- Maintain CardGrid component import and usage
- Preserve markdown formatting and Starlight components
- Ensure all internal structure (headings, lists) is clean and consistent

### Testing

- Build site with `bun run build`
- Visual review of card rendering
- Check that all sections flow logically
- Verify word count target (~900 words body content)
- Confirm manifesto tone is consistent

## Success Criteria

The rewrite is successful when:

1. **Length:** Total body content ~900 words (down from ~1,400)
2. **Clarity:** Reader immediately understands what Cohera is (by word 200)
3. **Focus:** No repetitive sections, each section has distinct purpose
4. **Tone:** Consistent manifesto-style voice that rallies engagement
5. **Action:** Clear call to validate/join at end
6. **Values:** Four focused cards that reinforce vision
7. **Build:** Site builds without errors
