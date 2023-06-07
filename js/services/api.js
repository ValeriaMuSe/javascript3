const randomApiUrl = 'https://icanhazdadjoke.com/';

const headers = {
  Accept: 'application/json'
}

function searchApiUrl(searchWord) {
  return `https://icanhazdadjoke.com/search?term=${searchWord}`;
}

// random
async function getRandom() {
  const response = await fetch(randomApiUrl, {
    headers: headers,
  });
  const data = await response.json();
  return data;
}

// search
async function getWordJoke(searchWord) {
  if (!searchWord) {
    return;
  }

  const api = searchApiUrl(searchWord);

  async function searchingJoke() {
    const response = await fetch(api, { headers: { 'Accept': 'application/json' } });
    const data = await response.json();
    return data;
  }

  return await searchingJoke();
}

// id
async function getJokeId(id) {
  if (!id) {
    return;
  }

  const response = await fetch(`${randomApiUrl}j/${id}`, {
    headers: headers,
  });

  const data = await response.json();
  return data;
}


export { getRandom, getWordJoke, getJokeId }