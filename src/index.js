import './style.scss';

import getPictures from './api';

const state = {
  value: '',
  pictures: [],
};

// let count = window.history.state?.count || 0;

const template = s => {
  if (s) {
    return s.pictures.map(pic => ` 
        <section class="card flip-card">
          <figure class="card__figure flip-card-inner"> 
            <div class="flip-card-front">
              <img class="card__img"  src="${pic.urls.regular}" alt="${pic.alt_description}">
              </div>
            <figcaption class="card__description flip-card-back">${pic.alt_description}</figcaption>
          </figure>
        </section>
        `).join('');
  }
  return '<span></span>';
};

const render = (htmlString, el) => {
  const element = el;
  element.innerHTML = htmlString;
};

const update = newState => {
  window.history.pushState(
    { ...state, ...newState }, '',
  ); // patch state, overwrite old data with new properties
  window.dispatchEvent(new Event('statechange'));
};

const input = document.querySelector('#search');

input.addEventListener('search', async () => {
  const response = await getPictures(input.value);
  const newState = {
    value: input.value,
    pictures: [...response.results],
    // count: ++count,
  };
  update(newState);
});

window.addEventListener('statechange', () => {
  render(template(window.history.state), document.querySelector('#gallery'));
});

render(template(window.history.state), document.querySelector('#gallery'));
