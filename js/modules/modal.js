var openModalBtn = document.getElementById("openModalBtn");
var closeModalBtn = document.querySelector(".close");

openModalBtn.addEventListener("click", openModal);
closeModalBtn.addEventListener("click", closeModal);

export function openModal() {
  const modal = document.getElementById("myModal");
  modal.style.display = "block";
}

export function closeModal() {
  const modal = document.getElementById("myModal");
  modal.style.display = "none";
}

const modalContent = document.querySelector(".modal-content");
const mainImage = document.getElementById("main__image");
const productTitle = document.getElementById("product__title");
const productPrice = document.getElementById("product__price");
const jokeProduct = document.getElementById("joke__product");

openModalBtn.addEventListener("click", function() {
  // Guardar la información del producto en localStorage
  localStorage.setItem("productInfo", JSON.stringify({
    title: productTitle.textContent,
    imageSrc: mainImage.src,
    price: productPrice.textContent,
    joke: jokeProduct.textContent
  }));

  // Actualizar el contenido del modal con la información del producto
  modalContent.innerHTML = `
    <span class="close">&times;</span>
    <h1>Cart</h1>
    <div class="modalProduct__container">
      <img class="modal-img" src="${mainImage.src}" alt="${productTitle.textContent}"/>
      <div class="modalProduct__details">
        <p>${productTitle.textContent}</p>
        <p>Precio: ${productPrice.textContent}</p>
        <p>${jokeProduct.textContent}</p>
      </div>
    </div>
  `;

  closeModalBtn = document.querySelector(".close");
  closeModalBtn.addEventListener("click", closeModal);

  openModal();
});