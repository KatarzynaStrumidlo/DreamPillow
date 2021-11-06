const express = require('express');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');

const authorsRoutes = require('./routes/authors.routes');
const paintingsRoutes = require('./routes/paintings.routes');
const addOrderRoutes = require('./routes/addOrder.routes');

const app = express();

/* MIDDLEWARE */
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

/* API ENDPOINTS */
app.use('/api', authorsRoutes);
app.use('/api', paintingsRoutes);
app.use('/api', addOrderRoutes);

/* API ERROR PAGES */
app.use('/api', (req, res) => {
  res.status(404).send('404 not found...');
});

app.use(express.static(path.join(__dirname, '/uploads')));

/* REACT WEBSITE */
app.use(express.static(path.join(__dirname, 'client/build')));
app.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build/index.html'));
});

/* MONGOOSE */
mongoose.connect('mongodb://localhost:27017/Paint', { useNewUrlParser: true, useUnifiedTopology: true });
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
