import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trip-management',
  templateUrl: './trip-management.component.html',
  styleUrls: ['./trip-management.component.css']
})
export class TripManagementComponent implements OnInit {

  constructor(public httpClient: HttpClient) { }

  ngOnInit(): void {
  }

}
