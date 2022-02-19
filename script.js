const canvasElement = document.querySelector('canvas');

class Player {
    constructor (gameInstance) {
    this.game = gameInstance;
    this.x = 300;
    this.y = 150;
          
        }
    
    draw() {
      this.game.context.fillStyle = 'yellow';
      this.game.context.fillRect(this.x, this.y, 50, 50);
    }
    }

class Game {
    constructor (canvasElement) {
      this.canvas = canvasElement;
      this.context = canvasElement.getContext('2d');
      this.player = new Player(this);

      this.enemies = [];
      this.cryptos = [];
      this.score = 0;
    }

    draw() {
      this.player.draw();
    }
    }

const game = new Game(canvasElement);

game.draw();


