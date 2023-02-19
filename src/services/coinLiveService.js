const { getCoins } = require('./coinService');

const sendCoinsLive = (socketIO) => {
  socketIO.on('connection', (socket) => {
    console.info('Socket connected!', socket.id);

    let interval = setInterval(async () => {
      await sendAllCoins(socketIO);
    }, 10000);

    socket.on("disconnect", function () {
      clearInterval(interval);
    });
  });
}

const sendAllCoins = async (socketIO) => {
  const coins = await getCoins();
  socketIO.emit("coins", coins);
}

const sendTopTenCoins = async (socketIO) => {
  const coins = await getCoins();
  socketIO.emit("topTenCoins", coins);
}

module.exports = {
  sendCoinsLive
};
