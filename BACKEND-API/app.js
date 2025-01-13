require('dotenv').config();

const express = require('express');
const app = express();
const connectDB = require('./data/db/connect')


// setting up build in middleware
app.use(express.json())


// routes

app.get('/hello', (req, res) => {
  res.send('Expense Tracker application');
})

// port listening on port

const port = process.env.PORT || 4000;

const start = async () => {
  try {
    // await connectDB(process.env.MONGO_URI);
    // console.log('Connected to DB..');
    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  } catch(error) {
    // console.error('Error connecting to DB:', error.message);
    process.exit(1);
  }
}

start();