const mongoose = require('mongoose');

const budgetSchema = new mongoose.Schema({
  budgetName: {
    type: String,
    required: true,
  },
  monthlyIncome: {
    type: Number,
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
});

const Budget = mongoose.model('Budget', budgetSchema);

module.exports = Budget;
