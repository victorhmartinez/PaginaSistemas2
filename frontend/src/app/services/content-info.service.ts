import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ContentInfo } from '../models/content-info';


@Injectable({
  providedIn: 'root'
})
export class ContentInfoService {
  private apiUrl: string;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    }  )
  }
  constructor(private httpClient: HttpClient) {
    this.apiUrl = environment.apiUrl;
   }
   public createContentInfo(contentInfo: ContentInfo) {
    return this.httpClient.post(this.apiUrl+'contentInfo/', contentInfo, this.httpOptions);
  }
    
  public updateContentInfo(contentInfo: ContentInfo) {
    return this.httpClient.put(this.apiUrl+'contentInfo/'+contentInfo.content_info_id+'/', contentInfo,this.httpOptions);
  }

  public deleteContentInfo(id: number) { 
    return this.httpClient.delete(this.apiUrl+'contentInfo/'+id+'/', this.httpOptions);
  }

  public getContentInfo() { 
    return this.httpClient.get<ContentInfo[]>(this.apiUrl+'contentInfo/', this.httpOptions);
  }
}


