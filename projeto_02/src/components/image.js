export class ImageCustom {
  insertAnImage(url) {
    const img = document.createElement('img');
    img.src = url;
    document.querySelector('body').appendChild(img);
  }
}