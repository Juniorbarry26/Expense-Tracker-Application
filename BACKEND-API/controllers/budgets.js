const budgets = require('../models/budgets')

// Get all expenses
const getAllBudgets = async (req, res) => {
  res.status(200).send('Getting all expenses...');
}

// Get single expense by ID

const getBudgetById = async (req, res) => {
  res.status(200).send('Getting single expense by ID...');
}

// Create a new expense

const createNewBudget = async (req, res) => {
  res.status(200).send('Creating a new expense...');
}

// Delete an expense by ID

const deleteBudgetById = async (req, res) => {
  res.status(200).send('Deleting an expense by ID...');
}

// Update an existing expense

const updateBudgetById = async (req, res) => {
  res.status(200).send('Updating an existing expense...');
}

// Export the functions

module.exports = {
  getAllBudgets,
  getBudgetById,
  createNewBudget,
  deleteBudgetById,
  updateBudgetById,
}