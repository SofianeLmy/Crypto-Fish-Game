class Game {
  constructor (canvasElement, screens) {
    this.canvas = canvasElement;
    this.context = canvasElement.getContext('2d');
    this.screens = screens;
  }

  start(){
    
    this.score = 50;
    this.player = new Player(this);
    
    this.enemies = [

    ];
    this.cryptos = [

    ];
    this.bubbles = [

    ];
    
    this.enableControls();
    this.loop();
  }

  lose (){
    this.screens.playing.style.display = 'none';
    this.screens.end.style.display = 'block';
  }


  enableControls(){
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
              this.makeBubbles();
              break;
          }
        });
  }

  makeBubbles() {
    const bubble = new Bubbles(this, this.player.x, this.player.y);
    this.bubbles.push(bubble);
  }

  generateEnemy(){
    const enemySpeed = Math.random () + 0.1;
    const enemyY = Math.random()*this.canvas.height - 50;
    const enemyX = Math.random()*this.canvas.width;
    const enemy = new Enemy (this, enemyX, enemyY, enemySpeed);
    //add something to remove enemy (splice) from array when it goes beyond width 
    this.enemies.push(enemy);
  }

  generateCrypto(){
    const cryptoY = Math.random()*this.canvas.height - 20;
    const cryptoX = Math.random()*this.canvas.width;
    const crypto = new Crypto (this, cryptoX, cryptoY);
    //check the lenght of the coins with an if
    this.cryptos.push(crypto);
    
    //
  }


  loop () {
      window.requestAnimationFrame(() => {
          this.runLogic();
          this.draw();
          this.loop();
      }, 1000);
  }

  runLogic () {
    
      if (Math.random() < 0.01) {
        this.generateEnemy();
        this.generateCrypto();
      }
      
      for (const enemy of this.enemies) {
        enemy.runLogic();

      const enemyAndPlayerIntersection = enemy.checkIntersection(this.player);
      if (enemyAndPlayerIntersection) {
        const indexOfEnemy = this.enemies.indexOf(enemy);
        this.enemies.splice(indexOfEnemy, 1);
        this.score -= 10;
      }
      }

      for (const bubble of this.bubbles) {
        bubble.runLogic();
      }
      
      for (const crypto of this.cryptos) {
        crypto.runLogic();
      
      const cryptoAndPlayerIntersection = crypto.checkIntersection(this.player);
      if (cryptoAndPlayerIntersection) {
        const indexOfCrypto = this.cryptos.indexOf(crypto);
        this.cryptos.splice(indexOfCrypto, 1);
        this.score += 10;
          
      }
  }

  if (this.score <= 0) {
    this.lose();
  }

}

  drawScore () {
    this.context.font = '38px monospace';
    this.context.fillText(this.score, 200, 50);
  }

  draw() {
      this.context.clearRect(0,0, 600, 600);
      this.player.draw();
      this.drawScore();
      for (const enemy of this.enemies){
        enemy.draw();
    }
      for (const bubble of this.bubbles) {
      bubble.draw();
    }
      for (const crypto of this.cryptos) {
          crypto.draw();
        }
    }
  }