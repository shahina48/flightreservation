import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReservationService } from 'src/app/services/reservation.service';

@Component({
  selector: 'app-display-flights',
  templateUrl: './display-flights.component.html',
  styleUrls: ['./display-flights.component.css']
})
export class DisplayFlightsComponent implements OnInit {
data:any;
constructor(private service:ReservationService,private router:Router){}
ngOnInit(){
  this.data=this.service.flightData;
  console.log(this.data)
}
public onSelect(id:number):any{
  this.router.navigate(['/passengerDetails/'+id])
}
}
