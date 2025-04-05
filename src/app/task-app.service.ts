//handles all the HTTP requests as shown in the wk11 inclass


import { Injectable } from '@angular/core';
// import httpclient and behavioursubject 

@Injectable({
  providedIn: 'root'
})
export class TaskAppService {

 //backend endpoint here
  //task list being held here ..... private taskList = new BehaviorSubject<any[]>([]);

  //subscribes to component = taskList.asObservable 



  constructor() { }

    //fetch task from server 

  //save new task

  //update task status = completed to true 

  //delete task (do we want to do delete?)





}
