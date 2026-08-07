export default function decorate(block) {
  const images = [...block.querySelectorAll('img')];
  block.innerHTML = '';

  const track = document.createElement('ul');
  track.classList.add('logos-track');

  images.forEach((img) => {
    const li = document.createElement('li');
    li.classList.add('logos-item');
    img.classList.add('logos-img');
    li.appendChild(img);
    track.appendChild(li);
  });

  block.appendChild(track);
}
