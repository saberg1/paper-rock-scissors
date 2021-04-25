class Game {
  constructor(player) {
    this.human = player.human;
    this.computer = player.computer;
    this.type = null;
    this.players = [];// do i still need this array?
    this.avatars = ['rock','paper','scissor', 'fighter1', 'fighter2'];
    this.rules = {
      rock: { scissors: 'wins', paper: 'loses', figher1: 'wins', figher2: 'loses' },
      paper: { scissors: 'loses', rock: 'wins', figher1: 'loses', figher2: 'wins' },
      scissor: { rock: 'loses', paper: 'wins', figher1: 'wins', figher2: 'loses' },
      fighter1: {},
      fighter2: {}
    }
  }
  
  checkDraw(human, computer) {
    if (human == computer){
      console.log('tie')
      renderDraw(human, computer)
    return
    }
  }

  checkWinner(human, computer) {
    if (human === "paper") {
      if (computer === "rock" || "fighter2") {
        game.human.updateWins()
        renderWinner(human, computer)
      } else if (computer === "scissor" || "fighter1"){
          game.computer.updateWins()
          renderWinner(computer, human)
        }
      }
    if (human === "scissor") {      
      if (computer === "rock" || "fighter2") {      
        game.computer.updateWins() 
        renderWinner(computer, human)   
        } else if (computer === "paper" || "fighter1") {
            game.human.updateWins()
            renderWinner(human, computer)
        }
      }
    if (human === "rock") {
      if (computer === "paper" || "fighter2") {
        game.computer.updateWins()
        renderWinner(computer, human)
        } else if (computer === "scissor" || "fighter1") {
            game.human.updateWins()
            renderWinner(human, computer)
        }
      }
    if (human === "fighter1") {
      if (computer === "paper" || "fighter2") {
        game.human.updateWins()
        renderWinner(human, computer)
        } else if (computer === "scissor" || "rock") {
            game.computer.updateWins()
            renderWinner(computer, human)
        }
      }
    if (human === "fighter2") {
      if (computer === "scissor" || "rock") {
        game.human.updateWins()
        renderWinner(human, computer)
        } else if (computer === "fighter1" || 'paper') {
            game.computer.updateWins()
            renderWinner(computer, human)
        }
      }  
    // fighter1
    // figher2
    // console.log('human: ', human)
    // console.log('ocmputer: ', computer);
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
