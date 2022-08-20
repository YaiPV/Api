async function getApiData() {
    let result = [];
  
    result = await fetch("https://rickandmortyapi.com/api/character");
    result = await result.json();
    result = result.results;
    return result;
  }
  
  function getCard(name, image, position, status) {
    return `
      <div class="card">
          <img src="${image}" alt="Avatar" style="width: 100%" />
          <div class="container">
            <h4><b>${name}</b></h4>
            <p>${position}</p>
            <p>${status}</p>
          </div>
        </div>
      `;
  }
  
  async function process() {
    const result = await getApiData();
    const $container = document.querySelector(".main-container");
    $container.innerHTML=header();
    for (const item of result) {
      $container.innerHTML += getCard(item.name, item.image, item.species, item.status);
    }
  }
  
  function header() {
    return `
      <header></header>
      `;
  }
  
  function footer() {
    return `
      <footer></footer>
      `;
  }
  
  function printResult(result) {
    const $container = document.querySelector(".main-container");
    for (const item of result) {
      $container.innerHTML += getCard(item.name, item.image, item.species);
    }
  }
 
  process();