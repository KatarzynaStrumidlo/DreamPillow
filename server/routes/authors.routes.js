const express = require('express');
const router = express.Router();

const Author = require('../models/author.model');

router.get('/authors', async (req, res) => {
  try {
    const result = await Author
      .find()
      .select('name picture description')
      .sort({created: -1});
    if(!result) res.status(404).json({ material: 'Not found' });
    else res.json(result);
  }
  catch(err) {
    res.status(500).json(err);
  }
});

router.get('/author/:id', async (req, res) => {
  try {
    const result = await Author
      .findById(req.params.id);
    if(!result) res.status(404).json({ author: 'Not found' });
    else res.json(result);
  }
  catch(err) {
    res.status(500).json(err);
  }
});

module.exports = router;
