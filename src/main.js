//Global Variable
var game;

//Query Selectors
var mainSection = document.getElementById('mainSection');
var humanWins = document.getElementById('humanWins');
var computerWins = document.getElementById('computerWins');
var leftAsidediv = document.getElementById('leftAsideDiv');
// var classicSection = document.getElementById('classicSection')


/* Mortal Kombat selectors*/
var humanHead = document.getElementById('humanHeading')
var computerHead = document.getElementById('computerHeading')
var header = document.getElementById('header')
var humanAvatar = document.getElementById('humanAvatar');
var computerAvatar = document.getElementById('computerAvatar');

//Event Listeners
mainSection.addEventListener('click', function(event) {
  clicker(event)
});
leftAsideDiv.addEventListener('click', renderMainPage);
window.addEventListener('load', loadPage);
// classicSection.addEventListener('click', function(){
//   console.log('testmehoeboi');
// })

//Event Handlers
function loadPage() {
  renderMainPage();
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
      <div class='difficult-div gamebox' id='difficultDiv'>MORTAL KOMBAT</div>
    </section>
    `
  leftAsidediv.innerHTML = ""
  updateWinCount()
  renderClassicSettings()
}

//what is event listener on and what its trying to match << why is test clicable but not image
// what i need ot asjust so its clickable when i click the image
// check event delegation secqueneces << this condtional might be targeting the text and not the div itself?
//image is the child of the div and not the actually div

function renderClassicGame() {
  mainSection.innerHTML = `
    <p>Choose your fighter!</p>
    <section class="classic-section" id="classicSection">      
      <img src="assets/rock.png" id='0' class='game-token rock-avatar' alt="rock avatar">
      <img src="assets/paper.png" id='1' class='game-token paper-avatar' alt="paper avatar">
      <img src="assets/scissor.png" id='2' class='game-token scissor-avatar' alt="scissor avatar">
    </section>
    `
  renderClassicSettings()
}

function renderDifficultGame() {
  mainSection.innerHTML = `
  <p>Choose your fighter!</p>
  <section class="difficult-section" id="difficultSection">
    <img src="assets/Jax.png" id='0' class='game-token jax-avatar' alt="jax avatar">
    <img src="assets/Lui Kang.png" id='1' class='game-token lui-kang-avatar' alt="lui kang avatar">
    <img src="assets/mileena.png" id='2' class='game-token mileena-avatar' alt="mileena avatar">
    <img src="assets/SonyaBlade.png" id='3' class='game-token sonya-blade-avatar' alt="sonya blade avatar">
    <img src="assets/SubZero.png" id='4' class='game-token sub-zero-avatar' alt="sub zero avatar">
  </section>
  `
  renderKombatSettings()
}

function renderWinner(winner, loser) {
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
  <button type="button">CHANGE GAME?</button>
  `
}

function startClassicGame(event) {
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
  game.fightTheGame(event)
}

function createGame(){
  if(!game){
  game = new Game({human: new Player('human', '😀'), computer: new Player('computer', '💾')})
  }
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
