//handles all the HTTP requests as shown in the wk11 inclass
import { Injectable } from '@angular/core';
// import httpclient and behavioursubject 
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TaskAppService {

 //backend endpoint here
  private apiUrl = 'http://127.0.0.1:8887';


  //task list being held here ..... private taskList = new BehaviorSubject<any[]>([]);
  private taskList = new BehaviorSubject<any[]>([]); 
  


  //subscribes to component = taskList.asObservable 

gr8tasks = this.taskList.asObservable();

  constructor(private http: HttpClient) { }

    //fetch tasks from server 

    fetchTasks(){
      this.http.get<any[]>(this.apiUrl).subscribe(data => {
        this.taskList.next(data);
      });
    }

  //save new task

  addTask (task: any){
    return this.http.post(this.apiUrl, task);
  }

  //update task status = completed to true 

  updateTask(id: string, updates:any){
    return this.http.put(`${this.apiUrl}/${id}`, updates);
  }

  //delete task (do we want to do delete?)

  




}
