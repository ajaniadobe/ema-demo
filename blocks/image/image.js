/**
 * Image block — a standalone content image whose display size and alignment
 * are controlled by the block (not by per-image CSS or content hacks).
 *
 * Authoring: a single-cell block containing one image.
 * Variants (added as extra classes on the block):
 *   Width:  narrow (≈77%) | default (full content width) | full (edge-to-edge of section)
 *   Align:  left (default) | center | right
 */
export default function decorate(block) {
  const pic = block.querySelector('picture');
  if (!pic) return;
  // Collapse the block's table wrappers down to just the picture.
  block.replaceChildren(pic);
}
