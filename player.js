class Player {
  constructor (gameInstance) {
  this.game = gameInstance;
  this.x = 150;
  this.y = 150;
  this.width = 50;
  this.height = 50;
        
      }
  
  draw() {
    this.game.context.fillStyle = 'yellow';
    this.game.context.fillRect(this.x, this.y, this.height, 50);
  }

  runLogic() {
    this.x += 1;
  }

  }
  
