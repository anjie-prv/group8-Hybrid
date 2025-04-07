import { Component, OnInit } from '@angular/core';
// this is where the input of tasks will be  = a form like in  inclass wk11
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TaskAppService } from '../task-app.service';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false,
})
export class Tab1Page implements OnInit {

  taskForm!: FormGroup;


  constructor(private fb: FormBuilder, private taskService: TaskAppService) {}
    
  
ngOnInit() {
  this.taskForm = this.fb.group({
    title: ['', Validators.required],
    description: ['', Validators.required],
    category: ['school', Validators.required]
  });
}

submitTask() {
  if (this.taskForm.valid) {
    const newTask = {
      title: this.taskForm.value.title,
      description: this.taskForm.value.description,
      category: this.taskForm.value.category,
      completed: false
    };

      console.log('Submitting task:', newTask);


    this.taskService.createTask(newTask).subscribe(
      response => {
        console.log('Task added:', response);
        this.taskForm.reset({ category: 'school' }); // reset form with default category
      },
      error => {
        console.error('Error adding task', error);
      }
    );
  } else {
    console.warn('Form is invalid');
  }
}
}























//     ngOnInit() {
//     this.taskForm = this.fb.group({
//       title: ['', Validators.required],
//       description: [''],
//       category: ['', Validators.required],
//     });
//     }

//   submitTask(){
//     if (this.taskForm.valid) {
//       const newTask = {
//         title: this.taskForm.get('title')?.value,
//         description: this.taskForm.get('description')?.value,
//         category: this.taskForm.get('category')?.value,
//         completed: false
//       };

//       this.taskService.createTask(newTask).subscribe(
//         response => {
//           console.log('Task added:', response);
//           this.taskForm.reset(); // reset form after submit
//         },
//         error => {
//           console.error('Error adding task', error);
//         }
//       );
//     }
//   }
// }

