/*
Lord Raiden vs Shang Tsung << human v computer
Jax, Liu Kang, Mileena, Sonya Blade, Sub-Zero << rock,paper,scissors,extra1,extra2 lol
*/
var game;

//Query Selectors
var mainSection = document.getElementById('mainSection');
var humanWins = document.getElementById('humanWins');
var computerWins = document.getElementById('computerWins');
var leftAsidediv = document.getElementById('leftAsideDiv');

var leftAsideDiv = document.getElementById('leftAsideDiv');

/* Mortal Kombat selectors*/
var humanHead = document.getElementById('humanHeading')
var computerHead = document.getElementById('computerHeading')
var header = document.getElementById('header')
var humanAvatar = document.getElementById('humanAvatar');
var computerAvatar = document.getElementById('computerAvatar');

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
  renderClassicSettings()
}
// function renderClassicGame() {
//   mainSection.innerHTML = `
//     <p>Choose your fighter!</p>
//     <section class="classic-section" id="classicSection">
//       <div class='game-token game-avatar' id='0'><img class='game-token'src='assets/rock.png'></div>
//       <div class='game-token paper-avatar' id='1'><img class='game-token'src='assets/paper.png'></div>
//       <div class='game-token scissor-avatar' id='2'><img class='game-token'src='assets/scissor.png'></div>
//     </section>
//     `
// }

// function renderDifficultGame() {
//   mainSection.innerHTML = `
//   <p>Choose your fighter!</p>
//   <section class="difficult-section" id="difficultSection">
//     <div class='game-token game-avatar' id='0'><img class='game-token'src='assets/rock.png'></div>
//     <div class='game-token paper-avatar' id='1'><img class='game-token'src='assets/paper.png'></div>
//     <div class='game-token scissor-avatar' id='2'><img class='game-token'src='assets/scissor.png'></div>
//     <div class='game-token happy-alien-avatar' id='3'><img class='game-token'src='assets/fighter1.png'></div>
//     <div class='game-token happy-lizard-avatar' id='4'><img class='game-token'src='assets/fighter2.png'></div>
//   </section>
//   `
// }

//
function renderClassicGame() {
  mainSection.innerHTML = `
    <p>Choose your fighter!</p>
    <section class="classic-section" id="classicSection">
      <div class='game-token game-avatar' id='0'>
        test
      </div>
      <div class='game-token paper-avatar' id='1'>paper</div>
      <div class='game-token scissor-avatar' id='2'>scissor</div>
    </section>
    `
  renderClassicSettings()
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
  // renderKombatSettings()
}

function renderWinner(winner, loser) {
  // console.log(loser)
  mainSection.innerHTML = `
  <p id='winnerTag'>${winner} won this round!</p>
  <section class="winner-section" id="winnerSection">
    <div class='game-token winner-avatar' id='winnerAvatar'>
      <img class='game-token'src='assets/${winner}.png'> 
    </div>
    <div class='game-token loser-avatar' id='winnerAvatar'>
      <img class='game-token'src='assets/${loser}.png'>
    </div>
  </section>
  `
  setTimeout(game.resetBoard, 1000)
}

function renderDraw(human, computer) {
  mainSection.innerHTML = `
  <p id='winnerTag'>It's a draw!</p>
  <section class="winner-section" id="winnerSection">
    <div class='game-token winner-avatar' id='winnerAvatar'>
      <img class='game-token'src='assets/${human}.png'>
    </div>
    <div class='game-token loser-avatar' id='winnerAvatar'>
      <img class='game-token'src='assets/${computer}.png'>
    </div>
  </section>
  `
  setTimeout(game.resetBoard, 1000)
}

function renderKombatSettings() {
  //Lord Raiden vs Shang Tsung
  computerHead.innerText = 'Shang Tsung'
  humanHead.innerText = 'Lord Raiden'
  header.innerHTML = 'MORTAL <img class="kombat-img" src="assets/kombat_symbol.png"> KOMBAT'
  humanAvatar.innerHTML = '<img class="avatar" src="assets/lord_raiden.png" alt="lord raiden img">'
  computerAvatar.innerHTML = '<img class="avatar" src="assets/shang_tsung.png" alt="shang tsung img">'
}

function renderClassicSettings() {
  computerHead.innerText = 'Computer'
  humanHead.innerText = 'Human'
  header.innerHTML = 'Rock, Paper, Scissors'
  humanAvatar.innerHTML = '<img class="avatar" alt="human avatar" src="assets/Human_Avatar.png">'
  computerAvatar.innerHTML = '<img class="avatar" alt="computer avatar" src="assets/Computer_Avatar.png">'
}

// function updateWinCount() {
//   // game.computer.updateWins()
  
//   var gameStorage = localStorage.getItem('gameStorage')
//   humanWins.innerText = gameStorage.human.wins
//   computerWins.innerText = gameStorage.computer.wins
// }

function updateWinCount() {
  // game.computer.updateWins()
  // game.computer.retrieveWinsFromStorage()
  // localStorage.getItem('')
  
  // var humanWins = localStorage.getItem('humanWinStorage')
  // var computerWins = localStorage.getItem('computerWinStorage')
  
  // console.log('human wins: ', localStorage.getItem('humanWinStorage'))
  // console.log('computer wins: ', localStorage.getItem('computerWinStorage'))

  humanWins.innerText = localStorage.getItem('humanWinStorage')
  computerWins.innerText = localStorage.getItem('computerWinStorage')
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
  // var game;
  if(!game){
  game = new Game({human: new Player('human', '😀'), computer: new Player('computer', '💾')})
  }
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
