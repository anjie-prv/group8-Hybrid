//handles all the HTTP requests as shown in the wk11 inclass
import { Injectable } from '@angular/core';
// import httpclient
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TaskAppService {

 //backend endpoint here
  private apiUrl = 'http://127.0.0.1:8887';


  constructor(private http: HttpClient) {}

    //methods 

  createTask(taskData: any): Observable<any>{
    return this.http.post(`${this.apiUrl}/tasks`, taskData);
  }

  getTasks(filter?: any): Observable<any>{
    return this.http.post(`${this.apiUrl}/allTasks`, {params: filter});
  }

  getTasksByCategory(category: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}?category=${category}`);
  }

  updateTask(taskId: string, updates:any): Observable<any>{
    return this.http.put(`${this.apiUrl}/${taskId}`, updates);
  }

}
