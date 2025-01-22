import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BudgetService } from '../../../services/budget.service';
import { Budget } from '../../../models/budget';

@Component({
  selector: 'app-edit-budget',
  templateUrl: './edit-budget.component.html',
  styleUrls: ['./edit-budget.component.css']
})
export class EditBudgetComponent implements OnInit {
  budget: Budget = {
    _id: '',
    budgetName: '',
    monthlyIncome: 0,
    startDate: new Date(),
    endDate: new Date()
  };

  constructor(
    private budgetService: BudgetService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const _id = +this.route.snapshot.paramMap.get('id')!;
    this.budgetService.getBudgetById(_id.toString()).subscribe(
      (data) => {
        this.budget = data;
      },
      (error) => console.error('Error fetching budget:', error)
    );
  }

  editBudget(): void {
    this.budgetService.updateBudget(this.budget).subscribe(
      () => {
        alert('Budget updated successfully!');
        this.router.navigate(['/budgets']); // Navigate back to the list after updating
      },
      (error) => console.error('Error updating budget:', error)
    );
  }
}
