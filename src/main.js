/*
Lord Raiden vs Shang Tsung << human v computer
Jax, Liu Kang, Mileena, Sonya Blade, Sub-Zero << rock,paper,scissors,extra1,extra2 lol
*/


//Query Selectors
var mainSection = document.getElementById('mainSection');
var humanWins = document.getElementById('humanWins');
var computerWins = document.getElementById('computerWins');
var leftAsidediv = document.getElementById('leftAsideDiv');

var leftAsideDiv = document.getElementById('leftAsideDiv');

//Event Listeners
mainSection.addEventListener('click', function() {
  clicker(event)
});
leftAsideDiv.addEventListener('click', renderMainPage);
window.addEventListener('load', loadPage);
//new game will hold wins, and those will reflect/update updateWinCount(num)
//should that updateWinCount(num) live in
//pastGame boolean to invoke renderGameBtn() inside Game class

//Event Handlers
function loadPage() {
  // updateWinCount(num)
  // console.log('rawr')
  renderMainPage();
  // renderClassicGame()
  // renderWinner()
  // renderDifficultGame()
  // renderChangeGameBtn()
};

function clicker(event) {
  // debugger
  startClassicGame(event);
  startDifficultGame(event);
  fightGame(event);
  // fightClassicGame(event)
};

function renderMainPage() {
  mainSection.innerHTML = `        
    <section class="front-page-section" id="frontPageSection">
      <p>Choose your game!</p>
      <div class='classic-div gamebox' id='classicDiv'>CLASSIC</div>
      <div class='difficult-div gamebox' id='difficultDiv'>DIFFICULT</div>
    </section>
    `
  leftAsidediv.innerHTML = ""
  updateWinCount()
}

function renderClassicGame() {
  mainSection.innerHTML = `
    <p>Choose your fighter!</p>
    <section class="classic-section" id="classicSection">
      <div class='game-token game-avatar' id='0'>rock</div>
      <div class='game-token paper-avatar' id='1'>paper</div>
      <div class='game-token scissor-avatar' id='2'>scissor</div>
    </section>
    `
}

function renderDifficultGame() {
  mainSection.innerHTML = `
  <p>Choose your fighter!</p>
  <section class="difficult-section" id="difficultSection">
    <div class='game-token game-avatar' id='0'>rock</div>
    <div class='game-token paper-avatar' id='1'>paper</div>
    <div class='game-token scissor-avatar' id='2'>scissor</div>
    <div class='game-token happy-alien-avatar' id='3'>fighter</div>
    <div class='game-token happy-lizard-avatar' id='4'>fighter2</div>
  </section>
  `
}

function renderWinner(winner) {
  var winner = 'this is a long strring'
  //remove winner variable and replace parameter for this function
  mainSection.innerHTML = `
  <p id='winnerTag'>${winner} won this round!</p>
  <section class="winner-section" id="winnerSection">
    <div class='game-token winner-avatar' id='winnerAvatar'>winner</div>
    <div class='game-token loser-avatar' id='winnerAvatar'>loser</div>
  </section>
  `
}

function renderDraw(human, computer) {
  // var winner = 'this is a long strring'
  //remove winner variable and replace parameter for this function
  console.log('renderdraw function invoked');
  mainSection.innerHTML = `
  <p id='winnerTag'>It's a draw!</p>
  <section class="winner-section" id="winnerSection">
    <div class='game-token winner-avatar' id='winnerAvatar'>${human}</div>
    <div class='game-token loser-avatar' id='winnerAvatar'>${computer}</div>
  </section>
  `
}

function updateWinCount(humanWin, compWin) {
  // game.computer.updateWins()
  // game.computer.retrieveWinsFromStorage()
  humanWins.innerText = humanWin
  computerWins.innerText = compWin
}

function renderChangeGameBtn() {
  leftAsidediv.innerHTML = `
  <button type="button"></button>
  `
}

function startClassicGame(event) {
  // debugger
  if(event.target.id === 'classicDiv'){
    // console.log('startClassicGame event: ', event);
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
  game.fightTheGame(event)
}

function createGame(){
  // need to find a way to only create new game if game doesn't exist
  game = new Game({human: new Player('human', '😀'), computer: new Player('computer', '💾')})
  
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
