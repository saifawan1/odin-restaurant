const AboutController = (function () {
  const header = document.createElement('h2');
  const p = document.createElement('p');

  function renderHomePage(div) {
    div.innerHTML = '';

    header.textContent = 'About';
    p.innerHTML = 'best restaurant ever mate';

    div.appendChild(header);
    div.appendChild(p);
  }

  return { renderHomePage };
})();

export { AboutController };
