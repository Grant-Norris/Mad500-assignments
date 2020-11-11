import { Component, Input , OnInit } from '@angular/core';
import { Course } from '../app.component';

@Component({
  selector: 'app-class-card',
  templateUrl: './class-card.component.html',
  styleUrls: ['./class-card.component.css']
})
export class ClassCardComponent implements OnInit {
  @Input() course: Course;
  constructor() { }

  ngOnInit(): void {
  }

}
