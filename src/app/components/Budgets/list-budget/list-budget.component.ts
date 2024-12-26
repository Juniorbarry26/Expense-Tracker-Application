import { Component,OnInit } from '@angular/core';
import { BudgetService } from '../../../services/budget.service';
import { Budget } from '../../../models/budget';

@Component({
  selector: 'app-list-budget',
  templateUrl: './list-budget.component.html',
  styleUrl: './list-budget.component.css'
})
export class ListBudgetComponent implements OnInit{
  // budgets = [
  //   {id: 1, budgetName: 'mybudget', monthlyIncome: 50000, startDate: '07-12-23', endDate: '07-3-24'},
  //   {id: 2, budgetName: 'mybudget', monthlyIncome: 40000, startDate: '07-12-23', endDate: '07-3-24'},
  //   {id: 3, budgetName: 'mybudget', monthlyIncome: 60000, startDate: '07-12-23', endDate: '07-3-24'},
  //   {id: 4, budgetName: 'mybudget', monthlyIncome: 30000, startDate: '07-12-23', endDate: '07-3-24'},
  // ]
  budgets: Budget[] = [];


  constructor(private budgetService: BudgetService) {}
  ngOnInit() {}

  loadBudgets(): void {
    this.budgetService.getAllBudgets().subscribe((data) => {
      this.budgets = data;
    })
  }


  // To Add new Budgets
  addBudget(budget: Budget): void{
    // Logic to add new Budgets
    this.budgetService.addBudget(budget).subscribe((newBudget: Budget) => {
      this.budgets.push(newBudget); // Add the new budget to the local budgets array
    });
  }

  // To edit an existing budget
  editBudget(budget: Budget): void {
    this.budgetService.updateBudget(budget).subscribe((updatedBudget: Budget) => {
      // Find the index of the updated budget and replace it in the list
      const index = this.budgets.findIndex(b => b.id === updatedBudget.id);
      if (index!== -1) {
        this.budgets[index] = updatedBudget; // Update the budget in the array
      }
    })
  }

  // To delete a budget
  deleteBudget(budget: Budget): void {
    if (confirm(`Are you sure you want to delete the budget: ${budget.budgetName}?`)) {
      this.budgetService.deleteBudget(budget.id).subscribe(() => {
        this.budgets = this.budgets.filter(b => b.id !== budget.id);
      });
    }
  }
  
}
