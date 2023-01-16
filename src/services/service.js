const { getCoinMarketData } = require('./data.js');

const processCoinMarketData = async () => {
  const params = {
    'vs_currency': 'usd',
    'order': 'market_cap_desc',
    'per_page': 100,
    'page': 1
  };

  let search = true,
  		currentPage = 1,
  		stats = null;

  while (search === true) {
  	params['page'] = currentPage;

	  try {
	    stats = await getCoinMarketData(params);
	    return stats;
	  } catch (error) {
	    return getErrorResponse(error);
	  }
  }
};

module.exports = {
  processCoinMarketData
};
