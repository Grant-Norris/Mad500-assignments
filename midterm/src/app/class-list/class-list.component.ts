import { Component, OnInit } from '@angular/core';
import { Course } from '../app.component';

@Component({
  selector: 'app-class-list',
  templateUrl: './class-list.component.html',
  styleUrls: ['./class-list.component.css']
})
export class ClassListComponent implements OnInit {
  courseList: Course[];
  private code: string;
  private season: string;
  private teacherName: string;
  private Rating?: string;

  constructor() { this.courseList = [];
  }

  ngOnInit(): void {
  }
  add(): void{
    this.code = (document.getElementById('searchBar') as HTMLInputElement).value;
    this.season = (document.getElementById('searchBar') as HTMLInputElement).value;
    this.teacherName = (document.getElementById('searchBar') as HTMLInputElement).value;
    this.Rating = (document.getElementById('searchBar') as HTMLInputElement).value;
    this.courseList.push({courseCode: this.code, semSeason: this.season, TeacherName: this.teacherName, rating: this.Rating});
  }

}
