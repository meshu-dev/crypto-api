const fs = require('fs');
const { getCoinMarketData } = require('./../services/data.js');

const getData = async (request, reply) => {
  const params = {
    'vs_currency': 'usd',
    'order': 'market_cap_desc',
    'per_page': 100,
    'page': 1
  };

  try {
    const stats = await getCoinMarketData(params);
    return stats;
  } catch (error) {
    return getErrorResponse(error);
  }
};

module.exports = { getData };