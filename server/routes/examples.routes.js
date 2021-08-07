const express = require('express');
const router = express.Router();

const Example = require('../models/example.model');

router.get('/examples', async (req, res) => {
  try {
    const result = await Example
      .find()
      .select('picture')
      .sort({created: -1});
    if(!result) res.status(404).json({ example: 'Not found' });
    else res.json(result);
  }
  catch(err) {
    res.status(500).json(err);
  }
});

router.get('/examples/:id', async (req, res) => {
  try {
    const result = await Example
      .findById(req.params.id);
    if(!result) res.status(404).json({ example: 'Not found' });
    else res.json(result);
  }
  catch(err) {
    res.status(500).json(err);
  }
});

module.exports = router;
