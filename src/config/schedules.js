const { fastifySchedulePlugin } = require('@fastify/schedule');
const { updateCryptoJob } = require('../utils/cronjobs.js');

const initSchedules = (app) => {
  app.register(fastifySchedulePlugin);
  
  app.ready().then(() => {
    app.scheduler.addCronJob(updateCryptoJob);
  });
};

module.exports = initSchedules;
