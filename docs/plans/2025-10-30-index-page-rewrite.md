# Index Page Rewrite Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Rewrite the landing page to reduce length from ~1,400 to ~900 words, eliminate repetition, front-load the solution, and adopt manifesto-style tone

**Architecture:** Complete content rewrite following problem-solution-vision structure with revised values cards and manifesto-style closing

**Tech Stack:** Astro + Starlight, MDX

---

## Task 1: Rewrite The Problem Section

**Files:**

- Modify: `src/content/docs/index.mdx:19-60`

**Step 1: Replace opening section and "The Long Tail Gets Left Behind"**

Replace lines 19-60 with this condensed problem statement (~200 words):

```mdx
## The Problem

Every community is unique. Yet they face the same false choice: use mass-market platforms designed for everyone (and thus no one in particular), or invest massive resources building custom software.

Communities of 20 to 200 people are caught in the gap. Too specific for mass-market platforms. Too small to justify custom builds.

Mass-market platforms like Facebook, Slack, and Discord serve the lowest common denominator. They force workflows that don't fit. They lock data behind proprietary walls. They can't be customized beyond superficial theming.

The alternative—building custom software—is economically impossible for most civil society organizations. Developers capable of building community platforms cost more than these organizations can justify.

The long tail of community needs goes unserved not because the need doesn't exist, but because it's not profitable to serve.
```

**Step 2: Verify build**

Run: `bun run build`
Expected: Build succeeds with no errors

**Step 3: Commit**

```bash
jj commit --message "docs(index): condense problem section to 200 words"
```

---

## Task 2: Add "What Cohera Is" Section

**Files:**

- Modify: `src/content/docs/index.mdx` (after the Problem section, before existing "Existing Solutions Fall Short")

**Step 1: Insert new "What Cohera Is" section**

Add this section immediately after the Problem section (~250 words):

```mdx
## What Cohera Is

Cohera is a library of building blocks for community platforms. Developers compose pre-built components, customize them, and deploy platforms tailored to specific communities. Custom-built without the months of development time.

The building blocks span the full stack: backend modules for handling logic and data, web frontend components for browser-based interfaces, mobile frontend components for iOS and Android apps, and data models that ensure interoperability. Each module is composed of these independent pieces—developers choose which they need and ignore the rest.

A community might combine calendar functionality with messaging and member profiles to coordinate shared spaces. Or event management with file sharing and voting for community decision-making. Each module works independently but integrates seamlessly when combined.

Instead of starting from scratch or settling for generic solutions, developers compose the components they need, then customize them to fit their community's unique needs. Platforms feel custom-built because they are—but the common patterns are already solved.
```

**Step 2: Verify build**

Run: `bun run build`
Expected: Build succeeds with no errors

**Step 3: Commit**

```bash
jj commit --message "docs(index): add 'What Cohera Is' section after problem"
```

---

## Task 3: Condense "Existing Solutions Fall Short"

**Files:**

- Modify: `src/content/docs/index.mdx` (the "Existing Solutions Fall Short" subsection)

**Step 1: Replace existing content with condensed version**

Replace the existing "Existing Solutions Fall Short" section (currently lines ~56-60) with this (~150 words):

```mdx
## Why Existing Solutions Fall Short

Mass-market platforms are built for billions. They serve no one in particular. Can't be customized beyond superficial theming. Lock data behind proprietary walls.

Federated platforms like Mastodon and Diaspora are purpose-built for specific use cases and resist adaptation to different needs.

Component libraries like TailwindUI focus on enterprise requirements—forms, tables, dashboards. Not community-specific features like discussion threads, event coordination, or member directories.

What's missing is a middle ground: building blocks designed specifically for community platforms, flexible enough to adapt to situated needs, built for federation from the ground up, and economically accessible to civil society organizations.
```

**Step 2: Verify build**

Run: `bun run build`
Expected: Build succeeds with no errors

**Step 3: Commit**

```bash
jj commit --message "docs(index): condense existing solutions critique to 150 words"
```

---

## Task 4: Revise Values Cards

**Files:**

- Modify: `src/content/docs/index.mdx:27-46` (the CardGrid section)

**Step 1: Replace values cards**

Replace the existing CardGrid section (lines 27-46) with revised cards:

```mdx
## Our Values

<CardGrid stagger>
  <Card title="Built for True Community" icon="heart">
    Real communities of 20-200 people have unique needs that mass-market
    platforms ignore. Cohera is designed for associations, cooperatives, and
    purpose-driven organizations—the scale where relationships matter and
    specific needs emerge. Not billions of users. True community.
  </Card>
  <Card title="Ownership & Sovereignty" icon="star">
    Organizations own their data, their platforms, their futures. No vendor
    lock-in, no data held hostage, no compromises. Your community, your rules,
    your infrastructure.
  </Card>
  <Card title="Adaptable by Design" icon="puzzle">
    Every community is different—your platform should reflect that. Compose the
    building blocks you need, customize them to fit, extend when necessary. From
    configuration to source-level changes, the framework adapts to you.
  </Card>
  <Card title="Federation by Choice" icon="external">
    Connect across boundaries when it serves you. Every component built for
    cross-platform federation from day one. Communities decide who to connect
    with, what to share, and when. The capability is built-in; the decision
    remains local.
  </Card>
</CardGrid>
```

