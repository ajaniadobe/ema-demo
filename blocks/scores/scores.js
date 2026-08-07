export default function decorate(block) {
  const scores = [...block.querySelectorAll(':scope > div > div')];
  block.innerHTML = '';
  const wrapper = document.createElement('ul');
  wrapper.classList.add('scores-list');

  scores.forEach((score) => {
    const li = document.createElement('li');
    li.classList.add('scores-item');
    const number = score.querySelector('h3');
    const label = score.querySelector('p');
    if (number) {
      const numEl = document.createElement('span');
      numEl.classList.add('scores-number');
      numEl.textContent = number.textContent;
      li.appendChild(numEl);
    }
    if (label) {
      const labelEl = document.createElement('span');
      labelEl.classList.add('scores-label');
      labelEl.textContent = label.textContent;
      li.appendChild(labelEl);
    }
    wrapper.appendChild(li);
  });

  block.appendChild(wrapper);
}
