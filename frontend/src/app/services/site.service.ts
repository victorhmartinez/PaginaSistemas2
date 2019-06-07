import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Site } from '../models/site';

@Injectable({
  providedIn: 'root'
})
export class SiteService {
  private apiUrl: string;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) {
    this.apiUrl = environment.apiUrl;
  }
  public createSite(site: Site) {
    return this.httpClient.post(this.apiUrl+'site/', site, this.httpOptions);
  }
    
  public updateSite(site: Site) {
    return this.httpClient.put(this.apiUrl+'site/'+site.site_id+'/', site,this.httpOptions);
  }

  public deleteSite(site_id: number) { 
    return this.httpClient.delete(this.apiUrl+'site/'+site_id+'/', this.httpOptions);
  }

  public getSite() { 
    return this.httpClient.get<Site[]>(this.apiUrl+'site/', this.httpOptions);
  }
  
}
