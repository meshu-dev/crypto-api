const { AsyncTask } = require('toad-scheduler');
const { updateCryptos } = require('../services/coinCollector.js');

const updateCrypto = async () => {
  console.log('Running updateCrypto...');

  await updateCryptos();

  console.log('Finished updateCrypto');
};

const updateCryptoTask = new AsyncTask(
  'Update cryptocurrency data',
  updateCrypto
);

module.exports = {
  updateCryptoTask
};
