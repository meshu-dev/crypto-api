const { sendResponse } = require("../utils/common.js");
const { fetchMarketData } = require('../services/coinCollector.js');
const { getCoins, getCoin } = require('../services/coinService.js');

const fetchData = async (request, reply) => {
  const result = await fetchMarketData();

  const statusCode = 200;
  const response = { success: true, coinsAdded: result };

  sendResponse(reply, statusCode, response);
}

const getAll = async (request, reply) => {
  const rows = await getCoins();

  const statusCode = 200;
  const response = rows;

  sendResponse(reply, statusCode, response);
}

const get = async (request, reply) => {
  const { id } = request.params;

  const row = await getCoin(id);
  
  const statusCode = 200;
  const response = row;

  sendResponse(reply, statusCode, response);
}

module.exports = {
  fetchData,
  getAll,
  get
};
