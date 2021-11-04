const mongoose = require('mongoose');

const paintingSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  price: { type: String, required: true },
  description: { type: String, required: true },
  picture: { type: String, required: true },
});

module.exports = mongoose.model('Painting', paintingSchema);
