import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReservationService } from 'src/app/services/reservation.service';

@Component({
  selector: 'app-find-flights',
  templateUrl:'./find-flights.component.html',
  styleUrls: ['./find-flights.component.css']
})
export class FindFlightsComponent implements OnInit {
  from:any;
  to:any;
  departureDate:any;

  constructor(private service:ReservationService,private router:Router){}
  ngOnInit(){}

  public onSubmit(data:any){
   this.service.getFlights(data.from,data.to,data.departureDate).subscribe(
      (res:any)=>{
          this.router.navigate(['/displayFlights'])
      }
    )
  }
}
