import { Injectable } from '@angular/core';
import { Content } from './content-interfaces';
import {CONTENTList} from '../contentDB';
import { MessageService } from '../message.service';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  constructor(private messageService: MessageService) { }
  getContentObs(): Observable<Content[]>{ // asynchronous
    this.messageService.add('Content: fetched Content');
    return of(CONTENTList);
  }
}
