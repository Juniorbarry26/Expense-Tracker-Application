// Import necessary modules
const express = require('express');
const app = express();
const connectDB = require('./db/connect');
const expenseRouter = require('./routes/expense');
const budgetRouter = require('./routes/budget');

// Setting up built-in middleware
app.use(express.json());

// Routes
app.use('/api/v1/expense', expenseRouter);
app.use('/api/v1/budget', budgetRouter);

// Port and MongoDB URI
const port = process.env.PORT || 6000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/ExpenseTrackerApp';

// Start server
const start = async () => {
  try {
    await connectDB(MONGO_URI);
    console.log('DB connection established');
    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  } catch (error) {
    console.error('Error starting server:', error.message);
  }
};

start();
