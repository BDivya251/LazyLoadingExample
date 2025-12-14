import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FlightService } from '../flight';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-flight-inventory',
  standalone:true,
  imports: [CommonModule,FormsModule,RouterModule],
  templateUrl: './add-flight-inventory.html',
  styleUrl: './add-flight-inventory.css',
})


export class AddFlightInventoryComponent {
flight = {
    flightNumber: '',
    departure: '',
    arrival: '',
    travelDate: '',
    departureTime: '',
    arrivalTime: '',
    availableSeats: 0,
    ticketPrice: 0,
    airline: 0
  };

  constructor(private flightService:FlightService){}
  

  addFlight(){
     this.flight = {
      flightNumber: '',
      departure: '',
      arrival: '',
      travelDate: '',
      departureTime: '',
      arrivalTime: '',
      availableSeats: 0,
      ticketPrice: 0,
      airline: 0
    };
  
  this.flightService.addFlightInventory(this.flight).subscribe({
    next:(res)=>{
      console.log(res.status)
      console.log(res.airline)
      console.log(res.successMessage)
      Swal.fire({
      icon: 'success',
      title: 'Flight Added',
      text: 'Flight details added successfully',
      confirmButtonColor: '#16a34a'
    });
    },
    error:(err)=>{
       Swal.fire({
      icon: 'error',
      title: 'Error ',
      text: 'Flight not added successfully',
      confirmButtonColor:'#f02311ff'
      
    });
    }
  });

}

}
