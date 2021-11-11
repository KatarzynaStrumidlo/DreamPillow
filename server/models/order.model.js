const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  products: {type: Array, required: true},
  totalPrice: {type: Number, required: true},
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  street: { type: String, required: true },
  houseNumber: { type: String, required: true },
  city: { type: String, required: true },
  postCode: { type: String, required: true },
});

module.exports = mongoose.model('Order', orderSchema);
