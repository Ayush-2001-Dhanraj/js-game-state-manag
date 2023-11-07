import { StandingLeft, StandingRight } from "./state.js";

export default class Player {
  constructor(gameWidth, gameHeight) {
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
    this.states = [new StandingLeft(this), new StandingRight(this)];
    this.currentState = this.states[1];
    this.spriteWidth = 200;
    this.spriteHeight = 181.8;
    this.width = this.spriteWidth * 0.8;
    this.height = this.spriteHeight * 0.8;
    this.image = document.getElementById("dog");
    this.x = this.gameWidth / 2 - this.width / 2;
    this.y = this.gameHeight - this.height;
    this.frameX = 0;
    this.frameY = 0;
  }
  update(input) {
    this.currentState.handleInputs(input);
  }
  draw(context) {
    context.drawImage(
      this.image,
      this.frameX * this.spriteWidth,
      this.frameY * this.spriteHeight,
      this.spriteWidth,
      this.spriteHeight,
      this.x,
      this.y,
      this.width,
      this.height
    );
  }
  setState(state) {
    this.currentState = this.states[state];
    this.currentState.enter();
  }
}
