const expenses = require('../models/expenses');

// Get all expenses
const getAllExpenses = async (req, res) => {
  const expense = await expenses.find({})
  res.status(200).json({expense: expense});
}

// Get single expense by ID

const getExpenseById = async (req, res) => {
  res.status(200).send('Getting single expense by ID...');
}

// Create a new expense

const createNewExpense = async (req, res) => {
  res.status(200).send('Creating a new expense...');
}

// Delete an expense by ID

const deleteExpenseById = async (req, res) => {
  res.status(200).send('Deleting an expense by ID...');
}

// Update an existing expense

const updateExpenseById = async (req, res) => {
  res.status(200).send('Updating an existing expense...');
}

// Export the functions

module.exports = {
  getAllExpenses,
  getExpenseById,
  createNewExpense,
  deleteExpenseById,
  updateExpenseById,
}