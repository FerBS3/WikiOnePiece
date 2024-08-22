import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IEspadas } from '../interfaces/iespadas';

@Injectable({
  providedIn: 'root',
})
export class EspadasService {
  API = 'https://api.api-onepiece.com/v2/swords/en';
  constructor(private http: HttpClient) {}

  getEspadas(): Observable<IEspadas[]> {
    return this.http.get<IEspadas[]>(this.API);
  }
}
