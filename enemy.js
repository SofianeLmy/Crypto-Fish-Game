const enemyImage = new Image ();
enemyImage.src = '/images/whaleremove.png';

class Enemy {
    constructor (gameInstance, x, y, speed) {
      this.game = gameInstance;
      this.x = x;
      this.y = y;
      this.speed = speed;
      this.width = 75;
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

  draw(){
    this.game.context.save();
    this.game.context.fillStyle = 'red';
    this.game.context.drawImage(enemyImage,this.x, this.y, this.width, this.height);
    this.game.context.restore();
  }

  runLogic() {
  this.x -= this.speed;
}

  }