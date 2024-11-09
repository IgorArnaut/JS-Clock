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

export default { getH, getM, getS };
