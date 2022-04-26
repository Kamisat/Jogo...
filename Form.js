class Form {
  constructor() {
    this.input = createInput("Nome");
    this.button = createButton("Iniciar");
    this.reset = createButton("Reiniciar jogo");
    this.resetC = createButton("Reiniciar banco de dados");

  }

  hide() {
    this.input.hide();
    this.button.hide();
  }

  show(){
    this.input.show();
    this.button.show();
  }

  display() {
    this.input.position(400, 100);
    this.button.position(400, 125);
    this.reset.position(600, 370);
    this.resetC.position(100, 370);


    this.button.mousePressed(() => {
      this.input.hide();
      this.button.hide();
      player.name = this.input.value();
      playerCount = playerCount + 1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
    });

    this.reset.mousePressed(() => {
      gameState = 0;
      playerCount = 0;
      form.show();
      chances = 5;
    });
    this.resetC.mousePressed(() => {
      game.update(0);
      player.updateCount(0);
      var playerInfoRef = database.ref("players");
      playerInfoRef.remove();
     
    });
  }
}
