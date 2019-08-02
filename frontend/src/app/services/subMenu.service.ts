import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SubMenu } from '../models/subMenu';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SubMenuService {
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
    public createSubMenu(subMenu: SubMenu) {
      return this.httpClient.post(this.apiUrl+'subMenu/', subMenu, this.httpOptions);
    }

    public updateSubMenu(subMenu: SubMenu) {
      return this.httpClient.put(this.apiUrl+'subMenu/'+subMenu.idSubMenu+'/', subMenu,this.httpOptions);
    }

    public deleteSubMenu(id: number) { 
      return this.httpClient.delete(this.apiUrl+'subMenu/'+id+'/', this.httpOptions);
    }

    public getSubMenu() { 
      return this.httpClient.get<SubMenu[]>(this.apiUrl+'subMenu/', this.httpOptions);
    }
}
