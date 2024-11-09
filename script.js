function getH(date) {
  const h = date.getHours();
  return h < 10 ? `0${h}` : h;
}

function getM(date) {
  const m = date.getSeconds();
  return m < 10 ? `0${m}` : m;
}

function getS(date) {
  const s = date.getSeconds();
  return s < 10 ? `0${s}` : s;
}

window.addEventListener("load", () => {
  const clock = document.getElementById("clock");

  setInterval(() => {
    const now = new Date();
    const h = getH(now);
    const m = getM(now);
    const s = getS(now);
    const time = `${h}:${m}:${s}`;
    console.log(time);
    clock.innerText = time;
  }, 1000);
});
