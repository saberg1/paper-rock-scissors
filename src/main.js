//Query Selectors
var mainSection = document.getElementById('mainSection')
var humanWins = document.getElementById('humanWins')
var computerWins = document.getElementById('computerWins')
// var classGame = document.getElementById()
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
  renderWinner()
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
    <section class="classic-section" id="classicSection">
      <div class='game-token game-avatar' id='rockAvatar'>rock</div>
      <div class='game-token paper-avatar' id='paperAvatar'>paper</div>
      <div class='game-token scissor-avatar' id='scissorAvatar'>scissor</div>
    </section>
    `
}

function renderDifficultGame(){

}

function renderWinner(winner){
  var winner = 'testWinner'
  mainSection.innerHTML = `
  <p id='winnerTag'>${winner} won this round!</p>
  <section class="winner-section" id="winnerSection">
    <div class='game-token winner-avatar' id='winnerAvatar'>winner</div>
    <div class='game-token loser-avatar' id='winnerAvatar'>loser</div>
  </section>
  `
}

function updateWinCount(num){
  humanWins.innerText = num
}