const express = require('express');
const router = express.Router();

const Material = require('../models/material.model');

router.get('/materials', async (req, res) => {
  try {
    const result = await Material
      .find()
      .select('name price picture')
      .sort({created: -1});
    if(!result) res.status(404).json({ material: 'Not found' });
    else res.json(result);
  }
  catch(err) {
    res.status(500).json(err);
  }
});

router.get('/materials/:id', async (req, res) => {
  try {
    const result = await Material
      .findById(req.params.id);
    if(!result) res.status(404).json({ material: 'Not found' });
    else res.json(result);
  }
  catch(err) {
    res.status(500).json(err);
  }
});

module.exports = router;
