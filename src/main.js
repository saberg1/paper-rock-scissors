//Query Selectors
var mainSection = document.getElementById('mainSection')

window.addEventListener('load', pageLoad)

function pageLoad(){
  mainSection.innerHTML = `        
  <section class="gameboard-section" id="gameboardSection">
    <p>Choose your game!</p>
    <div class='classic-div gamebox' id='classicDiv'>CLASSIC</div>
    <div class='difficult-div gamebox' id='difficultDiv'>DIFFICULT</div>
  </section>
  `
}