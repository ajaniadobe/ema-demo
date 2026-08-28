export default function decorate(block) {
  const pic = block.querySelector('picture');
  if (!pic) return;
  // Collapse the block's table wrappers down to just the picture
  block.replaceChildren(pic);
}
