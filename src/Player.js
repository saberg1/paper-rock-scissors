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
    //randomize a click between the avaialable options
    //what to put here?
    console.log('rawr')
  }
  
  updateWins(){
    this.wins++
  }
}