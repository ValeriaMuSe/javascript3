import { searchApiUrl } from './api.js';

const searchForm = document.getElementById('searchForm')
const searchBox = document.getElementById('searchBox')
const searchResult = document.getElementById('search') 

searchForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const searchWord = searchBox.value;
  searchJoke(searchWord);
});

function searchJoke(searchWord) {
  const api = searchApiUrl(searchWord);

  function searchingJoke() {
    fetch(api, { headers: { 'Accept': 'application/json'} })
      .then(response => response.json())
      .then(data => {
        const jokes = data.results;
        let jokesText = '';

        for (let i = 0; i < jokes.length; i++) {
          jokesText += `<li id="joke-${i + 1}">
            <a href="html/product.html">${jokes[i].joke}</a>
          </li>`;
        }

        searchResult.innerHTML = jokesText;
      })
  }

  searchingJoke()
}

export default searchJoke