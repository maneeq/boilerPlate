const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: String,
  type: String,
  amount: Number
});

const User = mongoose.model('products', productSchema);