import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPersonajes } from '../interfaces/ipersonajes';

@Injectable({
  providedIn: 'root',
})
export class PersonajesService {
  API = 'https://api.api-onepiece.com/v2/characters/en';

  constructor(private http: HttpClient) {}

  public getPersonajes(): Observable<IPersonajes[]> {
    return this.http.get<IPersonajes[]>(this.API);
  }
}
