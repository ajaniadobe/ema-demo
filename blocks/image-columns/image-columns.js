export default function decorate(block) {
  const rows = [...block.querySelectorAll(':scope > div')];

  rows.forEach((row, index) => {
    row.classList.add('image-columns-row');
    const cols = [...row.querySelectorAll(':scope > div')];

    cols.forEach((col) => {
      col.classList.add('image-columns-col');
      if (col.querySelector('img')) {
        col.classList.add('image-columns-col--image');
      } else {
        col.classList.add('image-columns-col--text');
      }
    });

    if (index % 2 !== 0) {
      row.classList.add('image-columns-row--reverse');
    }
  });
}
