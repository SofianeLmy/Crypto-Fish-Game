const canvasElement = document.querySelector('canvas');

const startScreenElement = document.getElementById('start-screen');
const playScreenElement = document.getElementById('playing-screen');
const endScreenElement = document.getElementById('game-over-screen');

const startButton = startScreenElement.querySelector('button');
const tryAgainButton = endScreenElement.querySelector('button');

const screenElements = {
    start: startScreenElement,
    playing: playScreenElement,
    end: endScreenElement
  };

const game = new Game(canvasElement, screenElements);

startButton.addEventListener('click', () => {
    game.displayScreen('playing');
    game.start();
});

tryAgainButton.addEventListener('click', () => {
    game.displayScreen('playing');
    game.start();
});
