import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PersonsRole } from '../models/personsRole';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ItemCategoryRoleService {
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
  
  public getPersonsRole() { 
    return this.httpClient.get<PersonsRole[]>(this.apiUrl+'itemcategoryRol/', this.httpOptions);
  }
}
