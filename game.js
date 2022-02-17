class Game {
    constructor (canvasElement) {
      this.canvas = canvasElement;
      this.context = canvasElement.getContext('2d');
      this.score = 100;
      this.player = new Player(this);
      this.enemies = [];
      this.cryptos = [];
      this.enableControls();
    }

    enableControls () {
        window.addEventListener('keydown', (event) => {
          const code = event.code;
          switch (code) {
            case 'ArrowUp':
              this.player.y -= 10;
              break;
            case 'ArrowDown':
              this.player.y += 10;
              break;
            case 'ArrowRight':
              this.player.x += 10;
              break;
            case 'ArrowLeft':
              this.player.x -= 10;
              break;
            case 'Space':
              this.fireSpell();
              break;
          }
        });
      }
    }