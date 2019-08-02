import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { PreRequirements } from '../models/pre-requirements';

@Injectable({
  providedIn: 'root'
})
export class PreRequirementsService {
  private apiUrl: string;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private httpClient: HttpClient) { 
    this.apiUrl = environment.apiUrl;
  }
  public createpreRequirements(preRequirements: PreRequirements) {
    return this.httpClient.post(this.apiUrl+'preRequirements/', preRequirements, this.httpOptions);
  }
    
  public updatepreRequirements(preRequirements: PreRequirements) {
    return this.httpClient.put(this.apiUrl+'preRequirements/'+preRequirements.pre_requirements_id+'/', preRequirements,this.httpOptions);
  }

  public deletepreRequirements(id: number) { 
    return this.httpClient.delete(this.apiUrl+'preRequirements/'+id+'/', this.httpOptions);
  }

  public getpreRequirements() { 
    return this.httpClient.get<PreRequirements[]>(this.apiUrl+'preRequirements/', this.httpOptions);
  }
}
