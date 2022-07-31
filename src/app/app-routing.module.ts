import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LogInComponent } from './log-in/log-in.component';
import { AddBoxesComponent } from './trip-management/add-boxes/add-boxes.component';
import { EndTripComponent } from './trip-management/end-trip/end-trip.component';
import { StartTripComponent } from './trip-management/start-trip/start-trip.component';
import { TripManagementComponent } from './trip-management/trip-management.component';
import { UserDataComponent } from './user-data/user-data.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path: 'user-data', component: UserDataComponent},
  {path: 'trip-manager', component: TripManagementComponent},
  {path:'log-in', component: LogInComponent},
  {path: 'add-boxes', component: AddBoxesComponent},
  {path: 'start-trip', component: StartTripComponent},
  {path: 'end-trip', component: EndTripComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


