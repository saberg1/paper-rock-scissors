class Game {
  constructor(player) {
    this.human = player.human;
    this.computer = player.computer;
    this.type = null;
    this.players = [];// do i still need this array?
    this.avatars = ['rock','paper','scissor', 'fighter1', 'fighter2'];
    this.rules = {
      rock: { scissors: 'wins', paper: 'loses' },
      paper: { scissors: 'loses', rock: 'wins' },
      scissor: { rock: 'loses', paper: 'wins' },
      // fighter1: {},
      // fighter2: {}
    }
  }
  
  checkDraw(human, computer) {
    if (human == computer){
      console.log('tie')
      return
    }
  }

  checkWinner(human, computer) {
    // if (human == computer){
    //   console.log('tie')
    //   return
    // }
    if (human === "paper") {
      if (computer === "rock") {
        console.log('human paper wins');
      } else if (computer === "scissor"){
          console.log("computer scissors wins")
        }
      }
    if (human === "scissor") {      
      if (computer === "rock") {      
        console.log("computer rock wins");      
        } else if (computer === "paper") {
            console.log("human scissors wins");
        }
      }
    if (human === "rock") {
      if (computer === "paper") {
        console.log("computer paper wins");
        } else if (computer === "scissor") {
            console.log("human rock wins");
        }
      }
    }
  
  gameType(event) {
    this.type = event.target.id === 'classicDiv' ? 'Classic' : 'Difficult'
  }

  resetBoard() {
    //reset the games board
    this.type === 'Difficult' ? renderDifficultGame() : renderClassicGame()
    // if(this.type === 'Difficult'){
    //   renderDifficultGame()
    // } else {
    //   renderClassicGame()
    // }
  }

  fightTheGame(event) {
    var humanChoice = this.avatars[event.target.id] //human
    var computerChoice = this.avatars[game.computer.takeTurn()] //computer random
    this.checkWinner(humanChoice, computerChoice)
    this.checkDraw(humanChoice, computerChoice)
  }
}
