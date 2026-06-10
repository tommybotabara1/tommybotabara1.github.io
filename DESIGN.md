# Design

## Foundation

The site is a single-page Next.js portfolio with a modern editorial structure, a warm light base, and dark technical sections. The strongest visual idea is the contrast between calm business credibility and code/workspace evidence.

## Color

Current tokens:

- Background: `#fbf8f1`
- Foreground: `#151514`
- Paper: `#fffdf7`
- Muted ink: `#5f625d`
- Line: `#ded8cb`
- Blue accent: `#2367ff`
- Coral accent: `#ff6b58`
- Mint accent: `#66cdb2`

Use the warm base carefully. It supports a professional editorial feel, but too much paper tone can become generic. Dark sections should be reserved for technical evidence and build skeletons, where contrast and code-like texture are useful.

## Typography

The project uses Geist Sans and Geist Mono through Next font variables. The typography should feel concise, technical, and readable. Large headings are allowed, but should not overflow or become theatrical. Mono text is best for commands, repo paths, metrics, and folder trees.

## Layout

The page uses full-width bands with constrained inner content. The strongest sections are:

- Hero with positioning and status chips.
- Shareable Builds with a left narrative and right folder-window skeleton.
- Interactive Systems with workflow choices and terminal output.
- Project Explorer with filter chips and active case signal.
- About with selectable capability detail.

Avoid adding more generic card grids. New sections should either reveal an artifact, let the visitor interact with a system, or clarify positioning.

## Components

Core reusable patterns:

- Sticky header with pill navigation.
- Section heading block.
- Folder skeleton window.
- Workflow console.
- Project filter chip row.
- Active case signal panel.
- Capability selector.
- Contact link panel.

Cards are acceptable for project summaries and value notes, but should not nest inside other cards. Project images should remain supporting evidence, not decorative hover toys.

## Motion

Motion is subtle: fade-in on hero, slow float on the current-focus panel, blinking terminal cursor, and hover/focus state changes. Preserve reduced-motion behavior. Use motion to imply systems running, not to decorate static copy.

## Interaction

Interactions should answer a visitor question:

- Folder tabs answer: what did Tommy build locally?
- Workflow buttons answer: how does the system run?
- Project filters answer: what kind of build am I looking at?
- Capability selector answers: what strengths sit behind the projects?

All controls should remain keyboard accessible and obvious on mobile.
