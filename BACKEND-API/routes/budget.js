const express = require('express');
const router = express.Router();
const { 
  getAllBudgets,
  getBudgetById,
  createNewBudget,
  updateBudgetById,
  deleteBudgetById 
} = require('../controllers/budgets');

router.route('/').get(getAllBudgets).post(createNewBudget);
router.route('/:id').get(getBudgetById).patch(updateBudgetById).delete(deleteBudgetById);

module.exports = router;