import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReservationService } from 'src/app/services/reservation.service';
import { HttpClientJsonpModule } from '@angular/common/http';

@Component({
  selector: 'app-passenger-details',
  templateUrl: './passenger-details.component.html',
  styleUrls: ['./passenger-details.component.css']
})
export class PassengerDetailsComponent implements OnInit{
    flightData:any;
    passengerFirstName:any;
    passengerLastName:any;
    passengerMiddleName:any;
    passengerEmail:any;
    passengerPhone:any;
    cardNumber:any;
    expirationDate:any;
    securityCode:any;
    data:any;
    
    constructor(private router:Router,private route:ActivatedRoute,private service:ReservationService){}
    ngOnInit(){
     return this.service.getFlight(Number(this.route.snapshot.paramMap.get("id"))).subscribe(
      (res:any)=>{
        this.flightData=res;
      }
     )
     
    }
     public onSubmit(data:any){
      data.flightId=this.flightData.id;
      this.service.saveReservation(data).subscribe(
        (res:any)=>{
          this.router.navigate(['/confirm',res.id])
        }
      )
     }
  }
