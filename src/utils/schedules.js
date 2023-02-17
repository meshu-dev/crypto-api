const { AsyncTask } = require('toad-scheduler');
const { updateCryptos } = require('../services/coinCollector.js');

const formatNumber = (value) => {
  return ("0" + value).slice(-2);
}

const getDateTime = () => {
  const dateObj = new Date();

  let year = dateObj.getFullYear();
  let month = formatNumber(dateObj.getMonth() + 1);
  let date = formatNumber(dateObj.getDate());
  
  let hours = formatNumber(dateObj.getHours());
  let minutes = formatNumber(dateObj.getMinutes());
  let seconds = formatNumber(dateObj.getSeconds());
  
  return `${year}-${month}-${date} ${hours}:${minutes}:${seconds}`;
}

const updateCrypto = async () => {
  await updateCryptos();

  const dateTime = getDateTime();
  console.log(`${dateTime} | Ran updateCrypto`);
};

const updateCryptoTask = new AsyncTask(
  'Update cryptocurrency data',
  updateCrypto
);

module.exports = {
  updateCryptoTask
};
