// app.js
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = express();
const courtroomRoutes = require('./routes/courtroomRoutes');

// Load environment variables from .env file
dotenv.config();

// Middleware
app.use(express.json());
app.use(express.static('public'));

// Routes
app.use('/courtroom', courtroomRoutes);

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch(err => console.error('Error connecting to MongoDB:', err));
