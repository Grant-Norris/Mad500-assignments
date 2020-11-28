import { Injectable } from '@angular/core';
import { Content } from './content-interfaces';
import {CONTENTList} from '../contentDB';
import { MessageService } from '../message.service';
import {Observable, of} from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContentService {
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-type':
        'application/json' })
  };
  constructor(private messageService: MessageService, private http: HttpClient) { }
  getContentObs(): Observable<Content[]>{ // asynchronous
    this.messageService.add('Content: fetched Content');
    return of(CONTENTList);
  }
  getContent(): Observable<Content[]>{
    return this.http.get<Content[]>('api/content');
  }
  addContent(content: Content): Observable<Content>{
    return this.http.post<Content>('api/content', content,
      this.httpOptions);
  }
  updateGame(content: Content): Observable<any>{
    return this.http.put<Content>('api/content', content, this.httpOptions);
  }
}
