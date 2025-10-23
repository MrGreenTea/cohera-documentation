# Cohera High-Level Overview Design

**Date**: 2025-10-23
**Purpose**: Design document for cohera's high-level overview content
**Structure**: Vision → Implementation manifesto approach

---

## Section 1: Vision & Values

### Title: Communities Deserve Tools That Fit

Every community is unique. A 200-person housing cooperative has different needs than a 50-member youth organization or a 1,500-person community project. Yet they all face the same choice: use mass-market platforms designed for everyone (and thus no one in particular), or invest massive resources building custom software.

We believe this is wrong. Communities—especially small-to-medium purpose-driven organizations—deserve tools that respect their uniqueness. They deserve to control their data, customize their platforms to their specific needs, and connect across organizational boundaries when it serves them.

Cohera exists to make situated software practical. We're building a library of community-focused building blocks that developers can compose, customize, and extend to create platforms tailored to specific communities. Not platforms designed for the lowest common denominator. Not rigid solutions that force communities to adapt. But flexible tools that adapt to communities.

### Our Values

- **Community sovereignty**: Organizations own their data and their platforms
- **Situated over generic**: Tools should serve specific needs, not just common ones
- **Federation by choice**: Every part of cohera is purpose-built for cross-platform federation—communities decide who to connect with and when
- **Designed for civil society**: Built for the needs of associations, cooperatives, and community projects—not enterprise profit motives

---

## Section 2: The Problem

### Title: The Long Tail Gets Left Behind

There's a gap in the market for community platforms—and it's not an accident. Communities of 10 to 2,000 people have unique, specific needs that mass-market platforms ignore. Facebook, Slack, Discord, Instagram: these are built for the lowest common denominator. They serve billions by serving no one in particular.

For a housing cooperative tracking shared resources, a youth organization coordinating projects, or a community initiative managing local events, these platforms are simultaneously too much and not enough. They force workflows that don't fit. They lock data behind proprietary walls. They can't be customized beyond superficial theming.

The alternative—building custom software—is economically impossible for most civil society organizations. Developers capable of building community platforms cost more than these organizations can justify. The long tail of community needs goes unserved not because the need doesn't exist, but because it's not profitable to serve.

### Existing Solutions Fall Short

Platforms like HumHub offer limited customization through plugins. Federated platforms like Mastodon and Diaspora are purpose-built for specific use cases and resist adaptation. Component libraries like tailwindui focus on enterprise needs—forms, tables, dashboards—not community-specific features like discussion threads, event coordination, or member directories.

What's missing is a middle ground: building blocks designed specifically for community platforms, flexible enough to adapt to situated needs, built for federation from the ground up, and economically accessible to civil society organizations.

---

## Section 3: The Solution

### Title: Building Blocks for Situated Software

Cohera is a library of community-focused building blocks that developers use to create platforms tailored to specific communities. Instead of starting from scratch or settling for generic solutions, developers compose pre-built components that handle the common patterns of community platforms—then customize them to fit their community's unique needs.

### Architecture

The building blocks span the full stack:

- UI components for rendering community features
- Backend modules for handling logic and data
- Complete features that integrate frontend and backend
- Data models that ensure interoperability

Developers choose which blocks they need and ignore the rest.

### Modules

Cohera provides modules for core community functions—things like real-time chat and messaging, member profiles and directories, and more. Each module is designed to work independently but integrate seamlessly when combined. (See the modules overview for the complete list.)

### Customization

Customization happens at every level:

- **Configuration**: Pre-defined options for common variations
- **Theming**: Customize styling and visual identity
- **Extension**: Hooks and plugins for unique functionality
- **Source modification**: Direct code changes when needs truly diverge

This flexibility is essential for situated software—there's no "one size fits all" when every community is different.

### Target Scale

The target is clear: communities of 20 to 200 people. Not enterprise scale. Not social media scale. The scale where community actually happens, where relationships matter, where specific needs emerge. Cohera is optimized for this scale—both technically and philosophically.

---

## Section 4: How It Works

### Title: Compose, Customize, Connect

Cohera's approach is simple: start with the blocks you need, customize them to fit your community, and connect with other communities when it makes sense.

### Modularity First

Every building block is fully independent. Developers pick which modules they need—maybe just chat and profiles for a small group, or the full suite for a larger organization. There are no forced dependencies, no features you must include. This means platforms stay lean and focused on what their community actually needs.

### Customization at Every Level

Communities have different needs, so cohera supports different depths of customization. For common variations, configuration options let developers toggle features and behavior. For visual identity, theming and styling systems provide control over appearance. For unique requirements, extension points and plugin systems enable adding new functionality. And when a community's needs truly diverge, developers can modify the source code directly. The framework doesn't fight you—it adapts.

### Federation by Design

Every module is built with cross-platform federation in mind. A post created in one cohera-based platform can appear in another. Events can be shared across organizational boundaries. Member profiles can connect between communities. But federation is always a choice—communities decide who they connect with, what they share, and when. The capability is built-in; the decision remains local.

### Developer Experience

The result is platforms that feel custom-built because they are, but without the months of development time. Developers focus on their community's unique needs instead of reinventing chat systems and user authentication.

### Measure of Success

Our measure of success: People won't even notice the platform was built with cohera. Communities will adapt and customize it so thoroughly that it feels like a native extension of themselves.

---

## Section 5: Goals & Impact

### Title: Building for Real Communities, Enabling the Long Tail

Our immediate goal is concrete: build platforms for the communities we're working with—real organizations with real needs that existing tools don't meet. Success means they have platforms that work for them, not platforms they have to work around.

### Growing the Ecosystem

But the impact goes beyond these first communities. Every platform built with cohera validates the model and makes the next one easier. The building blocks improve. The patterns clarify. The federation network grows. What starts as custom platforms for a handful of organizations becomes infrastructure for the long tail of community needs.

### Why This Matters

This matters because civil society organizations are where social change happens. Associations, cooperatives, community projects—these groups organize people around shared purpose. They deserve tools that support their work, not tools that profit from it. They deserve to own their data, control their platforms, and connect on their own terms.

### Making Situated Software Viable

Cohera enables this by making situated software economically viable. Developers can build custom platforms in days or weeks instead of months. Communities can start small and grow. Organizations can adapt their platforms as their needs evolve. And when it makes sense, communities can federate—sharing resources, coordinating across boundaries, building networks of mutual support.

### The Vision

The vision is simple: a world where communities have the tools they need to organize effectively, where the long tail of specific needs gets served, where civil society has technology infrastructure that respects its values and serves its mission.

---

## Implementation Notes

### Target Users

- Developers building platforms for communities (technical users who write code)

### Target Communities

- Small-to-medium purpose-driven organizations
- Size: 20-200 people (primary), up to ~2000 (extended)
- Types: Associations, cooperatives, community projects

### Core Differentiators

1. **Modular building blocks** at all stack levels (not just UI components)
2. **Community-specific features** (not generic enterprise components)
3. **Federation built-in** from the start (not an afterthought)
4. **Full customization spectrum** (configuration → source modification)
5. **Optimized for long-tail needs** (not mass market)

### Out of Scope

- Hosting/infrastructure (developers deploy themselves)
- Scaling beyond ~2000 users
- Non-community features (e-commerce, CRM, etc.)
- Mobile apps (web-first)

### Success Criteria

Primary: "That we're able to create community platforms for our communities"
Secondary: Platforms feel so customized that cohera becomes invisible

---

## Next Steps

1. Use this design as the foundation for the high-level overview content
2. Determine where this content should live in the documentation structure
3. Write the actual overview page based on this design
4. Link to module references and other relevant documentation
