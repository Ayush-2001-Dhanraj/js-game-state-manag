/** @type {HTMLCanvasElement} */

import Player from "./player.js";
import Input from "./input.js";
import drawCurrentStatus from "./utils.js";

window.addEventListener("load", () => {
  const loading = document.getElementById("loading");
  loading.style.display = "none";
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const player = new Player(canvas.width, canvas.height);
  const input = new Input();

  let lasTime = 0;

  function animate(timeStamp) {
    const deltaTime = timeStamp - lasTime;
    lasTime = timeStamp;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawCurrentStatus(ctx, input, player);
    player.update(input, deltaTime);
    player.draw(ctx);
    requestAnimationFrame(animate);
  }

  animate(0);
});