**Step 2: Verify build**

Run: `bun run build`
Expected: Build succeeds with no errors

**Step 3: Commit**

```bash
jj commit --message "docs(index): revise values cards for manifesto tone"
```

---

## Task 5: Remove Redundant Sections

**Files:**

- Modify: `src/content/docs/index.mdx` (remove "Building Blocks for Situated Software" and "Compose, Customize, Connect" sections)

**Step 1: Delete "Building Blocks for Situated Software" section**

Delete the entire section starting with "## Building Blocks for Situated Software" (currently lines ~62-82, including subsections "Customization at Every Level" and "Target Scale").

**Step 2: Delete "Compose, Customize, Connect" section**

Delete the entire section starting with "## Compose, Customize, Connect" (currently lines ~83-96).

**Step 3: Verify build**

Run: `bun run build`
Expected: Build succeeds with no errors

**Step 4: Commit**

```bash
jj commit --message "docs(index): remove redundant building blocks and compose sections"
```

---

## Task 6: Add "How Cohera Works" Section

**Files:**

- Modify: `src/content/docs/index.mdx` (add after "Why Existing Solutions Fall Short")

**Step 1: Insert "How Cohera Works" section**

Add this section after "Why Existing Solutions Fall Short" (~200 words):

```mdx
## How Cohera Works

**Modularity First**: Every building block is fully independent. Developers pick which modules they need—maybe just profiles and messaging for a small group, or the full suite for a larger organization. No forced dependencies, no bloat. Platforms stay lean and focused on what their community actually needs.

**Customization at Every Level**: Communities have different needs, so Cohera supports different depths of customization. Configuration options let you toggle features and behavior. Theming and styling systems provide control over appearance. Extension points and plugin systems enable adding unique functionality. And when needs truly diverge, modify the source code directly. The framework adapts—it doesn't fight you.

**Federation by Design**: Every module is built with cross-platform federation in mind. Posts, events, and profiles can connect across platforms. But it's always a choice—communities decide who to connect with, what to share, and when. The capability is built-in; the decision remains local.

**Target Scale**: Cohera is optimized for communities of 20 to 200 people. Not enterprise scale. Not social media scale. The scale where community actually happens, where relationships matter, where specific needs emerge.
```

**Step 2: Verify build**

Run: `bun run build`
Expected: Build succeeds with no errors

**Step 3: Commit**

```bash
jj commit --message "docs(index): add consolidated 'How Cohera Works' section"
```

---

## Task 7: Replace Final Section with "Join the Vision"

**Files:**

- Modify: `src/content/docs/index.mdx` (replace "Building for Real Communities, Enabling the Long Tail")

**Step 1: Replace final section**

Replace the entire "Building for Real Communities, Enabling the Long Tail" section (currently lines ~97-108) with this manifesto-style closing (~100 words):

```mdx
## Join the Vision

Civil society organizations are where social change happens. Associations, cooperatives, community projects—these groups organize people around shared purpose. They deserve tools that support their work, not tools that profit from it. They deserve to own their data, control their platforms, and connect on their own terms.

A world where communities have the tools they need to organize effectively. Where the long tail of specific needs gets served. Where civil society has technology infrastructure that respects its values and serves its mission.

This is what we're building. Help us make it real.
```

**Step 2: Verify build**

Run: `bun run build`
Expected: Build succeeds with no errors

**Step 3: Commit**

```bash
jj commit --message "docs(index): add manifesto-style 'Join the Vision' closing"
```

---

## Task 8: Final Review and Word Count Verification

**Files:**

- Read: `src/content/docs/index.mdx`

**Step 1: Count words in body content**

Run: `sed -n '/^## /,/^---$/p' src/content/docs/index.mdx | wc -w`
Expected: Approximately 900 words (acceptable range: 850-950)

**Step 2: Visual review of full page**

Read the complete file to verify:

- Problem section is ~200 words and punchy
- "What Cohera Is" appears immediately after Problem
- Values cards use new content
- No redundant sections remain
- "How Cohera Works" consolidates modularity, customization, federation
- Closing is manifesto-style with clear call to action

**Step 3: Build and verify no errors**

Run: `bun run build`
Expected: Clean build with no errors

**Step 4: Verify structure matches design**

Confirm final structure is:

1. Hero (unchanged)
2. The Problem
3. What Cohera Is
4. Why Existing Solutions Fall Short
5. Our Values (cards)
6. How Cohera Works
7. Join the Vision

**Step 5: Final commit if any adjustments made**

If any adjustments were needed during review:

```bash
jj commit --message "docs(index): final review adjustments"
```

---

## Success Criteria

- [ ] Total body content ~900 words (down from ~1,400)
- [ ] "What Cohera Is" appears within first 200 words of body content
- [ ] No repetitive sections remain
- [ ] Values cards reflect manifesto tone
- [ ] Consistent present-tense, declarative voice throughout
- [ ] Clear "Join the Vision" call to action at end
- [ ] Build completes without errors
- [ ] All commits made with clear messages

## Notes

- Keep hero section frontmatter unchanged (broken links will be fixed later)
- Maintain existing import statement for Card and CardGrid
- Present tense throughout with subtle conceptual cues only in closing
- No specific module names or technical stack details (still undecided)
