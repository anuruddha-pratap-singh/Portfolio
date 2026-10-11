# Implemented design system

The portfolio uses a restrained black, white, and gray palette with a warm paper surface. The visual direction is editorial: large typography, thin rules, numbered section markers, generous margins, and compact monospaced labels.

## Foundations

- **Display and body:** Manrope, loaded from Google Fonts; local fallbacks use system sans-serif.
- **Metadata:** DM Mono for section numbers, project details, and labels.
- **Default theme:** dark charcoal background with warm light ink; selected project artwork and image surfaces add contrast.
- **Alternate theme:** persisted light paper theme using the same neutral palette.
- **Spacing:** section padding scales with viewport size; shared side margins use a fluid page-width token.
- **Motion:** short transitions on controls only; all motion is reduced when `prefers-reduced-motion` is enabled.
- **Components:** sticky navigation, text and primary buttons, project cards, filter controls, grouped skill lists, form fields, and status messages.

## Responsive behavior

The desktop hero uses an asymmetric text/photo grid. Tablet layouts tighten the grid, and phone layouts stack the hero and sections, collapse navigation to an expandable menu, and reduce project/skills columns. Forms use one column on narrow phones. Images keep their aspect ratio and use `object-fit` without generated replacements.

The design is represented in `src/index.css` and the React section components. A Figma design file could not be produced in this session because the connected Figma authoring tools returned an unavailable-tool error and the browser had no signed-in workspace.
