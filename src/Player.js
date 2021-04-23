class Player {
  constructor(player, token) {
    this.player = player;
    this.token = token;
    this.wins = 0;
  }

  saveWinsToStorage() {
    //save wins to localstorage
  }

  retrieveWinsFromStorage() {
    //pull/return wins from localstorage
  }

  takeTurn(){
    
  }
  
  updateWins(){
    this.wins++
  }
}