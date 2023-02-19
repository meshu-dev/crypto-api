const coin = require('../models/Coin');

const addCoin = async (stat) => {
  const params = {
    coinId: stat['id'],
    name: stat['name'],
    symbol: stat['symbol'],
    image: stat['image'],
    price: stat['current_price'],
    rank: stat['market_cap_rank']
  };

  await coin(params).save();
}

const getCoins = async () => {
  return await coin.find({});
}

const getTopTenCoins = async () => {
  return await coin.find({}).sort({ rank: 1 }).limit(10);
}

const getCoin = async (id) => {
  const result = await coin.find({ coinId: id });
  return result[0] ? result[0] : null;
}

const editPriceByCoinId = async (coinId, price) => {
  const result = await coin.findOneAndUpdate(
    { coinId: coinId },
    { $set: { price: price } },
    { new: true }
  );
  return result;
}

module.exports = {
  addCoin,
  getCoins,
  getTopTenCoins,
  getCoin,
  editPriceByCoinId
}
