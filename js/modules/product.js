import { jokeId } from "../utils/getValue.js";
import { getJokeId } from "../services/api.js";

async function showJoke() {
  const jokeSelect = await jokeId();
  const jokeContent = await getJokeId(jokeSelect);

  const renderJoke = document.getElementById('randomP');
  const imageJoke = document.getElementById('joke__shirt');
  const jokeDescription = document.getElementById('joke__product');
  
  renderJoke.insertAdjacentHTML('beforeend', jokeContent.joke);
  imageJoke.insertAdjacentHTML('beforeend', jokeContent.joke);
  jokeDescription.insertAdjacentHTML('beforeend', jokeContent.joke);
}

export { showJoke }