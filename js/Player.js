class Player {
  constructor()
  {
    this.index = null;
    this.distance = 0;
    this.name = null;
  }

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",function(data){
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }

  update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name: this.name,
      distance : this.distance
    });
  }
  //static functions are called by class themselves rather than by objects
  //arrow function binds the function to the original object which calls it
  static getPlayerInfo()
  {
var playerInfoRef = database.ref('players');
playerInfoRef.on("value",(data)=>{
   allPlayers = data.val();
});
  }
}
