import { Injectable } from '@angular/core';
import {HttpClient,HttpClientModule,HttpResponse} from '@angular/common/http';
import { map } from 'rxjs/operators'; 
import { HttpClientJsonpModule } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  flightUrl:string="http://localhost:8080/flightservices/flights";
  reservationUrl:string="http://localhost:8080/flightservices/reservations";
  flightData:any;
  constructor(private _http:HttpClient) { }
  public getFlights(from:string,to:string,departureDate:string):any{
    return this._http.get(this.flightUrl+"?from="+from+"&to="+to+"&departureDate="+departureDate).pipe(
        map((res:any)=>{
          this.flightData=res;
        })
    )
    }
    
    public getFlight(id:number):any{
      return this._http.get(this.flightUrl+"/"+id).pipe(
        map((res:any)=>{
          return res;
        })
    )
    }

    public saveReservation(reservation: any):any{
      return this._http.post(this.reservationUrl,reservation).pipe(
        map((res:any)=>{
          return res;
        })
    )
    }
  }

