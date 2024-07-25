import Image from './image.png';
const HomeController = (function () {
  const header = document.createElement('h2');
  const img = document.createElement('img');
  const p = document.createElement('p');

  function renderHomePage(div) {
    div.innerHTML = '';

    header.textContent = 'header';
    p.innerHTML = 'best restaurant ever mate';
    img.src = Image;

    div.appendChild(header);
    div.appendChild(p);
    div.appendChild(img);
  }

  return { renderHomePage };
})();

export { HomeController };
