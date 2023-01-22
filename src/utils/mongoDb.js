const mongoDb = require('@fastify/mongodb');

const mongoDbHost = process.env.MONGO_DB_HOST;
const mongoDbPort = process.env.MONGO_DB_PORT;
const mongoDbName = process.env.MONGO_DB_NAME;

const mongoDbUrl = `mongodb://${mongoDbHost}:${mongoDbPort}/${mongoDbName}`;

const initMongoDb = (fastify) => {
  const m = fastify.register(mongoDb, {
    forceClose: true,
    url: mongoDbUrl
  });

  console.log('DDD', m);
};

module.exports = initMongoDb;
