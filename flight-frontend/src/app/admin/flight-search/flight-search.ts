import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FlightService } from '../flight';
import { FlightWrapper } from '../flight-wrapper';

@Component({
  selector: 'app-flight-search',
  standalone:true,
  imports: [CommonModule,FormsModule],
  templateUrl: './flight-search.html',
  styleUrl: './flight-search.css',
})



export class FlightSearchComponent {
   departure='';
   arrival='';
   searched=false
  constructor(private flightService:FlightService){}
  flights:FlightWrapper[]=[];
  searchFlights(){
    this.searched=true;
    this.flightService.searchFlights(this.departure,this.arrival).subscribe({
      next:(data)=>{
        this.flights=data
      },
      error:(err)=>{
        console.error(err);
      }
    })
  }
}
