import './style.scss';

import getPictures from './api';

const app = document.querySelector('#root');
const title = document.querySelector('h1');

title.addEventListener('click', async () => {
  const response = await getPictures('penguin');
  const element = document.createElement('img');
  element.src = response.results['0'].urls.full;
  app.append(element);
});
