export default function drawCurrentStatus(context, input, player) {
  context.font = "20px helvetica";
  context.fillText("Last input: " + input.lastKey, 15, 30);
  context.fillText("Active state: " + player.currentState.state, 15, 60);
}
