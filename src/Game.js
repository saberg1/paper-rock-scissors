class Game {
  constructor(player) {
    this.human = player.human;
    this.computer = player.computer;
    this.type = null;
    this.players = [];
    this.avatars = ['rockAvatar','paperAvatar','scissorAvatar', 'fighter1Avatar', 'fighter2Avatar'];
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
    // var avatars = ['rockAvatar','paperAvatar','scissorAvatar', 'fighter1Avatar', 'fighter2Avatar']
    // debugger
    // console.log('test');
    var humanChoice = this.avatars[event.target.id] //human
    var computerChoice = this.avatars[game.computer.takeTurn()] //computer random
    // if(event.target.id === 'classicSection'){
      // console.log('test click');
    this.checkWinner(humanChoice, computerChoice)
    // humanChoice, computerChoice
    //function to determine if equal/or different to decide winner
  }
  //invoke function to randomize click from computer
  //then have it check for a winner
  //once winner is found, renderWinner() with a
  //condtional for classic = 3/ difficult = 5
  //conditional variable assignment
  checkWinner(human, computer){
    //game rules
    //paper beats rock
    //rock beats scissors
    //scissors beat paper
    // var choices = []
    console.log('human choice: ', human);
    console.log('computer choice: ', computer);
    if(human === computer){
      renderDraw(human, computer)
    }
    // if(human ){

    // }
    
    // console.log('checkwinner works')
    // if(human === computer){
    //   renderDraw('human', 'computer')
    // }
    //a way to check game boards win
    //if statements to determine who winner is
    //if avatars[event.target.id] == avatars[game.computer.takeTurn()]
    // ^^ that'll bring a tie
    //if avatars[event.target.id] !== avatars[game.computer.takeTurn()]
    //^^ ternary operator to differentiate between 
    //once winner is declared invoke updateWins() on player
  }
}