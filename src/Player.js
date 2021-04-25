class Player {
  constructor(player, token) {
    this.player = player;
    this.token = token;
    this.wins = 0;
    this.isComputer = player === 'computer' ? true : false 
  }
  // saveWinsToStorage() {
  //   localStorage.setItem('gameStorage', JSON.stringify(game))
  //   // localStorage.setItem('computerStorage', JSON.stringify(game.computer))
  //   this.retrieveWinsFromStorage()
  //   }
  
  // retrieveWinsFromStorage() {
  //   var stringStorage = localStorage.getItem('gameStorage');
  //   var parsedStorage = JSON.parse(stringStorage)
  //   updateWinCount()
  //   return parsedStorage
  // }
  saveWinsToStorage() {
    localStorage.setItem('humanWinStorage', game.human.wins)
    // console.log('savedtosotrage log: ', this.wins)
    localStorage.setItem('computerWinStorage', game.computer.wins)
    this.retrieveWinsFromStorage()
  }

  retrieveWinsFromStorage() {
    updateWinCount()
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
  }
}