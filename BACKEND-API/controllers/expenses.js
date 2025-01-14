const Expense = require('../models/expenses');

// Get all expenses
const getAllExpenses = async (req, res) => {
  try {
    const expenses = await Expense.find({});
    res.status(200).json({ expenses });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to retrieve expenses.' });
  }
};

// Get single expense by ID
const getExpenseById = async (req, res) => {
  try {
    const expense = await Expense.findById(req.params.id);
    if (!expense) {
      return res.status(404).json({ message: 'Expense not found.' });
    }
    res.status(200).json({ expense });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error retrieving the expense.' });
  }
};

// Create a new expense
const createNewExpense = async (req, res) => {
  try {
    const { title, amount, category, date } = req.body;
    const newExpense = new Expense({ title, amount, category, date });
    await newExpense.save();
    res.status(201).json(newExpense);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

// Delete an expense by ID
const deleteExpenseById = async (req, res) => {
  try {
    const deletedExpense = await Expense.findByIdAndDelete(req.params.id);
    if (!deletedExpense) {
      return res.status(404).json({ message: 'Expense not found.' });
    }
    res.status(200).json({ message: 'Expense deleted successfully.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error deleting expense.' });
  }
};

// Update an existing expense
const updateExpenseById = async (req, res) => {
  try {
    const { title, amount, category, date } = req.body;
    const updatedExpense = await Expense.findByIdAndUpdate(
      req.params.id,
      { title, amount, category, date },
      { new: true, runValidators: true }
    );
    if (!updatedExpense) {
      return res.status(404).json({ message: 'Expense not found.' });
    }
    res.status(200).json({ expense: updatedExpense });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

// Export the functions
module.exports = {
  getAllExpenses,
  getExpenseById,
  createNewExpense,
  deleteExpenseById,
  updateExpenseById,
};
