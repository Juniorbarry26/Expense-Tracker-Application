import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Expense } from '../models/expense';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {

  private apiUrl = 'http://localhost:3000/api/v1/expense'; // Backend URL


  constructor(private http: HttpClient) { }


  // get all expense (GET)

  getAllExpenses(): Observable<Expense[]> {
    return this.http.get<Expense[]>(this.apiUrl);
  }
  // get expense by id (GET)
  getExpenseById(id: number): Observable<Expense> {
    return this.http.get<Expense>(`${this.apiUrl}/${id}`);
  }

  // Add new Expense (POST)
  addExpense(expense: Expense): Observable<Expense> {
    return this.http.post<Expense>(this.apiUrl, expense);
  }

  // update an existing expense (PUT)
  updateExpense(expense: Expense): Observable<Expense> {
    return this.http.put<Expense>(`${this.apiUrl}/${expense.id}`, expense);
  }

  // delete an existing expense (DELETE) 
  deleteExpense(id: number): Observable<{}> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
