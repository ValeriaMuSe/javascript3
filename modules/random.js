import { randomApiUrl } from './api.js';

const randomBtn = document.getElementById("randomBtn");
const randomP = document.getElementById("randomP");
const jokeShirtElements = document.querySelectorAll("#joke__shirt, #joke__product");

randomBtn.addEventListener("click", random);

function random() {
  function bringJoke() {
    fetch(randomApiUrl, { headers: { 'Accept': 'application/json' } })
      .then(response => response.json())
      .then(data => {
        const joke = data.joke;
        randomP.innerHTML = joke;

        jokeShirtElements.forEach(element => {
          element.innerHTML = joke;
        });
      });
  }

  bringJoke();
}

export default random;