const Budget = require('../models/budgets');

// Get all budgets
const getAllBudgets = async (req, res) => {
  try {
    const budgets = await Budget.find({});
    res.status(200).json({ budgets });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

// Get single budget by ID
const getBudgetById = async (req, res) => {
  try {
    const budget = await Budget.findById(req.params.id);
    if (!budget) {
      return res.status(404).json({ message: 'Budget not found' });
    }
    res.status(200).json({ budget });
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving the budget.' });
  }
};

// Create a new budget
const createNewBudget = async (req, res) => {
  try {
    const { budgetName, monthlyIncome, startDate, endDate } = req.body;
    const newBudget = new Budget({ budgetName, monthlyIncome, startDate, endDate });
    await newBudget.save();
    res.status(201).json({ budget: newBudget });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a budget by ID
const deleteBudgetById = async (req, res) => {
  try {
    const deletedBudget = await Budget.findByIdAndDelete(req.params.id);
    if (!deletedBudget) {
      return res.status(404).json({ message: 'Budget not found' });
    }
    res.status(200).json({ message: 'Budget deleted successfully.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

// Update an existing budget
const updateBudgetById = async (req, res) => {
  try {
    const { budgetName, monthlyIncome, startDate, endDate } = req.body;
    const updatedBudget = await Budget.findByIdAndUpdate(
      req.params.id,
      { budgetName, monthlyIncome, startDate, endDate },
      { new: true, runValidators: true }
    );
    if (!updatedBudget) {
      return res.status(404).json({ message: 'Budget not found' });
    }
    res.status(200).json({ budget: updatedBudget });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

// Export the functions
module.exports = {
  getAllBudgets,
  getBudgetById,
  createNewBudget,
  deleteBudgetById,
  updateBudgetById,
};
