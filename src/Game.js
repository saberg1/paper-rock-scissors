class Game {
  constructor(player) {
    this.human = player.human;
    this.computer = player.computer;
    this.type = null;
    this.players = [];
  }

  gameType(event){
    // debugger
    if(event.target.id = 'classicDiv') {
      console.log('classic gametype invoked')
      this.type = 'Classic'
     if (event.target.id = 'difficultDiv'){
      console.log('difficult gametype invoked')
      this.type = 'Difficult'
     }
    }
  }

  checkWinner(){

  }

  resetBoard(){
    if(this.type === 'Difficult'){
      renderDifficultGame()
    } else {
      renderClassicGame()
    }
  }
}