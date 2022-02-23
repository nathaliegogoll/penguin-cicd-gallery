import './style.scss';

const heading = document.createElement('h1');
heading.textContent = 'Penguins are the best :)';

const app = document.querySelector('#root');
app.append(heading);
