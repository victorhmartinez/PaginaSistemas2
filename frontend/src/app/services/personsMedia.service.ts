import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PersonsMedia } from '../models/personsMedia';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PersonsMediaService {
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
    public createPersonsMedia(personsMedia: PersonsMedia) {
      return this.httpClient.post(this.apiUrl+'personsMedia/', personsMedia, this.httpOptions);
    }

    public updatePersonsMedia(personsMedia: PersonsMedia) {
      return this.httpClient.put(this.apiUrl+'personsMedia/'+personsMedia.persons_media_id+'/', personsMedia,this.httpOptions);
    }

    public deletePersonsMedia(id: number) { 
      return this.httpClient.delete(this.apiUrl+'personsMedia/'+id+'/', this.httpOptions);
    }

    public getPersonsMedia() { 
      return this.httpClient.get<PersonsMedia[]>(this.apiUrl+'personsMedia/', this.httpOptions);
    }
}