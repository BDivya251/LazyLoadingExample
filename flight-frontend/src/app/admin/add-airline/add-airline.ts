import { Component } from '@angular/core';
import { FlightService } from '../flight';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-add-airline',
  standalone:true,
  imports: [CommonModule,RouterModule,FormsModule],
  templateUrl: './add-airline.html',
  styleUrl: './add-airline.css',
})


export class AddAirlineComponent {

  airlineName = '';
successMessage = '';
errorMessage = '';

constructor(private flightService:FlightService){}
addAirline(){
        const payload=
              {
                  airlineName :this.airlineName
              };

        if (!this.airlineName.trim()) {
      this.errorMessage = 'Airline name is required';
      this.successMessage = '';
      return;
    }
     this.flightService.addAirline(this.airlineName).subscribe({
      next: () => {
        this.successMessage = 'Airline added successfully';
        this.errorMessage = '';
        this.airlineName = '';
      },
      error: () => {
        this.errorMessage = 'Failed to add airline';
        this.successMessage = '';
      }
    });
  }
    
}


