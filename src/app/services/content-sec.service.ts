import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ContentSecService {
  url = 'assets/json/datasec.json'; // Define the URL as a class property

  constructor(private http: HttpClient) {}

  getContent(): Observable<any> {
    return this.http.get(this.url); // Reference the class property without quotes
  }
}
