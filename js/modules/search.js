import { getWordJoke } from '../services/api.js';
import { Publisher } from '../publisher/publisher.js';

const searchResult = document.getElementById('search')
const searchForm = document.getElementById('searchForm');
const searchBox = document.getElementById('searchBox');

const publisher = new Publisher();

async function searchJoke(searchWord) {
  const data = await getWordJoke(searchWord);
  const jokes = data.results;

  let jokesText = '';
  for (let i = 0; i < jokes.length; i++) {
    jokesText += `<li>
      <a href="../../product.html?id=${jokes[i].id}">${jokes[i].joke}</a>
    </li>`;
  }

  searchResult.innerHTML = jokesText;

  publisher.publish(jokesText);
}

const initSearchJoke = () => {
  searchForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const searchWord = searchBox.value;
    searchJoke(searchWord);
  });
};

publisher.subscribe((data) => {
  searchResult.innerHTML = data;
});

export { initSearchJoke };
