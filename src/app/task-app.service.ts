//handles all the HTTP requests as shown in the wk11 inclass
import { Injectable } from '@angular/core';
// import httpclient
import { HttpClient, HttpParams } from '@angular/common/http';
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
    let params = new HttpParams();
    if (filter) {
      Object.keys(filter).forEach(key => {
        params = params.set(key, filter[key]);
      });
    }
    return this.http.post(`${this.apiUrl}/allTasks`, {params: filter});
  }

  getTasksByCategory(category: string): Observable<any> {
    let url = `${this.apiUrl}/allTasks`;
    if (category) {
      url += `?category=${category}`;
    }
    return this.http.get<any[]>(url);
  }


  updateTask(taskId: string, updates:any): Observable<any>{
    return this.http.put(`${this.apiUrl}/tasks/${taskId}`, updates);
  }

}
