class Player {
  constructor(player, token) {
    this.player = player;
    this.token = token;
    this.wins = localStorage.length === 0 ? 0 : this.retrieveWinsFromStorage();
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
      var compWins = JSON.parse(localStorage.getItem('computerWinStorage'));
      this.wins = compWins;
      return compWins;
    };
    if(this.player === 'human') {
      var humanWins = JSON.parse(localStorage.getItem('humanWinStorage'));
      this.wins = humanWins;
      return humanWins;
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