// fetch.js
const url = "https://pokeapi.co/api/v2/pokemon/ditto";
const urlList = "https://pokeapi.co/api/v2/pokemon";

let results = null;
async function getPokemon(url) {
  const response = await fetch(url);
  //check to see if the fetch was successful
  if (response.ok) {
    // the API will send us JSON...but we have to convert the response before we can use it
    // .json() also returns a promise...so we await it as well.
    const data = await response.json();
    doStuff(data);
  }
}

async function getPokemonList(url) {
    const response = await fetch(url);
  //check to see if the fetch was successful
  if (response.ok) {
    // the API will send us JSON...but we have to convert the response before we can use it
    // .json() also returns a promise...so we await it as well.
    const data = await response.json();
    doStuffList(data);
  }
}

function doStuff(data) {
  // Old Code
  results = data;
  console.log("first: ", results);
  // New Code
  const outputElement = document.querySelector("#output");
  results = data;
  const html = `<h2>Name: ${results.name} No. ${results.id}</h2>
  <img src="${results.sprites.front_default}" alt="Image of ${results.name}">
  <p>Type: ${results.types[0].type}</p>
  <p>Height: ${results.height} | Weight: ${results.weight}</p>`;
  outputElement.innerHTML = html;
}

async function doStuffList (data) {
  results = data
  
  const outputElement = document.querySelector("#outputList");

  let html = `<h2>Results:</h2>\n`;


  for (let result of results.results) {
    text += `<li><a href="${result.url}">${result.name}</a></li>\n`;
  }
  
  outputElement.innerHTML = html;


  console.log("second: ", text);
}



getPokemon(url);
getPokemonList(urlList);

console.log("third: ", results);
