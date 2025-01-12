const express = require('express');
const router = express.Router();

const {
   getAllBudgets,
   getBudget,
   createBudget,
   updateBudget,
   deleteBudget, 
} = require('../controllers/budgets');

router.route('/').get(getAllBudgets).post(createBudget);
router.route('/:id').get(getBudget).put(updateBudget).delete(deleteBudget);


module.exports = router;