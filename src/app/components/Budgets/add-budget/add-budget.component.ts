import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BudgetService } from '../../../services/budget.service';
import { Budget } from '../../../models/budget';

@Component({
  selector: 'app-add-budget',
  templateUrl: './add-budget.component.html',
  styleUrls: ['./add-budget.component.css']
})
export class AddBudgetComponent {
  budget: Budget = {
    _id: '',
    budgetName: '',
    monthlyIncome: 0,
    startDate: new Date(),
    endDate: new Date(),
  };

  constructor(private budgetService: BudgetService, private router: Router) {}

  addBudget(): void {
    this.budgetService.addBudget(this.budget).subscribe(
      (newBudget) => {
        alert('Budget added successfully!');
        this.router.navigate(['/budgets']); // Navigate back to the list after adding
      },
      (error) => console.error('Error adding budget:', error)
    );
  }
}
