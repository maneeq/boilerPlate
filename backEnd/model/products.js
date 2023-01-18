const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
  name: String,
  type: String,
  amount: Number
});

const User = mongoose.model('products', productSchema);