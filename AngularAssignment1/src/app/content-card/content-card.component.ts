import { Component, OnInit } from '@angular/core';
import { ContentList } from '../helper-files/ContentList';
import { Content} from '../helper-files/content-interfaces';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.css']
})
export class ContentCardComponent implements OnInit {
content: ContentList;
item1: Content = {author: 'grant', body: 'thats me', id: 0, title: 'the chosen one'};
item2: Content = {author: 'dylan', body: 'best friend ', id: 1, title: 'the normal one'};
item3: Content = {author: 'ben', body: 'other friend', id: 2, title: 'the salty one'};


  constructor() {this.content.add(this.item1); this.content.add(this.item2); this.content.add(this.item3); }

  ngOnInit(): void {
  }

}
