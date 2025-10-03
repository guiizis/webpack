import './button.scss';

export class Button {
  create(text) {
    const button = document.createElement('button');
    button.innerHTML = text;
    button.classList.add('btn');

    document.querySelector('body').appendChild(button);
  }
}