const express = require('express');
const router = express.Router();

const Order = require('../models/order.model');

router.post('/orders/add', async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      email,
      phone,
      street,
      houseNumber,
      city,
      postCode,
      totalPrice,
      products
    } = req.body.data;

    console.log(req.body.data);
    console.log(firstName)

    const newOrder = new Order({
      firstName: firstName,
      lastName: lastName,
      email: email,
      phone: phone,
      street: street,
      houseNumber: houseNumber,
      city: city,
      postCode: postCode,
      totalPrice: totalPrice,
      products: products
    });

    console.log('POST')

    await newOrder.save();
    res.json({ message: 'OK' });
  } catch(err) {
      res.status(500).json({ message: err });
  }
  });

module.exports = router;
