require("dotenv").config();
const fastify = require("fastify");

const { routes } = require("./routes.js");

const build = (opts = {}) => {
  const app = fastify(opts);
  
  app.register(routes);
  
  return app;
};

module.exports = { build };
