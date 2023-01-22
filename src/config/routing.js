const indexRoutes = require('./../routes/index.js');
const coinRoutes = require('./../routes/coin.js');

const initRouting = (app) => {
  app.register(indexRoutes);
  app.register(coinRoutes, { prefix: '/coins' });
};

module.exports = initRouting;
