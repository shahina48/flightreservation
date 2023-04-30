import { NgModule } from "@angular/core";
import { Routes,RouterModule } from "@angular/router";
import { ConfirmComponent } from "./compoments/confirm/confirm.component";
import { DisplayFlightsComponent } from "./compoments/display-flights/display-flights.component";
import { FindFlightsComponent } from "./compoments/find-flights/find-flights.component";
import { PassengerDetailsComponent } from "./compoments/passenger-details/passenger-details.component";

const routes:Routes=[
    {path:'',redirectTo:'',pathMatch:'full'},
    {
    path:'findFlights',
    component:FindFlightsComponent
},
{
    path:'displayFlights',
    component:DisplayFlightsComponent
},
{
    path:'passengerDetails/:id',
    component:PassengerDetailsComponent
},
{
    path:'confirm/:id',
    component:ConfirmComponent
}
];
@NgModule({
 imports:[RouterModule.forRoot(routes)],
 exports:[RouterModule]
})
export class AppRouterModule{}