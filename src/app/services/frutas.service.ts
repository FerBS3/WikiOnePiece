import { IFrutas } from './../interfaces/ifrutas';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FrutasService {
  API = 'https://api.api-onepiece.com/v2/fruits/en';

  constructor(private http: HttpClient) {}

  public getFrutas(): Observable<IFrutas> {
    return this.http.get<IFrutas>(this.API);
  }
}
