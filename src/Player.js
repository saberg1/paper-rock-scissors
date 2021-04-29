class Player {
  constructor(player, token) {
    this.player = player;
    this.token = token;
    this.wins = this.retrieveWinsFromStorage();
    this.isComputer = player === 'computer' ? true : false;
  };

  saveWinsToStorage() {
    if(this.player === 'human'){
      localStorage.setItem('humanWinStorage', JSON.stringify(this.wins));
    } else if (this.player === 'computer'){
      localStorage.setItem('computerWinStorage', JSON.stringify(this.wins));
    };
  };

  retrieveWinsFromStorage() {
    if(this.player === 'computer'){
      this.wins = JSON.parse(localStorage.getItem('computerWinStorage'));
      return this.wins;
    };
    if(this.player === 'human') {
      this.wins = JSON.parse(localStorage.getItem('humanWinStorage'));
      return this.wins;
    };
  };

  takeTurn(num){
  var num = game.type == 'Difficult' ? 5 : 3;
  if(this.isComputer){
      return getRandomInt(num);
    };
  };
  
  updateWins(){
    this.wins++;
    this.saveWinsToStorage();
  };
};