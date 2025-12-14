import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FlightWrapper } from './flight-wrapper';
const FLIGHT_API='http://localhost:8123/flight-service/flight'
// http://localhost:8123/flight-service/flight/airline/inventary/add
@Injectable({
  providedIn: 'root',
})
export class FlightService {
  constructor(private http: HttpClient){}

  addAirline(data: any): Observable<any> {
      return this.http.post(`${FLIGHT_API}/airline/add`, data, { responseType: 'text' ,  headers: {
        'Content-Type': 'application/json'
      }});
    }

    addFlightInventory(data:any):Observable<any>{
      return this.http.post(`${FLIGHT_API}/airline/inventary/add`,data,
        {
           observe: 'response',   
        headers:{
          'Content-Type':'application/json'
        }
      })
    }

    searchFlights( arrival: string,departure: string) {
  return this.http.get<FlightWrapper[]>(
    `${FLIGHT_API}/search`,
    {
      params: {
        
        arrival: arrival,
        departure: departure,
      }
    }
  );
}

}
