const fastifySocketIO = require('fastify-socket.io');
const { sendCoinsLive } = require('../services/coinLiveService');

const initSocketIO = (app) => {
  app.register(fastifySocketIO);
  
  app.ready().then(() => {
    sendCoinsLive(app.io);
  });
};

module.exports = initSocketIO;
