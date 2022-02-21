class Game {
  constructor (canvasElement) {
    this.canvas = canvasElement;
    this.context = canvasElement.getContext('2d');
    this.player = new Player(this);
    this.enemy = new Enemy(this,500,300);

    this.enemies = [];
    this.cryptos = [];
    this.bubbles = [];
    this.score = 0;
    this.enableControls();
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
    this.enemies.push(enemy);
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
      }
      for (const enemy of this.enemies) {
        enemy.runLogic();
      }

      for (const bubble of this.bubbles) {
        bubble.runLogic();
      }
  }

  draw() {
    this.context.clearRect(0,0, 500, 500);
    this.player.draw();
    for (const enemy of this.enemies){
      enemy.draw();
  }
    for (const bubble of this.bubbles) {
    bubble.draw();
  }
  }
}