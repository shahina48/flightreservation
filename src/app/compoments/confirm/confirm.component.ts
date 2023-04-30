import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ParsedEvent } from '@angular/compiler';
import { Router } from '@angular/router';
import { ReservationService } from 'src/app/services/reservation.service';
@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent implements OnInit{
  reservationId:any;
  data:any
  constructor(private route:ActivatedRoute,private service:ReservationService,private router:Router){}
  ngOnInit(): any{
    this.reservationId=Number(this.route.snapshot.paramMap.get("id"));
    this.data=this.service.flightData;
    console.log(this.data)
  }


}
