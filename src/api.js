// import 'dotenv/config';

const getPictures = value => fetch(`https://api.unsplash.com/search/photos?client_id=nUpsqOueBX5mTjdLSW3DYGto7tKtjR45WSK67WoJdvs&page=1&query=${value}`)
  .then(response => response.json())
  .then(data => data);

export default getPictures;
