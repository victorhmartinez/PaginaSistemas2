import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Content } from '../models/content';


@Injectable({
  providedIn: 'root'
})
export class ContentService {

  private apiUrl: string;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    }                                                                                       )
  }
  constructor(private httpClient: HttpClient,) { 
    this.apiUrl = environment.apiUrl;

  }
  public createContent(content: Content) {
    return this.httpClient.post(this.apiUrl+'content/', content, this.httpOptions);
  }
    
  public updateContent(content: Content) {
    return this.httpClient.put(this.apiUrl+'content/'+content.content_id+'/', content,this.httpOptions);
  }

  public deleteContent(id: number) { 
    return this.httpClient.delete(this.apiUrl+'content/'+id+'/', this.httpOptions);
  }

  public getContent() { 
    return this.httpClient.get<Content[]>(this.apiUrl+'content/', this.httpOptions);
  }
}
