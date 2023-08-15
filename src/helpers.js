function sleep(seconds) {
  return new Promise((resolve) => setTimeout(resolve, seconds * 1000));
}

function getRandomInt() {
  return Math.floor(Math.random() * 100);
}

module.exports = {
  sleep,
  getRandomInt
};
