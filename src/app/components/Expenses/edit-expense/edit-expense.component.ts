import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ExpenseService } from '../../../services/expense.service';
import { Expense } from '../../../models/expense';

@Component({
  selector: 'app-edit-expense',
  templateUrl: './edit-expense.component.html',
  styleUrls: ['./edit-expense.component.css']
})
export class EditExpenseComponent implements OnInit {
  expense: Expense = {
    id: 0,
    date: '',
    category: '',
    amount: 0,
    description: ''
  };

  constructor(
    private expenseService: ExpenseService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.expenseService.getExpenseById(id).subscribe(
      (response) => {
        this.expense = response;
      },
      (error) => {
        console.error('Error fetching expense:', error);
      }
    );
  }

  updateExpense(): void {
    if (this.expense.date && this.expense.category && this.expense.amount && this.expense.description) {
      this.expenseService.updateExpense(this.expense).subscribe(
        (response) => {
          console.log('Expense updated successfully:', response);
          this.router.navigate(['/expenses']);
        },
        (error) => {
          console.error('Error updating expense:', error);
        }
      );
    } else {
      alert('Please fill all the fields.');
    }
  }
}
