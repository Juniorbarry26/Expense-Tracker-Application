// server.js
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

let expenses = [
  { 
    id: 1, date: '2024-12-01', category: 'Food', amount: 50, description: 'Pizza'
  },
  { 
    id: 2, date: '2024-12-05', category: 'Transport', amount: 20, description: 'Travelling' 
  },
  { 
    id: 3, date: '2024-12-10', category: 'Utilities', amount: 100, description: 'Electricity' 
  },
  {
    id: 4, 
    date: '2024-12-15', category: 'Entertainment', amount: 30, description: 'Movies'
  },
  {
    id: 5, 
    date: '2024-12-20', category: 'Shopping', amount: 80, description: 'Clothes'
  },
  {
    id: 6, 
    date: '2024-12-25', category: 'Gifts', amount: 50, description: 'Birthday present'
  },
  {
    id: 7, 
    date: '2024-12-30', category: 'Savings', amount: 200, description: 'Monthly savings'
  },
  {
    id: 8, 
    date: '2025-01-05', category: 'Healthcare', amount: 200, description: 'Doctor appointment'
  },
  {
    id: 9, 
    date: '2025-01-10', category: 'Pets', amount: 200, description: 'Veterinary care'
  },
  {
    id: 10, 
    date: '2025-01-15', category: 'Other', amount: 50, description: 'Miscellaneous expenses'
  }
];

let budgets = [
  { 
    id: 1, 
    budgetName: 'holidays budget', 
    monthlyIncome: 50000, 
    startDate: new Date('2024-12-01'), 
    endDate: new Date('2024-12-31') 
  },
  { 
    id: 2, 
    budgetName: 'school budget', 
    monthlyIncome: 40000, 
    startDate: new Date('2024-12-01'), 
    endDate: new Date('2024-12-31') 
  },
  { 
    id: 3, 
    budgetName: 'relationships budget', 
    monthlyIncome: 60000, 
    startDate: new Date('2024-12-01'), 
    endDate: new Date('2024-12-31') 
  },
  {
    id: 4, 
    budgetName: 'football budget', 
    monthlyIncome: 55000, 
    startDate: new Date('2024-12-01'), 
    endDate: new Date('2024-12-31')
  },
  {
    id: 5, 
    budgetName: 'health budget',  
    monthlyIncome: 65000, 
    startDate: new Date('2024-12-01'), 
    endDate: new Date('2024-12-31')
  },
  {
    id: 6, 
    budgetName: 'mybudget', 
    monthlyIncome: 50000, 
    startDate: new Date('2024-12-01'), 
    endDate: new Date('2024-12-31')
  },
  {
    id: 7, 
    budgetName: 'others', 
    monthlyIncome: 60000, 
    startDate: new Date('2024-12-01'), 
    endDate: new Date('2024-12-31')
  },
  {
    id: 8, 
    budgetName: 'mybudget', 
    monthlyIncome: 55000, 
    startDate: new Date('2024-12-01'), 
    endDate: new Date('2024-12-31')
  }
]

app.use(cors());
app.use(bodyParser.json());

// GET all expenses
app.get('/expenses', (req, res) => {
  res.json(expenses);
});

// GET an expense by ID
app.get('/expenses/:id', (req, res) => {
  const expense = expenses.find((e) => e.id == req.params.id);
  if (expense) {
    res.json(expense);
  } else {
    res.status(404).send('Expense not found');
  }
});

// POST to add a new expense
app.post('/expenses', (req, res) => {
  const newExpense = req.body;
  newExpense.id = expenses.length + 1; // Auto-increment the ID
  expenses.push(newExpense);
  res.status(201).json(newExpense);
});

// PUT to update an expense
app.put('/expenses/:id', (req, res) => {
  const expenseIndex = expenses.findIndex((e) => e.id == req.params.id);
  if (expenseIndex !== -1) {
    expenses[expenseIndex] = req.body;
    expenses[expenseIndex].id = req.params.id; // Ensure the ID remains the same
    res.json(expenses[expenseIndex]);
  } else {
    res.status(404).send('Expense not found');
  }
});

// DELETE an expense
app.delete('/expenses/:id', (req, res) => {
  expenses = expenses.filter((e) => e.id != req.params.id);
  res.status(204).send();
});


// **BUDGETS ROUTES**

// To get all budgets
app.get('/budgets', (req, res) => {
  res.json(budgets);
})

// To get a budget by ID
app.get('/budgets/:id', (req, res) => {
  const budget = budgets.find((b) => b.id == req.params.id);
  if (budget) {
    res.json(budget);
  } else {
    res.status(404).send('Budget not found');
  }
})

// To add a new budget

app.post('/budgets', (req, res) => {
  const newBudget = req.body;


  // to ensure the date are currectly updated
  newBudget.startDate = new Date(newBudget.startDate);
  newBudget.endDate = new Date(newBudget.endDate);


  newBudget.id = budgets.length + 1;
  budgets.push(newBudget);
  res.status(201).json(newBudget);
})


// to update and existing budget

app.put('/budgets/:id', (req, res) => {

  const budgetIndex = budgets.findIndex((b) => b.id == req.params.id);

  if (budgetIndex!== -1) {

    // to ensure the date are currectly updated
    budgets[budgetIndex] = req.body;

    budgets[budgetIndex].startDate = new Date(budgets[budgetIndex].startDate);
    budgets[budgetIndex].endDate = new Date(budgets[budgetIndex].endDate);

    budgets[budgetIndex].id = req.params.id;
    res.json(budgets[budgetIndex]);
  } 
  else
   {
    res.status(404).send('Budget not found');
  }
})

// to delete a budget
app.delete('budgets/:id', (req, res) => {
  budgets = budgets.filter((b) => b.id === req.params.id)
  res.status(204).send()
});

// To listen to the server

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
