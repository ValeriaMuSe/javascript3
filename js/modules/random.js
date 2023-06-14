import { Publisher } from '../publisher/publisher.js';
import { getRandom } from '../services/api.js';

const jokeChange = new Publisher();

async function renderJoke() {
  const data = await getRandom();
  const joke = data.joke;
  const randomJokeElement = document.getElementById('randomP');
  const jokeShirtElements = document.querySelectorAll("#joke__shirt, #joke__product");

  randomJokeElement.innerHTML = `<a href="../../product.html?id=${data.id}">${joke}</a>`;

  jokeShirtElements.forEach(element => {
    element.innerHTML = joke;
  });

  jokeChange.publish(joke);
}

const initRandom = () => {
  const randomBtn = document.getElementById("randomBtn");

  randomBtn.addEventListener("click", renderJoke);
}

export { initRandom, jokeChange };