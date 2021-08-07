const mongoose = require('mongoose');

const materialSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: String, required: true },
  picture: { type: String, required: true }
});

module.exports = mongoose.model('Material', materialSchema);
