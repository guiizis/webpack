import './heading.css';

export class Heading {
  create(title) {
    const element = document.createElement('h1');
    element.innerHTML = title;
    element.classList.add('heading');

    document.body.appendChild(element);
  }
}