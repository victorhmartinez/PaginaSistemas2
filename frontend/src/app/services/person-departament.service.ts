import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { PersonDepartament } from '../models/person-departament';


@Injectable({
  providedIn: 'root'
})
export class PersonDepartamentService {
  private apiUrl: string;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private httpClient: HttpClient) { 
    this.apiUrl = environment.apiUrl;
  }
  public createpersonsDepartament(personsdepartament: PersonDepartament) {
    return this.httpClient.post(this.apiUrl+'personsDepartments/', personsdepartament, this.httpOptions);
  }
    
  public updatePersonsDepartament(personsdepartament: PersonDepartament) {
    return this.httpClient.put(this.apiUrl+'personsDepartments/'+personsdepartament.persons_departaments_id+'/', personsdepartament,this.httpOptions);
  }

  public deletePersonsDepartament(id: number) { 
    return this.httpClient.delete(this.apiUrl+'personsDepartments/'+id+'/', this.httpOptions);
  }

  public getPersonsDepartament() { 
    return this.httpClient.get<PersonDepartament[]>(this.apiUrl+'personsDepartments/', this.httpOptions);
  }
}

