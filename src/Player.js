class Player {
  constructor(player, token) {
    this.player = player;
    this.token = token;
    this.wins = 0;
    this.isComputer = player === 'computer' ? true : false 
  }

  saveWinsToStorage() {
    //save wins to localstorage
  }

  retrieveWinsFromStorage() {
    //pull/return wins from localstorage
  }

  takeTurn(num){
    var num = game.type == 'Difficult' ? 5 : 3
    if(this.isComputer){
      return getRandomInt(num)
    } 
  }
  
  updateWins(){
    this.wins++
  }
}