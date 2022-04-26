var cubo, distancia;

var database, at;

var gameState = 0;

var playerCount = 0;

var chances, chao, bg;

var allPlayers, ataque, ataques, playerRank;

var meteoro,
  obs,
  form,
  game,
  player,
  players,
  player1,
  player2,
  player3,
  player4;

function preload() {
  bg = loadImage("bg.gif");
}

function setup() {
  createCanvas(800, 400);

  database = firebase.database();
   cubo = createSprite(400, 300, 20, 20);

  chances = 5;

  obs = new Group();
  ataques = new Group();

  chao = createSprite(400, 400, 800, 10);

  at = 0;

  rank = null;

  game = new Game();
  game.getState();
  game.start();
}
function draw() {
  background(bg);

  if (gameState === 0) {
    fill("white");
    text("Não deixe os quadrados acertarem o chão.", 300, 250);
    text(
      "Aperte espaço para disparar projéteis e pegar os quadrados.",
      250,
      265
    );
    text("Sobreviva mais que os oponentes para vencer.", 300, 280);
    text("Use o mouse para se mover.", 325, 295);
  }

  if (gameState === 1) {
    game.play();
  }
  if (playerCount === 4) {
    game.update(1);
  }

  at = at - 1;

  if (gameState === 2) {
    fill("white");
    text(player.name + " acabou em " + playerRank + "° lugar.", 300, 200);
  }

  console.log();
}
