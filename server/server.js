const express = require('express');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');

const materialsRoutes = require('./routes/materials.routes');
const typesRoutes = require('./routes/types.routes');
const examplesRoutes = require('./routes/examples.routes');

const app = express();

/* MIDDLEWARE */
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

/* API ENDPOINTS */
app.use('/api', materialsRoutes);
app.use('/api', typesRoutes);
app.use('/api', examplesRoutes);

/* API ERROR PAGES */
app.use('/api', (req, res) => {
  res.status(404).send('404 not found...');
});

/* REACT WEBSITE */
app.use(express.static(path.join(__dirname, 'client/build')));
app.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build/index.html'));
});

/* MONGOOSE */
mongoose.connect('mongodb://localhost:27017/HalterShop', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.once('open', () => {
  console.log('Successfully connected to the database');
});
db.on('error', err => console.log('Error: ' + err));

/* START SERVER */
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log('Server is running on port: '+port);
});
