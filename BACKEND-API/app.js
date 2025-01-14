// require('dotenv').config();
const express = require('express');
const app = express();
const connectDB = require('./db/connect')
const expenseRouter = require('./routes/expense')
const budgetRouter = require('./routes/budget');


// setting up build in middleware
app.use(express.json())


// routes

app.use('/api/v1/expense', expenseRouter);
app.use('/api/v1/budget', budgetRouter);

// port listening on port

const port = process.env.PORT || 4000;

const start = async () => {
    try {
      // await connectDB(process.env.MONGO_URI);
      app.listen(port, () => {
        console.log(`Server is running on http://localhost:${port}`);
      });
    }
    catch (error) {
      // console.error('Error starting server:', error.message);
    }
  
}

start();