import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { FindFlightsComponent } from './compoments/find-flights/find-flights.component';
import { DisplayFlightsComponent } from './compoments/display-flights/display-flights.component';
import { PassengerDetailsComponent } from './compoments/passenger-details/passenger-details.component';
import { ConfirmComponent } from './compoments/confirm/confirm.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRouterModule } from './routing.module';
import { FormsModule } from '@angular/forms';
import { ReservationService } from './services/reservation.service';

@NgModule({
  declarations: [
    AppComponent,
    FindFlightsComponent,
    DisplayFlightsComponent,
    PassengerDetailsComponent,
    ConfirmComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRouterModule,
    FormsModule
  ],
  providers: [ReservationService],
  bootstrap: [FindFlightsComponent]
})
export class AppModule { }
