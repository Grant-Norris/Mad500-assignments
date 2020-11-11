import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { Content } from '../helper-files/content-interfaces';

@Component({
  selector: 'app-create-component',
  templateUrl: './create-component.component.html',
  styleUrls: ['./create-component.component.css']
})
export class CreateComponentComponent implements OnInit {

  @Output() newPersonEvent = new EventEmitter<Content>();
  newContent: Content;
  constructor() {
    this.newContent = {
      author: '',
      body: '',
      id: 0,
      imageUrl: '',
      tags: [''],
      title: '',
      type: ''
    };
  }

  ngOnInit(): void {
    this.newPersonEvent.emit(this.newContent);
  }
  addContent(): void{
    const ourPromise = new Promise((success, fail) => {
      let test = true;
      if (this.newContent.title === '' || this.newContent.author === '' || this.newContent.body === ''){
        test = false;
      }
      if (test){
        success('It worked!');
        this.newContent.id = +this.newContent.id;
        this.newPersonEvent.emit(this.newContent);
        console.log('Event Emitted!', this.newContent.title);
      }
      else{
        fail('it failed');
      }
    });
    ourPromise.then((successResult: string) => {
      console.log('Success! ', successResult);
    }).catch((failResult: string) => console.log('Failure!: ', failResult));
  }

}
