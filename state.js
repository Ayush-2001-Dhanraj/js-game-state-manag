export const states = {
  STANDING_LeFT: 0,
  STANDING_RIGHT: 1,
};
class State {
  constructor(state) {
    this.state = state;
  }
}
export class StandingLeft extends State {
  constructor(player) {
    super("STANDING LEFT");
    this.player = player;
  }
  enter() {
    this.player.frameY = 1;
  }
  handleInputs(input) {
    if (input.lastKey === "PRESS right")
      this.player.setState(states.STANDING_RIGHT);
  }
}
export class StandingRight extends State {
  constructor(player) {
    super("STANDING RIGHT");
    this.player = player;
  }
  enter() {
    this.player.frameY = 0;
  }
  handleInputs(input) {
    if (input.lastKey === "PRESS left")
      this.player.setState(states.STANDING_LeFT);
  }
}
