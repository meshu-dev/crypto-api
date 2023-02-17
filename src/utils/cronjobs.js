const { CronJob } = require('toad-scheduler');
const { updateCryptoTask } = require('./schedules.js');

const updateCryptoJob = new CronJob(
  { cronExpression: process.env.UPDATE_CRYPTO_CRON_SCHEDULE },
  updateCryptoTask,
  { preventOverrun: true }
);

module.exports = {
  updateCryptoJob
};
