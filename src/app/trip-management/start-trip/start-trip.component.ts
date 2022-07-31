import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
// import { Truck } from 'src/app/truck.model';


export class Truck {
  constructor(
    public id: number,
    public numberPlate: string
  ){
 }
}


@Component({
  selector: 'app-start-trip',
  templateUrl: './start-trip.component.html',
  styleUrls: ['./start-trip.component.css']
})


export class StartTripComponent implements OnInit {

  trucks: Truck[] = [];
  
  constructor(private httpClient: HttpClient ) { }

  ngOnInit(): void {
    this.getTrucks();
  }

getTrucks(){
  this.httpClient.get<any>('http://localhost:8080/truck/getAll').subscribe(
    response => {
      console.log(response);
      this.trucks = response;
    });
}

addNewTrip(user: {id: number, kilometers: string, date: string}){
  console.log(user);
this.httpClient.post('http://localhost:8080/driver/postNew', user).subscribe((res)=> {
  console.log(res);
    });
}
}