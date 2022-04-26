class Game {
  constructor() {}
  getState() {
    var gameStateRef = database.ref("gameState");
    gameStateRef.on("value", function (data) {
      gameState = data.val();
    });
  }

  update(state) {
    database.ref("/").update({
      gameState: state,
    });
  }

  getRank() {
    var rankRef = database.ref("rank");
    rankRef.on("value", function (data) {
      rank = data.val();
    });
  }

  updateRank(ranks) {
    database.ref("/").update({
      rank: ranks,
    });
  }

  async start() {
    if (gameState === 0) {
      player = new Player();
      var playerCountRef = await database.ref("playerCount").once("value");
      if (playerCountRef.exists()) {
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form();
      form.display();
    }

    //player1 = createSprite(100, 300, 20, 20);

    // player2 = createSprite(300, 300, 20, 20);

    //  player3 = createSprite(500, 300, 20, 20);

    //  player4 = createSprite(700, 300, 20, 20);

    // players = [player1, player2, player3, player4];
  }

  play() {
    form.hide();

    Player.getPlayerInfo();

    if (allPlayers !== undefined) {
      // var index = 0;

      //  var x = 100;
      //   var y = 300;
      player.update();

      // for (var plr in allPlayers) {
      //  index = index + 1;

      //  x = x + 200;

      // players[index - 1].x = x;
      // players[index - 1].y = y;

      //  if (index === player.index) {
      // players[index - 1].x = mouseX;

      //  console.log(players[index - 1].x);

      // if (keyDown("space") && at <= 0) {
      //    ataque = createSprite(players[index - 1].x, 290, 60, 10);
      // ataque.velocityY = -7;
      //   ataque.lifetime = 70;
      //   ataques.add(ataque);
      //   at = 10;
      //   }
      // }
      // }
      //ataques.displace(obs);
    }
    if (keyDown("space") && at <= 0) {
      ataque = createSprite(cubo.x, cubo.y, 60, 10);
      ataque.velocityY = -7;
      ataque.lifetime = 70;
      ataques.add(ataque);
      at = 10;
    }
    ataques.displace(obs);
    cubo.x = mouseX;

    if (frameCount % 20 === 0) {
      meteoro = createSprite(random(10, 790), 0, 20, 20);
      meteoro.velocityY = 5;
      meteoro.lifetime = 79;
      console.log(meteoro.y);
      meteoro.shapeColor = "purple";

      obs.add(meteoro);
    }

    if (player.index !== null) {
      player.update();
    }

    if (meteoro !== undefined) {
      if (obs.isTouching(chao)) {
        chances = chances - 1;
      }
    }
    if (chances === 0) {
      gameState = 2;
      playerRank = playerCount;
      player.updateCount(playerCount - 1);
    }
    fill("white");
    textSize(15);
    text("Chances:" + chances, 30, 20);

    drawSprites();
  }

  end() {
    console.log("EHE");
  }
}
