import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const FLIGHT_API='http://localhost:8123/flight-service/flight/airline'

@Injectable({
  providedIn: 'root',
})
export class FlightService {
  constructor(private http: HttpClient){}

  addAirline(data: any): Observable<any> {
      return this.http.post(`${FLIGHT_API}/add`, data, { responseType: 'text' ,  headers: {
        'Content-Type': 'application/json'
      }});
    }
}
