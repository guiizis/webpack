import Title from './components/title';
import warning from './templates/warning.html';

const title = new Title();
title.create('Hello Webpack!');

const test = {
  a: 'teste',
  b: '123',
  c: '456',
  d: 'lalala'
}

const { a, ...rest } = test;
console.log(a, rest);

const body = document.querySelector('body');
body.innerHTML += warning;