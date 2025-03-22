async function getCat(){
  const response = await fetch('https://api.thecatapi.com/v1/images/search');
  const data = await response.json();
  document.getElementById('cat').src = data[0].url;
}
api.thecatapi.com