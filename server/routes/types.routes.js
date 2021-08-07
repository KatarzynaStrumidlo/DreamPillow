const express = require('express');
const router = express.Router();

const Type = require('../models/type.model');

router.get('/types', async (req, res) => {
  try {
    const result = await Type
      .find()
      .select('name picture')
      .sort({created: -1});
    if(!result) res.status(404).json({ type: 'Not found' });
    else res.json(result);
  }
  catch(err) {
    res.status(500).json(err);
  }
});

router.get('/types/:id', async (req, res) => {
  try {
    const result = await Type
      .findById(req.params.id);
    if(!result) res.status(404).json({ type: 'Not found' });
    else res.json(result);
  }
  catch(err) {
    res.status(500).json(err);
  }
});

module.exports = router;
