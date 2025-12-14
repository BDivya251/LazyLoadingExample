import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const FLIGHT_API='http://localhost:8123/flight-service/flight/airline'
// http://localhost:8123/flight-service/flight/airline/inventary/add
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

    addFlightInventory(data:any):Observable<any>{
      return this.http.post(`${FLIGHT_API}/inventary/add`,data,
        {
           observe: 'response',   
        headers:{
          'Content-Type':'application/json'
        }
      })
    }
}
