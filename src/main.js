//Query Selectors
var mainSection = document.getElementById('mainSection')
var humanWins = document.getElementById('humanWins')
var computerWins = document.getElementById('computerWins')
var leftAsidediv = document.getElementById('leftAsideDiv')
//
window.addEventListener('load', loadPage)
//on page load, it will create new instance of Game? 
//new game will hold wins, and those will reflect/update updateWinCount(num)
//should that updateWinCount(num) live in
function loadPage(){
  // updateWinCount(num)
  // console.log('rawr')
  // renderMainPage()
  // renderClassicGame()
  // renderWinner()
  // renderDifficultGame()
}

function renderMainPage(){
  mainSection.innerHTML = `        
    <section class="front-page-section" id="frontPageSection">
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
    <section class="classic-section" id="classicSection">
      <div class='game-token game-avatar' id='rockAvatar'>rock</div>
      <div class='game-token paper-avatar' id='paperAvatar'>paper</div>
      <div class='game-token scissor-avatar' id='scissorAvatar'>scissor</div>
    </section>
    `
}

function renderDifficultGame(){
  mainSection.innerHTML = `
  <p>Choose your fighter!</p>
  <section class="difficult-section" id="difficultSection">
    <div class='game-token game-avatar' id='rockAvatar'>rock</div>
    <div class='game-token paper-avatar' id='paperAvatar'>paper</div>
    <div class='game-token scissor-avatar' id='scissorAvatar'>scissor</div>
    <div class='game-token happy-alien-avatar' id='fighter1Avatar'>fighter</div>
    <div class='game-token happy-lizard-avatar' id='fighter2Avatar'>fighter2</div>
  </section>
  `
}

function renderWinner(winner){
  var winner = 'this is a long strring'
  //remove winner variable and replace parameter for this function
  mainSection.innerHTML = `
  <p id='winnerTag'>${winner}</p>
  <section class="winner-section" id="winnerSection">
    <div class='game-token winner-avatar' id='winnerAvatar'>winner</div>
    <div class='game-token loser-avatar' id='winnerAvatar'>loser</div>
  </section>
  `
}

function updateWinCount(num){
  humanWins.innerText = num
}

function renderChangeGameBtn(){
  leftAsidediv.innerHTML = `
  
  `
}