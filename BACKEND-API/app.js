const express = require('express');
const app = express();
const expenses = require('./routes/expenses');
const budgets = require('./routes/budgets')


// setting up build in middleware
app.use(express.json())


// routes

app.get('/hello', (req, res) => {
  res.send('Expense Tracker application');
})


// using the expenses router and the budgets router
app.use('/api/v1/expenses', expenses); 
app.use('/api/v1/budgets', budgets)

// port listening on port

const port = 4000;
app.listen(port, console.log(`Server is listening on http://localhost:${port}`));