const express = require('express');
const router = express.Router();

const Painting = require('../models/painting.model');

router.get('/paintings', async (req, res) => {
  try {
    const result = await Painting
      .find()
      .select('title picture price')
      .sort({created: -1});
    if(!result) res.status(404).json({ type: 'Not found' });
    else res.json(result);
  }
  catch(err) {
    res.status(500).json(err);
  }
});

router.get('/painting/:id', async (req, res) => {
  try {
    const result = await Painting
      .findById(req.params.id);
    if(!result) res.status(404).json({ type: 'Not found' });
    else res.json(result);
  }
  catch(err) {
    res.status(500).json(err);
  }
});

module.exports = router;
