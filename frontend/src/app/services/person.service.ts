import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Person } from '../models/person';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  private apiUrl: string;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private httpClient: HttpClient) {
    this.apiUrl = environment.apiUrl;
   }
   public createPersons(persons: Person) {
    return this.httpClient.post(this.apiUrl+'persons/', persons, this.httpOptions);
  }
    
  public updatePersons(persons: Person) {
    return this.httpClient.put(this.apiUrl+'persons/'+persons.person_id+'/', persons,this.httpOptions);
  }

  public deletePersons(person_id: number) { 
    return this.httpClient.delete(this.apiUrl+'persons/'+person_id+'/', this.httpOptions);
  }

  public getPersons() { 
    return this.httpClient.get<Person[]>(this.apiUrl+'persons/', this.httpOptions);
  }
  
}
