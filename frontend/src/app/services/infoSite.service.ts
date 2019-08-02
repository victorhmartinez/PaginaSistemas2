import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { InfoSite } from '../models/infoSite';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InfoSiteService {
  private apiUrl: string;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient,
    ) { 
      this.apiUrl = environment.apiUrl;
    }
    public createInfoSite(infoSite: InfoSite) {
      return this.httpClient.post(this.apiUrl+'infoSite/', infoSite, this.httpOptions);
    }

    public updateInfoSite(infoSite: InfoSite) {
      return this.httpClient.put(this.apiUrl+'infoSite/'+infoSite.info_site_id+'/', infoSite,this.httpOptions);
    }

    public deleteInfoSite(id: number) { 
      return this.httpClient.delete(this.apiUrl+'infoSite/'+id+'/', this.httpOptions);
    }

    public getInfoSite() { 
      return this.httpClient.get<InfoSite[]>(this.apiUrl+'infoSite/', this.httpOptions);
    }
}