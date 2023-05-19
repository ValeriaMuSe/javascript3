const randomBtn = document.getElementById("randomBtn");
const randomP = document.getElementById("randomP");

randomBtn.addEventListener("click", random);

function random() {
  const api = 'https://icanhazdadjoke.com/';

  function bringJoke() {
    fetch(api, { headers: { 'Accept': 'application/json' } })
      .then(response => response.json())
      .then(data => {
        const joke = data.joke
        randomP.innerHTML = joke
      })
  }

  bringJoke()
}

export default random;