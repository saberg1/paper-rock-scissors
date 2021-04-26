class Player {
  constructor(player, token) {
    this.player = player;
    this.token = token;
    this.wins = this.retrieveWinsFromStorage() || 0;
    //this.wins = localStorage.length === 0 ? 0 : this.retrieveWinsFromStorage()
    this.isComputer = player === 'computer' ? true : false 
  }
//everytime i was instatiating a new playerclass, i was setting the wins to 0. 
  saveWinsToStorage() {
    if(this.player === 'human'){
    localStorage.setItem('humanWinStorage', JSON.stringify(this.wins))
  } else if (this.player === 'computer'){
    localStorage.setItem('computerWinStorage', JSON.stringify(this.wins))
  }
    // this.retrieveWinsFromStorage()
  }

  retrieveWinsFromStorage() {
    if(this.player === 'computer'){
      console.log('computer storage')
      var compWins = JSON.parse(localStorage.getItem('computerWinStorage'))
      this.wins = compWins
      return compWins
    } 
    if(this.player === 'human') {
      console.log('human storage');
      var humanWins = JSON.parse(localStorage.getItem('humanWinStorage'))
      this.wins = humanWins
      return humanWins
    }
    console.log(this.wins);
    
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