const express = require('express');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');

const app = express();

const authorsRoutes = require('./routes/authors.routes');
const paintingsRoutes = require('./routes/paintings.routes');
const addOrderRoutes = require('./routes/addOrder.routes');

/* MIDDLEWARE */
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, '../client/build')));
/* API ENDPOINTS */
app.use('/api', authorsRoutes);
app.use('/api', paintingsRoutes);
app.use('/api', addOrderRoutes);
app.use(express.static(path.join(__dirname, '/uploads')));

app.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

/* API ERROR PAGES */
app.use('/api', (req, res) => {
  res.status(404).send('404 not found...');
});

/* MONGOOSE */
const dbURI = process.env.NODE_ENV === 'production' ? 'mongodb+srv://Katarzyna_Strumidlo:3UbE9JxV6wgUrxiP@cluster0.no735.mongodb.net/Paint?retryWrites=true&w=majority' : 'mongodb://localhost:27017/Paint';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true });
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
