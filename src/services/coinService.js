const coin = require('../models/Coin');

const addCoin = async (stat) => {
  const params = {
    coinId: stat['id'],
    name: stat['name'],
    symbol: stat['symbol'],
    image: stat['image'],
    price: stat['current_price']
  };

  await coin(params).save();
}

const getCoins = async () => {
  return await coin.find({});
}

const getCoin = async (id) => {
  const result = await coin.find({ coinId: id });
  return result[0] ? result[0] : null;
}

module.exports = {
  addCoin,
  getCoins,
  getCoin
};
