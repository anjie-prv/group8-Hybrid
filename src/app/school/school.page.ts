import { Component, OnInit } from '@angular/core';


// this is where the service is being subscribed to grab the gr8categoryhoice = school 
//completed and not completed. 

@Component({
  selector: 'app-school',
  templateUrl: './school.page.html',
  styleUrls: ['./school.page.scss'],
  standalone: false,
})
export class SchoolPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
