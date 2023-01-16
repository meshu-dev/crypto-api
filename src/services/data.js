const axios = require('axios');

const cryptoApiUrl = 'https://api.coingecko.com/api/v3';
const httpClient = axios.create({
  baseURL: cryptoApiUrl
});

const getCoinList = async () => {
	const { data } = await httpClient.get('/coins/list');
  return data;
};

const getCoinMarketData = async (params) => {
  let urlParams = '';

  for (const key in params) {
    urlParams += urlParams ? '&' : '';
    urlParams += `${key}=${params[key]}`;
  }

  const { data } = await httpClient.get('/coins/markets' + (urlParams ? `?${urlParams}` : ''));
  return data;
};

const getCoinData = async (id) => {
  const { data } = await httpClient.get(`/coins/${id}`);
  return data;
};

module.exports = {
  getCoinList,
  getCoinMarketData,
  getCoinData
};
