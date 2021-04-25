class Player {
  constructor(player, token) {
    this.player = player;
    this.token = token;
    this.wins = 0;
    this.isComputer = player === 'computer' ? true : false 
  }

  saveWinsToStorage() {
    var humanWins = localStorage.setItem('humanWinStorage', game.human.wins)
    // console.log('savedtosotrage log: ', this.wins)
    var compWins = ocalStorage.setItem('computerWinStorage', game.computer.wins)
  }

  retrieveWinsFromStorage() {
    updateWinCount(huamnWin, compWin)
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