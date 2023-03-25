const { getCoinMarketData } = require('./coinGeckoApi');
const { addCoin, getCoins, getCoin, editByCoinId } = require('./coinService');

const fetchMarketData = async () => {
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

const addCryptos = async () => {
  let stats = await fetchMarketData();
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

const updatePrices = async () => {
  let stats = await fetchMarketData();

  for (const stat of stats) {
    const coinId = stat['id'];
    const coinParams = {
      price: stat['current_price'],
      rank: stat['market_cap_rank']
    };

    await editByCoinId(
      coinId,
      coinParams
    );
  }

  return true;
}

const updateCryptos = async () => {
  const rows = await getCoins();

  if (rows && rows.length > 0) {
    return await updatePrices();
  }
  return await addCryptos();
}

module.exports = {
  updateCryptos
}
