const fs = require('fs');
const jsdom = require('jsdom');
// const index = require('./index');

const { JSDOM } = jsdom;

const template = fs.readFileSync('./src/template.html');
const dom = new JSDOM(template);

test('connected to index.js', () => {
  expect(dom.window.document.querySelector('h1').textContent).toBe('Penguin Gallery');
});
