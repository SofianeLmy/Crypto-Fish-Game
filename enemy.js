class Enemy {
    constructor (gameInstance, x, y, speed) {
      this.game = gameInstance;
      this.x = x;
      this.y = y;
      this.speed = speed;
      this.width = 50;
      this.height = 50;
    }
  
  draw(){
    this.game.context.save();
    this.game.context.fillStyle = 'red';
    this.game.context.fillRect(this.x, this.y, this.width, this.height);
    this.game.context.restore();
  }

runLogic() {
  this.x += this.speed;
}

  }