class Game {
  constructor(player) {
    this.human = player.human;
    this.computer = player.computer;
    this.type = null;
    this.players = [];
  }

  gameType(event){
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
    //
  }

  resetBoard(){
    //reset the games board
    if(this.type === 'Difficult'){
      renderDifficultGame()
    } else {
      renderClassicGame()
    }
  }

  fightTheGame(event) {
    if(event.target.id === 'rockAvatar'){
      //invoke function to randomize click from computer
      //then have it check for a winner
      //once winner is found, renderWinner() with a
      game.human.takeTurn()
    }
    if(event.target.id === 'paperAvatar'){
      console.log('you clicked paper')
    }
    if(event.target.id === 'scissorAvatar'){
      console.log('you clicked scissor')
    }
    if(event.target.id === 'fighter1Avatar'){
      console.log('you clicked fighter1')
    }
    if(event.target.id === 'fighter2Avatar'){
      console.log('you clicked fighter2')
    }
  }
  // switchFunction() {
  //   switch(expression) {
  //     case 0:
        // first code block
  //         break;
  //     case 1:
         // second code block
  //         break;
  //     case 2: 
         // third code block
  //         break;
  //     case 3:
         // fourth code block
  //         break;
  //   }
  // }

  checkWinner(){
    //a way to check game boards win
    //if statements to determine who winner is
    //once winner is declared invoke updateWins() on player
  }
}