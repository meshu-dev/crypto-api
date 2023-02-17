const { getCoins } = require('./coinService');

const sendCoinsLive = (socketIO) => {
  socketIO.on('connection', (socket) => {
    console.info('Socket connected!', socket.id);

    let interval = setInterval(async () => {
      const coins = await getCoins();
      socketIO.emit("coins", coins);
    }, 10000);

    socket.on("disconnect", function () {
      clearInterval(interval);
    });
  });
}

module.exports = {
  sendCoinsLive
};
