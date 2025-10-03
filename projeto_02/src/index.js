import Title from './components/title';

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