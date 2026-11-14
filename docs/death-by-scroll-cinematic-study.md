# Cinematic Scroll Story Study — Draft

**Reference:** [Death by Scroll](https://deathbyscroll.com/)
**Purpose:** Translate the reference’s cinematic pacing and visual craft into a distinctive portfolio experience for Anuruddha, while keeping implementation claims evidence-based.

## Observation method and limits

The live site was opened in a browser and scrolled through multiple story beats. The browser showed a pinned, dark full-screen composition: an illustrated ritual scene, a chapter title, and then a large layered-face illustration as the story advanced. Page accessibility exposes a visual element named `temple-canvas`; the public HTML links a bundled `/dist/js/main.min.js` and `/dist/css/styles.min.css`.

This is visual inspection, not a frame-by-frame video capture. The browser inspection tool does not provide a 30 fps recording or frame-time trace, so a measured frame rate cannot be claimed. Canvas rendering is observable; the specific engine (GSAP, custom requestAnimationFrame, WebGL, or a mix) was not conclusively identified from the evidence available. The title and page copy describe scroll animation, but marketing copy is not proof of the underlying implementation.

## What makes the reference feel cinematic

### Composition and visual hierarchy

- A nearly black stage gives the artwork room and makes small sources of light feel consequential.
- One dominant image occupies the center of attention; large chapter typography anchors each beat.
- The illustration is graphic and deliberately art-directed rather than generic interface decoration.
- Red, warm ivory, and restrained gold separate focal artwork, type, and highlights from the dark field.
- The fixed brand mark and compact controls remain stable while the main visual changes, helping orientation.
- Negative space is treated as part of the scene, not unused layout.

### Light, color, and atmosphere

- Black is the scene foundation; warm light outlines important shapes and guides attention.
- Highlights are localized around the story object. The whole scene is not uniformly neon or equally bright.
- Artwork has layered darks and midtones so silhouettes remain legible against the background.
- The palette is consistent from scene to scene, so transitions feel like one film rather than unrelated panels.

### Scroll pacing and transitions

- The main scene stays pinned while scroll distance advances the story.
- Each beat has a readable pause: establish the image, reveal a line, then transition into the next visual.
- The scene changes are tied to scroll progress, making the visitor control the timing and direction.
- Large, simple transformations read clearly: reveal, split, zoom, fall, and resolve. Decorative motion stays subordinate.
- The experience uses chapter copy to tell visitors why each visual matters.

## Portfolio creative direction: “The Art of Becoming”

The portfolio should feel like a short visual story about curiosity turning into continued practice. It should not invent biographical events or imply that the journey is complete. The user’s portrait is the opening image and recurring human anchor. The story moves from uncertainty, to discovery, through the signature wire-pull and descent, into reflection and an unfinished horizon. Project and contact links should remain reachable at the end.

### Signature sequence: the wire pull

1. Begin on a quiet, dark portrait composition. Keep the face and crossed arms readable; avoid a card or framed headshot.
2. Introduce a tiny warm-white screen light in the negative space. Let it catch the portrait subtly.
3. A single thin luminous cable grows from the screen, travels through the scene, and curls around the character’s wrist. The path should be legible and graceful, not a tangle of generic circuit lines.
4. Pause while the character notices it. The line tightens incrementally; the character resists before moving.
5. Let the screen expand and the environment stretch toward it. The camera, figure, typography, and light all follow the same direction of pull.
6. Cross the screen plane into a brief white frame, then land in silence/darkness. Keep the full pull and crossing as one continuous, scroll-controlled movement.

The wire is a metaphor for curiosity becoming absorption. Its physical movement is the signature visual, so other effects should quiet down around it.

## Storyboard and information architecture

| Act | Portfolio meaning | Visual treatment | Verified content to reveal |
| --- | --- | --- | --- |
| 01 — Struggle | Finding direction | Small solitary silhouette, rough dark ground, distant broken forms | “Not every path leads where you imagine.” No invented personal hardship. |
| 02 — Spark | Curiosity | Isolated old monitor; light on the portrait; screen becomes a doorway | Interest in interfaces, algorithms, and the systems underneath |
| 03 — The Pull | Discovery takes hold | Luminous wire to wrist, resistance, accelerating screen pull | “I followed the curiosity.” |
| 04 — Descent | Study and experimentation | Long vertical movement through abstract structures and branching paths | B.Tech CSE · AI; Java practice; web coursework; learning by building |
| 05 — Silence | Reflection and rebuilding | Empty space, held frame, quiet light; slower movement | Projects represent ongoing learning; no claim that everything works or is finished |
| 06 — Horizon | Perspective and growth | Warm, broad landscape; character grows smaller as camera rises | Tool areas: Java, JavaScript, React, Node, Express, MongoDB, APIs, DSA |
| 07 — Becoming | Open-ended practice | Still wide frame; understated title, then real project/contact links | “Still learning. Still questioning. Still building.” |

The descent should take the greatest scroll distance. The horizon should be the slowest, with a deliberate pause before the final title. The acts should connect through camera movement, scale, light, or shape whenever possible.

## Production approach

### Art and scene production

- Create the character and environments as a consistent scene kit, with the same silhouette, wardrobe, scale, and lighting language across acts.
- Prefer authored 3D scene renders or carefully art-directed frame sequences for complex shots. Avoid asking one generated video to carry the whole narrative; separate scene production gives control over continuity and timing.
- Render scene sequences as optimized WebP/AVIF frames where scrubbing must be exact. Consider transparent foreground layers for the portrait, character, wire, and atmospheric elements when they need independent motion.
- Use HTML Canvas to draw the active frame and modest 2D overlays. Keep text as real HTML where practical for crisp scaling, selection, and accessibility.
- Use Blender for rendered cinematic imagery. Use Three.js only if a scene needs meaningful real-time 3D interaction; do not add it simply to claim 3D.

### Scroll and playback

- Use GSAP ScrollTrigger to pin the story stage and map scroll progress to a master timeline.
- Give each act an explicit progress range, with overlaps for dissolves and camera handoffs.
- Render the current frame on a canvas. Preload the first scene immediately; load later scenes near the viewport/progress range and cap memory usage.
- Resize for device pixel ratio without rendering more pixels than needed. Avoid React state updates on every scroll tick; update canvas and transforms directly.
- Native scroll should remain the source of truth. Smooth scrolling is optional and should never make the page feel detached from the visitor’s input.
- Build a reduced-motion path that presents the same story as still scene cards/illustrations with readable copy and functional links.

## Performance and 30 fps target

Thirty frames per second is a minimum target, not a verified result for the reference. Measure the portfolio on real devices before claiming that threshold.

- Target at least 30 fps during scroll on a representative mid-range mobile device; aim for 60 fps on desktop when feasible.
- Keep frame assets appropriately sized and compressed; use a sliding preload window for long sequences.
- Avoid repeated canvas allocation and large per-frame pixel filters. Render only when scroll progress, viewport size, or required image load changes.
- Profile frame time, dropped frames, memory, and image decode stalls with browser performance tools. Verify initial load separately from later-scene loading.
- Provide a responsive lower-cost mobile composition and a reduced-motion alternative.

## Accessibility and usability guardrails

- Keep the narrative understandable without animation: provide semantic chapter headings and concise text in the document.
- Make all project, repository, email, and navigation links real keyboard-accessible anchors.
- Maintain readable contrast and visible focus. Do not rely on color or motion alone to communicate a chapter.
- Respect `prefers-reduced-motion`; avoid pinning a very long sequence for visitors who request reduced motion.
- Give visitors a visible progress/skip affordance and ensure scroll behavior does not trap them.
- Keep animations reversible with scroll, and preserve normal browser scrolling.

## Evaluation checklist for the next build

- [ ] Opening frame starts with the user’s portrait and no picture card.
- [ ] Wire is clearly seen emerge, find the wrist, tighten, and pull the character through the screen.
- [ ] Each scene has a specific narrative purpose and restrained palette/light plan.
- [ ] Descent has the longest pacing; horizon has the slowest pacing and a clear hold.
- [ ] Project facts and profile details match the existing repository; no invented biography or metrics.
- [ ] All visible links work with mouse, touch, and keyboard.
- [ ] Reduced-motion and mobile versions remain understandable and usable.
- [ ] Frame rate is measured at 30 fps or higher during representative scroll on target devices; report actual measurement, not an estimate.

## Evidence notes

- Live reference inspected: [deathbyscroll.com](https://deathbyscroll.com/).
- Observed in the live page: pinned cinematic scene, chapter-led copy, illustrated scene changes, and a canvas-like visual exposed to accessibility inspection as `temple-canvas`.
- Public page markup linked `/dist/js/main.min.js` and `/dist/css/styles.min.css` at inspection time.
- The implementation library and measured reference frame rate remain unverified.
