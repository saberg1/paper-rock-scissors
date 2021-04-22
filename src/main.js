//Query Selectors
var mainSection = document.getElementById('mainSection')
var humanWins = document.getElementById('humanWins')
var computerWins = document.getElementById('computerWins')
// var classGame = document.getElementById()
//
window.addEventListener('load', loadPage)

function loadPage(){
  // updateWinCount(num)
  // console.log('rawr')
  // renderMainPage()
  // renderClassicGame()
}

function renderMainPage(){
  mainSection.innerHTML = `        
  <section class="gameboard-section" id="gameboardSection">
    <p>Choose your game!</p>
    <div class='classic-div gamebox' id='classicDiv'>CLASSIC</div>
    <div class='difficult-div gamebox' id='difficultDiv'>DIFFICULT</div>
  </section>
  `
  updateWinCount(2)
}

function renderClassicGame(){
  mainSection.innerHTML = `
  <p>Choose your fighter!</p>
  <section class="classic-section" id="classSection">
    <div class='game-token game-avatar' id='rockAvatar'>rock</div>
    <div class='game-token paper-avatar' id='paperAvatar'>paper</div>
    <div class='game-token scissor-avatar' id='scissorAvatar'>scissor</div>
  </section>
  `
}

function updateWinCount(num){
  humanWins.innerText = num
}