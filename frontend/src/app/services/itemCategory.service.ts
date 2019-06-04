import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ItemCategory } from '../models/itemCategory';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ItemCategoryService {

  private apiUrl: string;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(
    private httpClient: HttpClient,
  ) {
    this.apiUrl = environment.apiUrl;

  }

  public createItemCategory(itemCategory: ItemCategory) {
    return this.httpClient.post(this.apiUrl+'itemcategory/', itemCategory, this.httpOptions);
  }
    
  public updateItemCategory(itemCategory: ItemCategory) {
    return this.httpClient.put(this.apiUrl+'itemcategory/'+itemCategory.idItemCategory+'/', itemCategory,this.httpOptions);
  }

  public deleteItemCategory(id: number) { 
    return this.httpClient.delete(this.apiUrl+'itemcategory/'+id+'/', this.httpOptions);
  }

  public getItemCategories() { 
    return this.httpClient.get<ItemCategory[]>(this.apiUrl+'itemcategory', this.httpOptions);
  }
}
