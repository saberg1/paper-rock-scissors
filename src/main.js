//Query Selectors
var mainSection = document.getElementById('mainSection')
var humanWins = document.getElementById('humanWins')
var computerWins = document.getElementById('computerWins')
var leftAsidediv = document.getElementById('leftAsideDiv')

var mainSection = document.getElementById('mainSection')

var leftAsideDiv = document.getElementById('leftAsideDiv')

//Event Listeners
mainSection.addEventListener('click', function() {
  clicker(event)
})
leftAsideDiv.addEventListener('click', renderMainPage)
window.addEventListener('load', loadPage)
//on page load, it will create new instance of Game? 
//new game will hold wins, and those will reflect/update updateWinCount(num)
//should that updateWinCount(num) live in
//pastGame boolean to invoke renderGameBtn() inside Game class

//Event Handlers
function loadPage() {
  // updateWinCount(num)
  // console.log('rawr')
  renderMainPage()
  // renderClassicGame()
  // renderWinner()
  // renderDifficultGame()
  // renderChangeGameBtn()
}

function clicker(event) {
  // debugger
  startClassicGame(event)
  startDifficultGame(event)
  fightGame(event)
  // fightClassicGame(event)
}

function renderMainPage() {
  mainSection.innerHTML = `        
    <section class="front-page-section" id="frontPageSection">
      <p>Choose your game!</p>
      <div class='classic-div gamebox' id='classicDiv'>CLASSIC</div>
      <div class='difficult-div gamebox' id='difficultDiv'>DIFFICULT</div>
    </section>
    `
  leftAsidediv.innerHTML = ""
  updateWinCount(2)
}

function renderClassicGame() {
  mainSection.innerHTML = `
    <p>Choose your fighter!</p>
    <section class="classic-section" id="classicSection">
      <div class='game-token game-avatar' id='rockAvatar'>rock</div>
      <div class='game-token paper-avatar' id='paperAvatar'>paper</div>
      <div class='game-token scissor-avatar' id='scissorAvatar'>scissor</div>
    </section>
    `
}

function renderDifficultGame() {
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

function renderWinner(winner) {
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

function updateWinCount(num) {
  humanWins.innerText = num
}

function renderChangeGameBtn() {
  leftAsidediv.innerHTML = `
  <button type="button"></button>
  `
}

function startClassicGame(event) {
  // debugger
  if(event.target.id === 'classicDiv'){
    console.log('clicked classic game')
    renderClassicGame()
    renderChangeGameBtn()
    createGame()
    game.type = 'Classic'
    // game.gameType(event)
  }
}

function startDifficultGame(event) {
  if(event.target.id === 'difficultDiv'){
    console.log('clicked difficult game')
    renderDifficultGame()
    renderChangeGameBtn()
    createGame()
    game.type = 'Difficult'
    // game.gameType(event)
  }
}

function fightGame(event) {
  game.human.fightClassicGame(event)
}

function createGame(){
  // if(game === undefined){
  game = new Game({human: new Player('human', '😀'), computer: new Player('computer', '💾')})
  
}

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};
