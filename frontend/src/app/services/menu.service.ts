import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Menu } from '../models/menu';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class MenuService {
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
    public createMenu(menu: Menu) {
      return this.httpClient.post(this.apiUrl+'menu/', menu, this.httpOptions);
    }

    public updateMenu(menu: Menu) {
      return this.httpClient.put(this.apiUrl+'menu/'+menu.menu_id+'/', menu,this.httpOptions);
    }

    public deleteMenu(id: number) { 
      return this.httpClient.delete(this.apiUrl+'menu/'+id+'/', this.httpOptions);
    }

    public getMenu() { 
      return this.httpClient.get<Menu[]>(this.apiUrl+'menu/', this.httpOptions);
    }
}

