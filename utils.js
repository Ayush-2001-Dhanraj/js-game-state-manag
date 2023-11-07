export default function drawCurrentStatus(context, input, player) {
  context.font = "20px helvetica";
  context.fillText("Last input: " + input.lastKey, 30, 50);
  context.fillText("Active state: " + player.currentState.state, 30, 100);
}
