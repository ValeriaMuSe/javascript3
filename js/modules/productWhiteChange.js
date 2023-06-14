import { imageWhiteProducts, productShirtColor } from './productData.js';
import { Publisher } from '../publisher/publisher.js';

const whiteChange = new Publisher();

export async function detailsChangeWhite() {
  const imageContainer = document.getElementById('otherProducts');
  const mainImage = document.getElementById('main__image');
  const jokeShirt = document.getElementById('joke__shirt');

  const imageUrls = [
    '../image/pillow-white.jpg',
    '../image/case-white.jpg',
    '../image/poster-white.jpg'
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

      const productData = imageWhiteProducts[imageUrl];
      if (productData) {
        const { title, price } = productData;
        document.getElementById('product__title').textContent = title;
        document.getElementById('product__price').textContent = price;

        whiteChange.publish({ title, price });
      }

      jokeShirt.innerText = '';
    });
  });
}

export async function cambiarProducto(event) {
  const mainImage = document.getElementById('main__image');
  const productTitle = document.getElementById('product__title');
  const productPrice = document.getElementById('product__price');
  const jokeShirt = document.getElementById('joke__shirt');
  
  const colorSeleccionado = event.target.getAttribute('data-id');
  const product = productShirtColor[colorSeleccionado];

  mainImage.src = product.imagen;
  productTitle.textContent = product.titulo;
  productPrice.textContent = product.precio;

  if (colorSeleccionado === 'white') {
    jokeShirt.style.color = 'black';
  } else {
    jokeShirt.style.color = '';
  }
}

whiteChange.subscribe((data) => cambiarProducto(data));

const radioButtonsShirt = document.querySelectorAll('.color');
radioButtonsShirt.forEach((radio) => {
  radio.addEventListener('click', cambiarProducto);
});