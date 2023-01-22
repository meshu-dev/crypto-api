const { getCoinMarketData } = require('./coinGeckoApi');
const { addCoin, getCoin } = require('./coinService');

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

const fetchMarketData = async () => {
  let stats = await getMarketData();
  let coinsAdded = 0;

  for (const stat of stats) {
    const coin = await getCoin(stat['id']);

    if (coin == null) {
      await addCoin(stat);
      coinsAdded++;
    }
  }

  return coinsAdded;
}

module.exports = { fetchMarketData };
