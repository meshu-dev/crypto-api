const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const fields = {
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
}

const actions = {
  toJSON: {
    transform: function (doc, ret) {
      let idObj = { id: ret.coinId };

      delete ret._id;
      delete ret.coinId;
      delete ret.__v;
    
      return Object.assign({}, idObj, ret);
    }
  }
}

const coinSchema = new Schema(
  fields,
  actions
)

module.exports = mongoose.model('coin', coinSchema);
