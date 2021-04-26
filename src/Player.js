class Player {
  constructor(player, token) {
    this.player = player;
    this.token = token;
    this.wins = 0;
    this.isComputer = player === 'computer' ? true : false 
  }

  saveWinsToStorage() {
    localStorage.setItem('humanWinStorage', game.human.wins)
    localStorage.setItem('computerWinStorage', game.computer.wins)
    this.retrieveWinsFromStorage()
  }

  retrieveWinsFromStorage() {
    localStorage.getItem('humanWinStorage')
    localStorage.getItem('computerWinStorage')
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