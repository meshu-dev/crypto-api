require('dotenv').config({ path: `${__dirname}/../.env` });

const fastify = require("fastify");

const initMiddleware = require('./config/middleware.js');
const initCors = require('./config/cors.js');
const initRouting = require('./config/routing.js');
const initSchedules = require('./config/schedules.js');
const initSocketIO = require('./config/socketIO.js');
const mongoDb = require('./config/mongoDb.js');

const build = (opts = {}) => {
  const app = fastify(opts);

  mongoDb.connect();

  initMiddleware(app);
  initCors(app);
  initRouting(app);
  initSchedules(app);
  initSocketIO(app);
  
  return app;
};

module.exports = { build };
