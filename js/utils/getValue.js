async function jokeId() {
  const urlParams = new URLSearchParams(window.location.search);
  const id = await urlParams.get('id');
  
  return id;
}

export { jokeId };
