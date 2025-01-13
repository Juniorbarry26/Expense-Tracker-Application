const express = require('express');
const router = express.Router();

const { 
  getAllExpenses,
  getExpenseById,
  createNewExpense,
  updateExpenseById,
  deleteExpenseById,
} = require('../controllers/expenses')

router.route('/').get(getAllExpenses).post(createNewExpense)
router.route('/:id').get(getExpenseById).patch(updateExpenseById).delete(deleteExpenseById);

module.exports = router;