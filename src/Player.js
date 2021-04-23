class Player {
  constructor(player, token) {
    this.player = player;
    this.token = token;
    this.wins = 0;
  }

  saveWinsToStorage() {

  }

  retrieveWinsFromStorage() {

  }

  takeTurn(){

  }

  fightClassicGame(event) {
    if(event.target.id === 'rockAvatar'){
      console.log('you clicked rock')
    }
    if(event.target.id === 'paperAvatar'){
      console.log('you clicked paper')
    }
    if(event.target.id === 'scissorAvatar'){
      console.log('you clicked scissor')
    }
    if(event.target.id === 'fighter1Avatar'){
      console.log('you clicked fighter1')
    }
    if(event.target.id === 'fighter2Avatar'){
      console.log('you clicked fighter2')
    }
  }
  
}