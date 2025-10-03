import { ImageCustom } from './image';
import test from '../img/image.png';
import './title.css';

class Title {
  create(title) {
    const h1 = document.createElement('h1');
    h1.innerHTML = title;
    h1.classList.add('main-title');

    document.querySelector('body').appendChild(h1);

    const image = new ImageCustom();
    image.insertAnImage(test);
  }
};

export default Title;