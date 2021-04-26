class Game {
  constructor(player) {
    this.human = player.human;
    this.computer = player.computer;
    this.type = null;
    this.players = [];// do i still need this array?
    this.avatars = ['rock','paper','scissor', 'fighter1', 'fighter2'];
    // this.kombatants = ['Jax', 'Lui Kang', 'Mileena', 'Sonya Blade', 'Sub-Zero'];
  }
  
  checkDraw(human, computer) {
    if (human === computer){
      renderDraw(human, computer)
      return
    }
  }

  checkWinner(human, computer) {
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
    game.type === 'Difficult' ? renderDifficultGame() : renderClassicGame()
  }

  fightTheGame(event) {
    var humanChoice = this.avatars[event.target.id]
    var computerChoice = this.avatars[game.computer.takeTurn()] 
    this.checkWinner(humanChoice, computerChoice)
    this.checkDraw(humanChoice, computerChoice)
  }
}
