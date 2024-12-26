import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './components/accounts/sign-up/sign-up.component';
import { LoginComponent } from './components/accounts/login/login.component';
import { HeroComponent } from './components/hero/hero.component';
import { AddExpenseComponent } from './components/Expenses/add-expense/add-expense.component';
import { ListExpenseComponent } from './components/Expenses/list-expense/list-expense.component';
import { EditExpenseComponent } from './components/Expenses/edit-expense/edit-expense.component';
import { AddBudgetComponent } from './components/Budgets/add-budget/add-budget.component';
import { EditBudgetComponent } from './components/Budgets/edit-budget/edit-budget.component';
import { ListBudgetComponent } from './components/Budgets/list-budget/list-budget.component';
import { ReportComponent } from './components/Reports/report/report.component';
import { InsightComponent } from './components/Insights/insight/insight.component';
import { BudgetDetailsComponent } from './components/Budgets/budget-details/budget-details.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: '', component: HeroComponent },
  { path: 'add-expense', component: AddExpenseComponent},
  { path: 'list-expense', component: ListExpenseComponent},
  {path: 'edit-expense', component: EditExpenseComponent},
  { path: 'add-budget', component: AddBudgetComponent},
  { path: 'edit-budget', component: EditBudgetComponent},
  { path: 'list-budget', component: ListBudgetComponent},
  { path: 'report', component: ReportComponent},
  { path: 'insight', component: InsightComponent},
  { path: 'budget-details', component: BudgetDetailsComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
