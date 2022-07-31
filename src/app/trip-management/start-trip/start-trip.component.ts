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

export class Fuel {
  constructor(
    public id: number,
    public adblue: number,
    public dieselFuel: number,
    public endKilometers: number,
    public startKilometers: number,
    public truckId: number
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
  fuel1: Fuel[] = [];
  
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

addNewTrip(fuel: {date: string, startKilometers: number, truckId: number}){
  console.log(fuel);
  var fuel2: Object[] = [];
  this.httpClient.post('http://localhost:8080/fuel/postNew', fuel).subscribe((res)=> {
  console.log(res), fuel2.push(res), console.log(fuel2);
    }); 
}



putTruckFuel(id: number, truck: {id: number}){
  console.log(truck);
  const endpointUrl = 'http://localhost:8080/truck/putFuel/'+ id;
  this.httpClient.put<any>(endpointUrl, truck).subscribe((res)=>  {
  console.log(res);
    });
}
}