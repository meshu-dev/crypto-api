require("dotenv").config();
const fastify = require("fastify");

const mongoDb = require("./config/mongoDb.js");

const indexRoutes = require("./routes/index.js");
const coinRoutes = require("./routes/coin.js");

const build = (opts = {}) => {
  const app = fastify(opts);

  mongoDb.connect();

  app.register(indexRoutes);
  app.register(coinRoutes, { prefix: '/coin' });
  
  return app;
};

module.exports = { build };
