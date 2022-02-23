import './style.scss';

import getPictures from './api';

const title = document.querySelector('h1');

const state = {
  value: '',
  pictures: [],
};

const template = s => {
  if (s) {
    return s.pictures.map(pic => ` 
    <section class="card">
      <figure class="card__figure">
        <img class="card__img" src="${pic.urls.thumb}" alt="${pic.alt_description}">
        <figcaption class="card__description">${pic.alt_description}</figcaption>
      </figure>
    </section>
        `);
  }
  return '<span> No State </span>';
};

const render = (htmlString, el) => {
  el.innerHTML = htmlString;
};

/* const update = newState => {
  window.history.pushState(
    { ...state, ...newState },
    'HISTORY',
    `index.html#${count}`,
  ), // patch state, overwrite old data with new properties
  window.dispatchEvent(new Event('statechange'));
}; */

title.addEventListener('click', async () => {
  const response = await getPictures('penguin');
  const newState = {
    value: 'search',
    pictures: [...response.results],
    count: state.count + 1,
  };
  console.log(newState.pictures.length);
  render(template(newState), document.querySelector('#gallery'));
  // const element = document.createElement('img');
  // element.src = response.results['0'].urls.full;
  // app.append(element);
});

/* window.addEventListener('statechange', () => {
  render(template(window.history.state), document.querySelector('#gallery'));
});

render(template(window.history.state), document.querySelector('#gallery'));
 */
