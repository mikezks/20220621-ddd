import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Haendler } from '../entities/haendler';

@Injectable({ providedIn: 'root' })
export class HaendlerDataService {
  constructor(private http: HttpClient) {}

  load(): Observable<Haendler[]> {
    // Uncomment if needed
    /*
        const url = '...';
        const params = new HttpParams().set('param', 'value');
        const headers = new HttpHeaders().set('Accept', 'application/json');
        return this.http.get<Haendler[]>(url, {params, headers});
        */

    return of([
      { id: 1, name: 'Lorem ipsum', description: 'Lorem ipsum dolor sit amet' },
      {
        id: 2,
        name: 'At vero eos',
        description: 'At vero eos et accusam et justo duo dolores',
      },
      {
        id: 3,
        name: 'Duis autem',
        description: 'Duis autem vel eum iriure dolor in hendrerit',
      },
      {
        id: 4,
        name: 'Trainer was here! :)',
        description: 'Duis autem vel eum iriure dolor in hendrerit',
      },
    ]);
  }
}
