import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { UserDataComponent } from './user-data/user-data.component';
import { TripManagementComponent } from './trip-management/trip-management.component';
import { LogInComponent } from './log-in/log-in.component';
import { FormsModule } from '@angular/forms';
import { SideBarComponent } from './trip-management/side-bar/side-bar.component';
import { AddBoxesComponent } from './trip-management/add-boxes/add-boxes.component';
import { StartTripComponent } from './trip-management/start-trip/start-trip.component';
import { EndTripComponent } from './trip-management/end-trip/end-trip.component';




@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    UserDataComponent,
    TripManagementComponent,
    LogInComponent,
    SideBarComponent,
    AddBoxesComponent,
    StartTripComponent,
    EndTripComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
