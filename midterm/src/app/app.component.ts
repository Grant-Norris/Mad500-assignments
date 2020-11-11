import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'midterm';
}
export interface Course{
  courseCode: string;
  semSeason: string;
  TeacherName: string;
  rating?: string;
}
