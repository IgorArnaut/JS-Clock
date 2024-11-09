import { getH, getM, getS } from "./helpers";

window.addEventListener("load", () => {
  const clock = document.getElementById("clock");

  setInterval(() => {
    const now = new Date();
    const h = getH(now);
    const m = getM(now);
    const s = getS(now);
    const time = `${h}:${m}:${s}`;
    clock.innerText = time;
  }, 1000);
});
