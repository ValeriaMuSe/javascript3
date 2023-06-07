import { getWordJoke } from '../services/api.js';

const searchResult = document.getElementById('search')
const searchForm = document.getElementById('searchForm');
const searchBox = document.getElementById('searchBox'); 

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
}


const initSearchJoke = () => {
  searchForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const searchWord = searchBox.value;
    searchJoke(searchWord);
  });
};

export { initSearchJoke };
