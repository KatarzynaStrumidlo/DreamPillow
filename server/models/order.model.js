const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema({
  // products: {type: Object, required: true},
  // totalPrice: {type: String, required: true},
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  street: { type: String, required: true },
  houseNumber: { type: String, required: true },
  city: { type: String, required: true },
  postCode: { type: String, required: true },
});

module.exports = mongoose.model('Author', authorSchema);
