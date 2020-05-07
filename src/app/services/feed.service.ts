import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FeedService {

  constructor(
    private _http: HttpClient
  ) {

  }

  getFotos(): Observable<any> {
    return this._http.get('assets/data.json');
  }
}
