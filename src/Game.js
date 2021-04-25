class Game {
  constructor(player) {
    this.human = player.human;
    this.computer = player.computer;
    this.type = null;
    this.players = [];// do i still need this array?
    this.avatars = ['rock','paper','scissor', 'fighter1', 'fighter2'];
    // this.rules = {
    //   rock: { scissors: 'wins', paper: 'loses', figher1: 'wins', figher2: 'loses' },
    //   paper: { scissors: 'loses', rock: 'wins', figher1: 'loses', figher2: 'wins' },
    //   scissor: { rock: 'loses', paper: 'wins', figher1: 'wins', figher2: 'loses' },
    //   fighter1: {},
    //   fighter2: {}
    // }
  }
  
  checkDraw(human, computer) {
    if (human === computer){
      renderDraw(human, computer)
      return
    }
  }
// checkWinner() stopped working once i added logic for || fighter2/1
  checkWinner(human, computer) {
    // this.checkDraw()
    if (human === "paper") {
      if (computer === "rock"|| computer === "fighter2") {
        game.human.updateWins()
        renderWinner(human, computer)
      } else if (computer === "scissor" || computer === "fighter1"){
          game.computer.updateWins()
          renderWinner(computer, human)
        } else if (human === computer){
          this.checkDraw()
        }
      }
    if (human === "scissor") {      
      if (computer === "rock" || computer === "fighter2") {      
        game.computer.updateWins() 
        renderWinner(computer, human)   
        } else if (computer === "paper" || computer === "fighter1") {
            game.human.updateWins()
            renderWinner(human, computer)
        }
      }
    if (human === "rock") {
      if (computer === "paper" || computer === "fighter2") {
        game.computer.updateWins()
        renderWinner(computer, human)
        } else if (computer === "scissor" || computer ==="fighter1") {
            game.human.updateWins()
            renderWinner(human, computer)
        }
      }
    if (human === "fighter1") {
      if (computer === "paper" || computer === "fighter2") {
        game.human.updateWins()
        renderWinner(human, computer)
        } else if (computer === "scissor" || computer === "rock") {
            game.computer.updateWins()
            renderWinner(computer, human)
        }
      }
    if (human === "fighter2") {
      if (computer === "scissor" || computer === "rock") {
        game.human.updateWins()
        renderWinner(human, computer)
        } else if (computer === "fighter1" || computer === 'paper') {
            game.computer.updateWins()
            renderWinner(computer, human)
        }
      }
    }
  
  gameType(event) {
    this.type = event.target.id === 'classicDiv' ? 'Classic' : 'Difficult'
  }

  resetBoard() {
    // console.log(this.type)
    game.type === 'Difficult' ? renderDifficultGame() : renderClassicGame()
  }

  fightTheGame(event) {
    var humanChoice = this.avatars[event.target.id] //human
    var computerChoice = this.avatars[game.computer.takeTurn()] //computer random
    this.checkWinner(humanChoice, computerChoice)
    this.checkDraw(humanChoice, computerChoice)
  }
}
