class Player {
  constructor(player, token) {
    this.player = player;
    this.token = token;
    this.wins = 0;
    this.isComputer = player === 'computer' ? true : false 
  }

  saveWinsToStorage() {
    localStorage.setItem('humanWinStorage', game.human.wins)
    // console.log('savedtosotrage log: ', this.wins)
    localStorage.setItem('computerWinStorage', game.computer.wins)
    // return (humanWins, compWins)
  }

  retrieveWinsFromStorage() {
    console.log('retreivewin test')
    var humanWins = localStorage.getItem('humanWinStorage')
    var compWins = localStorage.getItem('computerWinStorage')
    updateWinCount(humanWins, compWins)
  }

  takeTurn(num){
    var num = game.type == 'Difficult' ? 5 : 3
    if(this.isComputer){
      return getRandomInt(num)
    } 
  }
  
  updateWins(){
    this.wins++
    this.saveWinsToStorage()
    
    // console.log('updateWins invoked: ', this.wins);
  }
}