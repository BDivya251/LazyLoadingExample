import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FlightWrapper } from './flight-wrapper';
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

    searchFlights(departure: string, arrival: string) {
  return this.http.get<FlightWrapper[]>(
    `${FLIGHT_API}/search`,
    {
      params: {
        departure: departure,
        arrival: arrival
      }
    }
  );
}

}
