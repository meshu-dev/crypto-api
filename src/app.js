require("dotenv").config();
const fastify = require("fastify");

const initRouting = require('./config/routing.js');
const initSchedules = require('./config/schedules.js');
const mongoDb = require('./config/mongoDb.js');

const build = (opts = {}) => {
  const app = fastify(opts);

  mongoDb.connect();
  initRouting(app);
  initSchedules(app);
  
  return app;
};

module.exports = { build };
