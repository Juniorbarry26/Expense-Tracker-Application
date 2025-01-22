import { Component } from '@angular/core';
import { Expense } from '../../../models/expense';
import { ExpenseService } from '../../../services/expense.service';

@Component({
  selector: 'app-add-expense',
  templateUrl: './add-expense.component.html',
  styleUrls: ['./add-expense.component.css']
})
export class AddExpenseComponent  {
  expense: Expense = {
    _id: '',
    date: '',
    category: '',
    amount: 0,
    description: ''
  }

  constructor(private expenseService: ExpenseService) { }


  // To Add new Expense
  addExpense(): void {
    // Logic to add new Expense
    if(this.expense._id && this.expense.date && this.expense.category && this.expense.amount && this.expense.description) {
      this.expenseService.addExpense(this.expense).subscribe(() => {
        console.log('Expense added successfully');
        // Reset the form
        this.expense = {
          _id: '',
          date: '',
          category: '',
          amount: 0,
          description: ''
        }
      });
    } else {
      alert('Please enter a valid expense details')
    }
  }


}
