import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { PersonDepartament } from '../models/person-departament';
import { ItemCategory } from '../models/itemCategory';

@Injectable({
  providedIn: 'root'
})
export class UnirversityCareerService {
  private apiUrl: string;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })

  }
  constructor(private httpClient: HttpClient,) {
    this.apiUrl = environment.apiUrl;
   }
   public getUniversityCareer() { 
    return this.httpClient.get<ItemCategory[]>(this.apiUrl+'ItemCategoryTitulacion/', this.httpOptions);
  }
  public getTypeEvent() { 
    return this.httpClient.get<ItemCategory[]>(this.apiUrl+'itemCategoryTypeEvent/', this.httpOptions);
  }
  public getAcademicPeriod() { 
    return this.httpClient.get<ItemCategory[]>(this.apiUrl+'itemCategoryAcademicPeriod/', this.httpOptions);
  }
}
