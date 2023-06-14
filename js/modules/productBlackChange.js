import { imageBlackProducts } from './productData.js';
import { Publisher } from '../publisher/publisher.js';

const blackChange = new Publisher();

export async function detailsChangeBlack() {
  const imageContainer = document.getElementById('otherProducts');
  const mainImage = document.getElementById('main__image');
  const jokeShirt = document.getElementById('joke__shirt');

  const imageUrls = [
    '../image/pillow-black.jpg',
    '../image/case-black.jpg',
    '../image/poster-black.jpeg'
  ];

  imageUrls.forEach(url => {
    const imageHTML = `<img src="${url}" class="otherProducts__image">`;
    imageContainer.insertAdjacentHTML('beforeend', imageHTML);
  });

  const imageElements = imageContainer.getElementsByClassName('otherProducts__image');
  Array.from(imageElements).forEach(image => {
    image.addEventListener('click', () => {
      const imageUrl = image.getAttribute('src');
      mainImage.setAttribute('src', imageUrl);

      const productData = imageBlackProducts[imageUrl];
      if (productData) {
        const { title, price } = productData;
        document.getElementById('product__title').textContent = title;
        document.getElementById('product__price').textContent = price;

        blackChange.publish({ title, price });
      }

      jokeShirt.innerText = ' ';
    });
  });
}