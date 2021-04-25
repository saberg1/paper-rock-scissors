class Player {
  constructor(player, token) {
    this.player = player;
    this.token = token;
    this.wins = 0;
    this.isComputer = player === 'computer' ? true : false 
  }

  saveWinsToStorage() {
    localStorage.setItem('humanWinStorage', this.wins)
    localStorage.setItem('computerWinStorage', this.wins)
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
    // console.log('updateWins invoked: ', this.wins);
  }
}