import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { SignUpComponent } from './components/accounts/sign-up/sign-up.component';
import { LoginComponent } from './components/accounts/login/login.component';
import { AddExpenseComponent } from './components/Expenses/add-expense/add-expense.component';
import { ListExpenseComponent } from './components/Expenses/list-expense/list-expense.component';
import { EditExpenseComponent } from './components/Expenses/edit-expense/edit-expense.component';
import { AddBudgetComponent } from './components/Budgets/add-budget/add-budget.component';
import { EditBudgetComponent } from './components/Budgets/edit-budget/edit-budget.component';
import { ListBudgetComponent } from './components/Budgets/list-budget/list-budget.component';
import { ReportComponent } from './components/Reports/report/report.component';
import { InsightComponent } from './components/Insights/insight/insight.component';
import { BudgetDetailsComponent } from './components/Budgets/budget-details/budget-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroComponent,
    SignUpComponent,
    LoginComponent,
    AddExpenseComponent,
    ListExpenseComponent,
    EditExpenseComponent,
    AddBudgetComponent,
    EditBudgetComponent,
    ListBudgetComponent,
    ReportComponent,
    InsightComponent,
    BudgetDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
