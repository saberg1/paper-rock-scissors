//Global Variable
var game;

//Query Selectors
var mainSection = document.getElementById('mainSection');
var humanWins = document.getElementById('humanWins');
var computerWins = document.getElementById('computerWins');
var leftAsidediv = document.getElementById('leftAsideDiv');
var frontSection = document.getElementById('frontPageSection')

// Mortal Kombat selectors
var humanHead = document.getElementById('humanHeading');
var computerHead = document.getElementById('computerHeading');
var header = document.getElementById('header');
var humanAvatar = document.getElementById('humanAvatar');
var computerAvatar = document.getElementById('computerAvatar');

//Event Listeners
mainSection.addEventListener('click', function(event) {
  eventDelegator(event)
});
leftAsideDiv.addEventListener('click', renderMainPage);
window.addEventListener('load', loadPage);

//Event Handlers
function loadPage(){
  updateWinCount();
  renderMainPage();
}
function eventDelegator(event) {
  startClassicGame(event);
  startDifficultGame(event);
  fightGame(event);
  updateGameType(event)
};

function renderMainPage() {
  mainSection.innerHTML = `        
    <section class="front-page-section" id="frontPageSection">
      <p>Choose your game!</p>
      <div class='gamebox classicBox' id='classicDiv'>
        <p class='game-box-p'>✂️Classic🪨 </p>
        paper > rock <br>
        rock > scissor <br>
        scissor > paper <br>
      </div>
      <div class='gamebox kombat-box' id='difficultDiv'>
        <p class='game-box-p'>MORTAL KOMBAT</p>
        Jax > Lui Kang & Goro<br>
        Sonya Blade > Jax & Sub-Zero<br>
        Lui Kang > Sonya Blade & Sub-Zero<br>
        Sub-Zero > Jax & Goro<br>
        Goro > Sonya Blade & Lui Kang<br>
      </div>
    </section>
    `
  leftAsidediv.innerHTML = "";
  updateWinCount();
  renderClassicSettings();
}

function renderClassicGame() {
  mainSection.innerHTML = `
    <p>Choose your fighter!</p>
    <section class="classic-section" id="classicSection">      
      <img src="assets/rock.png" id='0' class='game-token rock-avatar' alt="rock avatar">
      <img src="assets/paper.png" id='1' class='game-token paper-avatar' alt="paper avatar">
      <img src="assets/scissor.png" id='2' class='game-token scissor-avatar' alt="scissor avatar">
    </section>
    `
  renderClassicSettings();
  renderChangeGameBtn()
};

function renderClassicSettings() {
  document.body.style.backgroundImage = ""
  computerHead.innerText = 'Computer'
  humanHead.innerText = 'Human'
  header.innerHTML = 'Rock, Paper, Scissors'
  humanAvatar.innerHTML = '<img class="avatar" alt="human avatar" src="assets/Human_Avatar.png">'
  computerAvatar.innerHTML = '<img class="avatar" alt="computer avatar" src="assets/Computer_Avatar.png">'
};

function renderDifficultGame() {
  mainSection.innerHTML = `
  <p class='difficultText'>Choose your fighter!</p>
  <section class="difficult-section" id="difficultSection">
    <img src="assets/Jax.png" id='0' class='game-token kombat-avatar' alt="jax avatar">
    <img src="assets/Lui Kang.png" id='1' class='game-token kombat-avatar' alt="lui kang avatar">
    <img src="assets/Goro.png" id='2' class='game-token kombat-avatar' alt="Goro avatar">
    <img src="assets/SonyaBlade.png" id='3' class='game-token kombat-avatar' alt="sonya blade avatar">
    <img src="assets/SubZero.png" id='4' class='game-token kombat-avatar' alt="sub zero avatar">
  </section>
  `
  renderKombatSettings();
  renderChangeGameBtn();
};

function renderKombatSettings() {
  computerHead.innerHTML = 'Shang Tsung';
  humanHead.innerText = 'Lord Raiden';
  header.innerHTML = 'MORTAL <img class="kombat-img" src="assets/kombat_symbol.png" alt="mortal kombat symbol"> KOMBAT';
  humanAvatar.innerHTML = '<img class="avatar" src="assets/lord_raiden.png" alt="lord raiden img">';
  computerAvatar.innerHTML = '<img class="avatar" src="assets/shang_tsung.png" alt="shang tsung img">';
};

function renderWinner(winner, loser) {
  mainSection.innerHTML = `
  <p id='winnerTag'>${winner} won this round!</p>
  <section class="descision-section" id="descisionSection">
    <div class='' id='winnerAvatar'>
      <img class='avatar'src='assets/${winner}.png' alt="${winner} img"> 
    </div>
    <div class='' id='winnerAvatar'>
      <img class='avatar'src='assets/${loser}.png' alt="${loser} img">
    </div>
  </section>
  `
  setTimeout(game.resetBoard, 100);
};

function renderDraw(human, computer) {
  mainSection.innerHTML = `
  <p id='winnerTag'>It's a draw!</p>
  <section class="descision-section" id="descisionSection">
    <div class='' id='winnerAvatar'>
      <img class='avatar'src='assets/${human}.png' alt="${human} img">
    </div>
    <div class='' id='winnerAvatar'>
      <img class='avatar'src='assets/${computer}.png' alt="${human} img">
    </div>
  </section>
  `
  setTimeout(game.resetBoard, 100);
};

function updateWinCount() {
  if(!localStorage.humanWinStorage) {
    humanWins.innerText = 0
  } else {
    humanWins.innerText = JSON.parse(localStorage.getItem('humanWinStorage'));
  }
  if(!localStorage.computerWinStorage) {
    computerWins.innerText = 0
  } else {
    computerWins.innerText = JSON.parse(localStorage.getItem('computerWinStorage'));
  }
};

function renderChangeGameBtn() {
  leftAsidediv.innerHTML = `
    <button type="button">CHANGE GAME?</button>
  `
};

function startClassicGame(event) {
  if(event.target.id === 'classicDiv') {
    renderClassicGame();
    renderChangeGameBtn();
    createGame();
    game.gameType(event);
  }
};

function startDifficultGame(event) {
  if(event.target.id === 'difficultDiv') {
    renderDifficultGame();
    renderChangeGameBtn();
    createGame();
    game.gameType(event);
  };
};

function fightGame(event) {
  game.fightTheGame(event);
  updateWinCount();
};

function createGame() {
  if(!game) {
  game = new Game({human: new Player('human', '😀'), computer: new Player('computer', '💾')})
  };
};

function updateGameType(event) {
  if(event.target.id === 'Classic' || event.target.id === 'Difficult') {
    gameType(event)
  };
};

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
};
