import { Injectable } from '@angular/core';
import { Budget } from '../models/budget';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BudgetService {

  private apiUrl  = 'http://localhost:3000/api/v1/budget';  // Backend URL

  constructor(private http: HttpClient) { }

  // to get all the budgets(GET request)
  getAllBudgets(): Observable<Budget[]> {
    return this.http.get<Budget[]>(this.apiUrl);
    
  }
  // to get a budget by id(GET request)
  getBudgetById(_id: string): Observable<Budget> {
    return this.http.get<Budget>(`${this.apiUrl}/${_id}`)
  }
  // to add a new budget(POST request)
  addBudget(budget: Budget): Observable<Budget> {
    return this.http.post<Budget>(this.apiUrl, budget);
  }

  // to update a new budget(PUT request)
  updateBudget(budget: Budget): Observable<Budget> {
    return this.http.put<Budget>(`${this.apiUrl}/${budget._id}`, budget);
  }

  // to delete a budget(DELETE request)
  deleteBudget(_id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${_id}`);
  }

}
