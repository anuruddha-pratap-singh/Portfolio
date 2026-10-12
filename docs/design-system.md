# Implemented design system

The portfolio uses a graphite and forest-black palette with acid-lime and signal-teal accents. Its visual language takes cues from circuit traces and engineering workbenches: large clear typography, measured grids, connected nodes, component labels, and compact monospaced annotations. Circuit details stay low contrast and decorative; the interface never presents them as live system data.

## Foundations

- **Display and body:** Space Grotesk, loaded from Google Fonts; local fallbacks use system sans-serif.
- **Metadata:** IBM Plex Mono for system labels, project details, and section markers.
- **Default theme:** deep graphite surfaces with warm light ink, restrained lime calls to action, and teal circuit details.
- **Alternate theme:** persisted soft green-gray light mode.
- **Spacing:** a fluid content width and section rhythm keep the page readable across phones and wide screens.
- **Motion:** SVG trace movement, low-intensity node pulses, reveal-on-scroll, and short hover transitions; all are reduced when `prefers-reduced-motion` is enabled.
- **Components:** sticky navigation, profile plate, technical project panels, repository filters, grouped skill modules, contact form, and status messages.

## Responsive behavior

The desktop hero uses an asymmetric text/photo grid. Tablet layouts tighten the grid, and phone layouts stack the hero and sections, collapse navigation to an expandable menu, and reduce project/skills columns. Forms use one column on narrow phones. Edited portrait assets are separate optimized WebP files; the supplied originals remain unchanged.

The design is represented in `src/index.css` and the React section components. A Figma design file could not be produced in this session because the connected Figma authoring tools returned an unavailable-tool error and the browser had no signed-in workspace.
