const { getCoinMarketData } = require('./coinGeckoApi.js');
const addCoin = require('./coinService');

const getMarketData = async () => {
  const params = {
    'vs_currency': 'usd',
    'order': 'market_cap_desc',
    'per_page': 100,
    'page': 1
  };

  let stats = [];

  try {
    stats = await getCoinMarketData(params);
  } catch (error) {
    return getErrorResponse(error);
  }
  return stats;
}

const collectMarketData = async () => {
  let stats = await getMarketData();

  for (const stat of stats) {
    await addCoin(stat);
  }

  return true;
};

module.exports = { collectMarketData };
