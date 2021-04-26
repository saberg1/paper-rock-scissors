class Game {
  constructor(player) {
    this.human = player.human;
    this.computer = player.computer;
    this.type = null;
    this.players = [];// do i still need this array?
    this.avatars = ['rock','paper','scissor', 'fighter1', 'fighter2'];
    this.kombatants = ['Jax', 'Lui Kang', 'Mileena', 'SonyaBlade', 'SubZero'];
  }
  
  checkDraw(human, computer) {
    if (human === computer){
      renderDraw(human, computer)
      return
    }
  }

  checkKombatWinner(human, computer) {
    if (human === "Jax") {
      if (computer === "Lui Kang"|| computer === "Mileena") {
        game.human.updateWins()
        renderWinner(human, computer)
      } else if (computer === "SonyaBlade" || computer === "SubZero"){
          game.computer.updateWins()
          renderWinner(computer, human)
        } else if (human === computer){
          this.checkDraw()
        }
      }
    if (human === "SonyaBlade") {      
      if (computer === "Lui Kang" || computer === "Mileena") {      
        game.computer.updateWins() 
        renderWinner(computer, human)   
        } else if (computer === "Jax" || computer === "SubZero") {
            game.human.updateWins()
            renderWinner(human, computer)
        }
      }
    if (human === "Lui Kang") {
      if (computer === "Jax" || computer === "Mileena") {
        game.computer.updateWins()
        renderWinner(computer, human)
        } else if (computer === "SonyaBlade" || computer ==="SubZero") {
            game.human.updateWins()
            renderWinner(human, computer)
        }
      }
    if (human === "SubZero") {
      if (computer === "Jax" || computer === "Mileena") {
        game.human.updateWins()
        renderWinner(human, computer)
        } else if (computer === "SonyaBlade" || computer === "Lui Kang") {
            game.computer.updateWins()
            renderWinner(computer, human)
        }
      }
    if (human === "Mileena") {
      if (computer === "SonyaBlade" || computer === "Lui Kang") {
        game.human.updateWins()
        renderWinner(human, computer)
        } else if (computer === "SubZero" || computer === 'Jax') {
            game.computer.updateWins()
            renderWinner(computer, human)
        }
      }
    }
  
  checkWinner(human, computer) {
    if (human === "paper") {
      if (computer === "rock") {
        game.human.updateWins()
        renderWinner(human, computer)
      } else if (computer === "scissor"){
          game.computer.updateWins()
          renderWinner(computer, human)
        } else if (human === computer){
          this.checkDraw()
        }
      }
    if (human === "scissor") {      
      if (computer === "rock") {      
        game.computer.updateWins() 
        renderWinner(computer, human)   
        } else if (computer === "paper") {
            game.human.updateWins()
            renderWinner(human, computer)
        }
      }
    if (human === "rock") {
      if (computer === "paper") {
        game.computer.updateWins()
        renderWinner(computer, human)
        } else if (computer === "scissor") {
            game.human.updateWins()
            renderWinner(human, computer)
        }
      }
    // if (human === "fighter1") {
    //   if (computer === "paper" || computer === "fighter2") {
    //     game.human.updateWins()
    //     renderWinner(human, computer)
    //     } else if (computer === "scissor" || computer === "rock") {
    //         game.computer.updateWins()
    //         renderWinner(computer, human)
    //     }
    //   }
    // if (human === "fighter2") {
    //   if (computer === "scissor" || computer === "rock") {
    //     game.human.updateWins()
    //     renderWinner(human, computer)
    //     } else if (computer === "fighter1" || computer === 'paper') {
    //         game.computer.updateWins()
    //         renderWinner(computer, human)
    //     }
    //   }
    }
  
  gameType(event) {
    this.type = event.target.id === 'classicDiv' ? 'Classic' : 'Difficult'
  }

  resetBoard() {
    game.type === 'Difficult' ? renderDifficultGame() : renderClassicGame()
  }

  fightTheGame(event) {
    // var humanChoice = this.avatars[event.target.id]
    // var computerChoice = this.avatars[game.computer.takeTurn()] 
    // this.checkDraw(humanChoice, computerChoice)
    if(this.type === 'Classic') {
      var humanChoice = this.avatars[event.target.id]
      var computerChoice = this.avatars[game.computer.takeTurn()] 
      this.checkDraw(humanChoice, computerChoice)
      this.checkWinner(humanChoice, computerChoice)
    } else {
      var humanChoice = this.kombatants[event.target.id]
      var computerChoice = this.kombatants[game.computer.takeTurn()] 
      this.checkDraw(humanChoice, computerChoice)
      this.checkKombatWinner(humanChoice, computerChoice)
    }
    // this.game === 'Classic' ? this.checkWinner(humanChoice, computerChoice) : checkKombatWinner(humanChoice, computerChoice)
    // this.checkWinner(humanChoice, computerChoice)
  }
}
