require("dotenv").config();
const fastify = require("fastify");

const indexRoutes = require("./routes/index.js");
const coinRoutes = require("./routes/coin.js");

const build = (opts = {}) => {
  const app = fastify(opts);
  
  app.register(indexRoutes);
  app.register(coinRoutes, { prefix: '/coin' });
  
  return app;
};

module.exports = { build };
