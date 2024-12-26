import { Component, OnInit } from '@angular/core';
import { ExpenseService } from '../../../services/expense.service';
import { Expense } from '../../../models/expense';

@Component({
  selector: 'app-list-expense',
  templateUrl: './list-expense.component.html',
  styleUrls: ['./list-expense.component.css']
})
export class ListExpenseComponent implements OnInit {
  expenses: Expense[] = []; // Declare expenses array

  // expenses = [
  //   { id: 1 ,date: '2024-12-01', category: 'Food', amount: 50 , description: 'Pizza'},
  //   { id: 2 ,date: '2024-12-05', category: 'Transport', amount: 20, description: 'Travelling' },
  //   { id: 3 ,date: '2024-12-10', category: 'Utilities', amount: 100, description: 'Needs' },
  // ];

  constructor(private expenseService: ExpenseService) {}

  ngOnInit(): void {
    this.loadExpenses(); // To fetch expenses when the component initializes
  }

  // Load the expenses from the backend
  loadExpenses(): void {
    this.expenseService.getAllExpenses().subscribe((data: Expense[]) => {
      console.log('Expense loaded successfully', data);
      this.expenses = data; 
    });
  }

  // Add a new expense
  addExpense(expense: Expense): void {
    this.expenseService.addExpense(expense).subscribe((newExpense: Expense) => {
      this.expenses.push(newExpense); // Its going to add the new expense into the expense array
    });
  }

  // Edit an existing expense
  editExpense(expense: Expense): void {
    this.expenseService.updateExpense(expense).subscribe((updatedExpense: Expense) => {

      // Find the index of the updated expense and replace it in the list
      const index = this.expenses.findIndex(e => e.id === updatedExpense.id);
      if (index !== -1) {
        this.expenses[index] = updatedExpense; // Update the expense in the array
      }
    });
  }

  // Delete an expense
  deleteExpense(expense: Expense): void {
    this.expenseService.deleteExpense(expense.id).subscribe(() => {
      
      // Remove the deleted expense from the expenses array
      this.expenses = this.expenses.filter(e => e.id !== expense.id);     

    });
  }
}
