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
  
  checkWinner(human, computer){
    // console.log(human)
    // console.log('test1')
    if (human == computer){
      console.log('tie')
    }

    if (human === "paper") {
      // console.log('test2');
      if (computer === "rock") {
        // console.log('test3');
        console.log('human paper wins');
      } else {
          console.log("computer scissors wins")
        }
      }
    
    if (human === "scissors") {
      if (computer === "rock") {
        console.log("computer rock wins");
        } else {
            console.log("human scissors wins");
        }
      }

    if (human === "rock") {
      if (computer === "paper") {
        console.log("computer paper wins");
        } else {
            console.log("human rock wins");
        }
      }
    }
  

  gameType(event){
    this.type = event.target.id === 'classicDiv' ? 'Classic' : 'Difficult'
  }

  resetBoard(){
    //reset the games board
    this.type === 'Difficult' ? renderDifficultGame() : renderClassicGame()
    // if(this.type === 'Difficult'){
    //   renderDifficultGame()
    // } else {
    //   renderClassicGame()
    // }
  }

  fightTheGame(event) {
    // var avatars = ['rockAvatar','paperAvatar','scissorAvatar', 'fighter1Avatar', 'fighter2Avatar']
    // debugger
    var humanChoice = this.avatars[event.target.id] //human
    var computerChoice = this.avatars[game.computer.takeTurn()] //computer random
    // if(event.target.id === 'classicSection'){
      // console.log('fightTheGame() humanChoice: ', humanChoice);
      // console.log('fightTheGame() computerChoice: ', computerChoice);
    this.checkWinner(humanChoice, computerChoice)
    // humanChoice, computerChoice
    //function to determine if equal/or different to decide winner
  }
}
  //invoke function to randomize click from computer
  //then have it check for a winner
  //once winner is found, renderWinner() with a
  //condtional for classic = 3/ difficult = 5
  //conditional variable assignment
  // checkWinner(human, computer){
  //   console.log('human choice: ', human);
  //   console.log('computer choice: ', computer);
  //   if(human === computer){
  //     renderDraw(human, computer)
  //   }
    //game rules
    //paper beats rock
    //rock beats scissors
    //scissors beat paper
    // var choices = []
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
  
