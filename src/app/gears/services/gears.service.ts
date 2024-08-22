import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IGear } from '../interfaces/igear';

@Injectable({
  providedIn: 'root',
})
export class GearsService {
  API = 'https://api.api-onepiece.com/v2/luffy-gears/en';
  constructor(private http: HttpClient) {}

  public getGears(): Observable<IGear[]> {
    return this.http.get<IGear[]>(this.API);
  }
}
