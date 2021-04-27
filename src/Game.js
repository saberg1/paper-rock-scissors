class Game {
  constructor(player) {
    this.human = player.human;
    this.computer = player.computer;
    this.type = null;
    this.avatars = ['Rock','Paper','Scissor'];
    this.kombatants = ['Jax', 'Lui Kang', 'Goro', 'SonyaBlade', 'SubZero'];
  }
  
  checkDraw(human, computer) {
    if (human === computer){
      renderDraw(human, computer);
      return
    }
  };

  checkKombatWinner(human, computer) {
    if (human === "Jax") {
      if (computer === "Lui Kang"|| computer === "Goro") {
        game.human.updateWins();
        renderWinner(human, computer);
      } else if (computer === "SonyaBlade" || computer === "SubZero") {
          game.computer.updateWins();
          renderWinner(computer, human);
      }
    };
    if (human === "SonyaBlade") {      
      if (computer === "Lui Kang" || computer === "Goro") {      
        game.computer.updateWins();
        renderWinner(computer, human);
      } else if (computer === "Jax" || computer === "SubZero") {
          game.human.updateWins();
          renderWinner(human, computer);
      }
    };
    if (human === "Lui Kang") {
      if (computer === "Jax" || computer === "Goro") {
        game.computer.updateWins();
        renderWinner(computer, human);
      } else if (computer === "SonyaBlade" || computer ==="SubZero") {
          game.human.updateWins();
          renderWinner(human, computer);
      }
    };
    if (human === "SubZero") {
      if (computer === "Jax" || computer === "Goro") {
        game.human.updateWins();
        renderWinner(human, computer);
      } else if (computer === "SonyaBlade" || computer === "Lui Kang") {
          game.computer.updateWins();
          renderWinner(computer, human);
      }
    };
    if (human === "Goro") {
      if (computer === "SonyaBlade" || computer === "Lui Kang") {
        game.human.updateWins()
        renderWinner(human, computer)
      } else if (computer === "SubZero" || computer === 'Jax') {
          game.computer.updateWins();
          renderWinner(computer, human);
      }
    }
  }
  
  checkWinner(human, computer) {
    if (human === "Paper") {
      if (computer === "Rock") {
        game.human.updateWins();
        renderWinner(human, computer);
      } else if (computer === "Scissor"){
          game.computer.updateWins();
          renderWinner(computer, human);
      }
    };
    if (human === "Scissor") {      
      if (computer === "Rock") {      
        game.computer.updateWins();
        renderWinner(computer, human);
      } else if (computer === "Paper") {
          game.human.updateWins()
          renderWinner(human, computer)
      }
    };
    if (human === "Rock") {
      if (computer === "Paper") {
        game.computer.updateWins();
        renderWinner(computer, human);
      } else if (computer === "Scissor") {
          game.human.updateWins();
          renderWinner(human, computer);
      }
    };
  };

  gameType(event) {
    this.type = event.target.id === 'classicDiv' ? 'Classic' : 'Difficult';
  };

  resetBoard() {
    game.type === 'Difficult' ? renderDifficultGame() : renderClassicGame();
  };

  fightTheGame(event) {
    if(this.type === 'Classic') {
      var humanChoice = this.avatars[event.target.id];
      var computerChoice = this.avatars[game.computer.takeTurn()];
      this.checkDraw(humanChoice, computerChoice);
      this.checkWinner(humanChoice, computerChoice);
    } else {
      var humanChoice = this.kombatants[event.target.id];
      var computerChoice = this.kombatants[game.computer.takeTurn()];
      this.checkDraw(humanChoice, computerChoice);
      this.checkKombatWinner(humanChoice, computerChoice);
    }
  };
};
