const cryptoImage = new Image ();
cryptoImage.src = '/images/btcremove.png';

class Crypto {
    constructor (gameInstance, x, y) {
      this.game = gameInstance;
      this.x = x;
      this.y = y;
      this.width = 150;
      this.height = 75;
    }

  checkIntersection (player) {
      return (
        player.x + player.width > this.x && 
        player.x < this.x + this.width &&
        player.y + player.height > this.y && 
        player.y < this.y + this.height      
      )
    }  

  runLogic() {
  
    }

  draw() {
    this.game.context.save();
    this.game.context.drawImage(cryptoImage, this.x, this.y, this.width, this.height);
    this.game.context.restore();    
}

}