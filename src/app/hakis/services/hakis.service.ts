import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IHakis } from '../interfaces/ihakis';

@Injectable({
  providedIn: 'root',
})
export class HakisService {
  API = 'https://api.api-onepiece.com/v2/hakis/en';
  constructor(private http: HttpClient) {}

  public getHakis(): Observable<IHakis[]> {
    return this.http.get<IHakis[]>(this.API);
  }
}
