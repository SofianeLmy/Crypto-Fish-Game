const playerImage = new Image ();
playerImage.src = '/images/orange fish.png';

class Player {
  constructor (gameInstance) {
  this.game = gameInstance;
  this.x = 150;
  this.y = 150;
  this.width = 80;
  this.height = 80;
        
      }
  
  draw() {
    this.game.context.save();
    //this.game.context.fillStyle = 'yellow';
    //this.game.context.fillRect(this.x, this.y, this.height, 50);
    this.game.context.drawImage(playerImage,this.x, this.y, this.width, this.height);

    this.game.context.restore();
  }

  runLogic() {
    this.x += 1;
  }

  }
  
