export default function decorate(block) {
  const items = [...block.querySelectorAll(':scope > div > div')];
  block.innerHTML = '';

  const ol = document.createElement('ol');
  ol.classList.add('steps-list');

  items.forEach((item, index) => {
    const li = document.createElement('li');
    li.classList.add('steps-item');

    const marker = document.createElement('div');
    marker.classList.add('steps-marker');
    marker.textContent = index + 1;

    const content = document.createElement('div');
    content.classList.add('steps-content');

    const heading = item.querySelector('h3');
    const para = item.querySelector('p');
    if (heading) {
      heading.textContent = heading.textContent.replace(/^\d+\.\s*/, '');
      content.appendChild(heading);
    }
    if (para) content.appendChild(para);

    const connector = document.createElement('div');
    connector.classList.add('steps-connector');

    li.appendChild(marker);
    li.appendChild(content);
    li.appendChild(connector);
    ol.appendChild(li);
  });

  block.appendChild(ol);
}
