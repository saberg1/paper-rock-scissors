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
    // debugger
    var avatarArr = ['rockAvatar','paperAvatar','scissorAvatar', 'fighter1Avatar', 'fighter2Avatar']
    
    console.log(avatarArr[event.target.id]) //human
    console.log(avatarArr[game.computer.takeTurn()]) //computer random
    //function to determine if equal/or different to decide winner
    // then
  }
  //invoke function to randomize click from computer
  //then have it check for a winner
  //once winner is found, renderWinner() with a
  //condtional for classic = 3/ difficult = 5
  //conditional variable assignment
  checkWinner(){
    //a way to check game boards win
    //if statements to determine who winner is
    //once winner is declared invoke updateWins() on player
  }
}