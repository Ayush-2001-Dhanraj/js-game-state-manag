import {
  StandingLeft,
  StandingRight,
  SittingLeft,
  SittingRight,
  RunningLeft,
  RunningRight,
  JumpingLeft,
  JumpingRight,
  FallingLeft,
  FallingRight,
} from "./state.js";

export default class Player {
  constructor(gameWidth, gameHeight) {
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
    this.states = [
      new StandingLeft(this),
      new StandingRight(this),
      new SittingLeft(this),
      new SittingRight(this),
      new RunningLeft(this),
      new RunningRight(this),
      new JumpingLeft(this),
      new JumpingRight(this),
      new FallingLeft(this),
      new FallingRight(this),
    ];
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
    this.speed = 0;
    this.maxSpeed = 10;
    this.vy = 0;
    this.weight = 1;
    this.maxFrames = 6;
    this.fps = 30;
    this.frameTimer = 0;
    this.frameInterval = 1000 / this.fps;
  }
  update(input, deltaTime) {
    this.currentState.handleInputs(input);

    // sprite animation
    if (this.frameTimer > this.frameInterval) {
      if (this.frameX < this.maxFrames) this.frameX++;
      else this.frameX = 0;
      this.frameTimer = 0;
    } else this.frameTimer += deltaTime;

    // horizontal movement
    this.x += this.speed;

    // game boundaries
    if (this.x <= 0) this.x = 0;
    else if (this.x >= this.gameWidth - this.width)
      this.x = this.gameWidth - this.width;

    // vertical movement
    this.y += this.vy;
    if (!this.onGround()) {
      this.vy += this.weight;
    } else {
      this.vy = 0;
    }

    // if (this.y > this.gameHeight - this.height)
    //   this.y = this.gameHeight - this.height;
  }
  onGround() {
    return this.y >= this.gameHeight - this.height;
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
