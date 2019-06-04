import { Injectable } from '@angular/core';
import { HttpHeaders,HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { Personcontacts } from '../models/personcontacts';

@Injectable({
  providedIn: 'root'
})
export class PersoncontactsService {
  private apiUrl: string;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private httpClient: HttpClient) {
    this.apiUrl = environment.apiUrl;
   }
   public createpersonsContact(personsContact: Personcontacts) {
    return this.httpClient.post(this.apiUrl+'personsContact/', personsContact, this.httpOptions);
  }
    
  public updatePersonsContact(personsContact: Personcontacts) {
    return this.httpClient.put(this.apiUrl+'personsContact/'+personsContact.contact_info_id+'/', personsContact,this.httpOptions);
  }

  public deletePersonsContact(id: number) { 
    return this.httpClient.delete(this.apiUrl+'personsContact/'+id+'/', this.httpOptions);
  }

  public getPersonsContact() { 
    return this.httpClient.get<Personcontacts[]>(this.apiUrl+'personsContact/', this.httpOptions);
  }
}
