const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let schema = new Schema({
  coinId: {
    type: String,
    required: true,
    unique: true
  },
  symbol: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  }
});

/*
schema.options.toJSON.transform = (doc, ret) => {
  ret.createdAt = new Date(ret.createdAt).toString();
  ret.updatedAt = new Date(ret.updatedAt).toString();

  let idObj = { id: ret._id };
  delete ret._id;

  return Object.assign({}, idObj, ret);
}; */

module.exports = mongoose.model('coin', schema);
