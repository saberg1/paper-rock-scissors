//Global Variable
var game;

//Query Selectors
var mainSection = document.getElementById('mainSection');
var humanWins = document.getElementById('humanWins');
var computerWins = document.getElementById('computerWins');
var leftAsidediv = document.getElementById('leftAsideDiv');

// Mortal Kombat selectors
var humanHead = document.getElementById('humanHeading');
var computerHead = document.getElementById('computerHeading');
var header = document.getElementById('header');
var humanAvatar = document.getElementById('humanAvatar');
var computerAvatar = document.getElementById('computerAvatar');

//Event Listeners
mainSection.addEventListener('click', function(event) {
  clicker(event)
});
leftAsideDiv.addEventListener('click', renderMainPage);
window.addEventListener('load', renderMainPage);

//Event Handlers
function clicker(event) {
  startClassicGame(event);
  startDifficultGame(event);
  fightGame(event);
};

function renderMainPage() {
  mainSection.innerHTML = `        
    <section class="front-page-section" id="frontPageSection">
      <p>Choose your game!</p>
      <div class='gamebox' id='classicDiv'>
        Classic <br>
        paper > rock <br>
        rock > scissor <br>
        scissor > paper <br>
      </div>
      <div class='gamebox' id='difficultDiv'>
        MORTAL KOMBAT<br>
        Jax > Lui Kang & Goro<br>
        Sonya Blade > Jax & Sub-Zero<br>
        Lui Kang > Sonya Blade & Sub-Zero<br>
        Sub-Zero > Jax & Goro<br>
        Goro > Sonya Blade & Lui Kang<br>
      </div>
    </section>
    `
  leftAsidediv.innerHTML = "";
  updateWinCount(); // issue with 0 showing
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
    <img src="assets/Jax.png" id='0' class='game-token jax-avatar' alt="jax avatar">
    <img src="assets/Lui Kang.png" id='1' class='game-token lui-kang-avatar' alt="lui kang avatar">
    <img src="assets/Goro.png" id='2' class='game-token Goro-avatar' alt="Goro avatar">
    <img src="assets/SonyaBlade.png" id='3' class='game-token sonya-blade-avatar' alt="sonya blade avatar">
    <img src="assets/SubZero.png" id='4' class='game-token sub-zero-avatar' alt="sub zero avatar">
  </section>
  `
  renderKombatSettings();
};

function renderKombatSettings() {
  // document.body.style.backgroundImage = "url('assets/mkbackground2.png')"
  // background-image: url("assets/mkbackground2.png");
  // background-size = "100% 100%";
  computerHead.innerHTML = 'Shang Tsung';
  humanHead.innerText = 'Lord Raiden';
  header.innerHTML = 'MORTAL <img class="kombat-img" src="assets/kombat_symbol.png"> KOMBAT';
  humanAvatar.innerHTML = '<img class="avatar" src="assets/lord_raiden.png" alt="lord raiden img">';
  computerAvatar.innerHTML = '<img class="avatar" src="assets/shang_tsung.png" alt="shang tsung img">';
};

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
  setTimeout(game.resetBoard, 3000);
};

// function renderKombatWinner(winner, loser) {
//   mainSection.innerHTML = `
//   <p id='winnerTag'>${winner} won this round!</p>
//   <section class="winner-section" id="winnerSection">
//     <div class='game-token winner-avatar' id='winnerAvatar'>
//       <img class='game-token'src='assets/${winner}.png'> 
//     </div>
//     <div class='game-token loser-avatar' id='winnerAvatar'>
//       <img class='game-token'src='assets/${loser}.png'>
//     </div>
//   </section>
//   `
//   setTimeout(game.resetBoard, 3000);
// };

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
  setTimeout(game.resetBoard, 3000);
};

function updateWinCount() {

  // ternary to equal 0 or jspnpasre
  humanWins.innerText = JSON.parse(localStorage.getItem('humanWinStorage'));
  computerWins.innerText = JSON.parse(localStorage.getItem('computerWinStorage'));
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
  }
};

function fightGame(event) {
  game.fightTheGame(event);
  updateWinCount();
};

function createGame() {
  if(!game) {
  game = new Game({human: new Player('human', '😀'), computer: new Player('computer', '💾')})
  }
};

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
};
