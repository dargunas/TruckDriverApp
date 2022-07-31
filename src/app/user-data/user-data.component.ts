import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css']
})
export class UserDataComponent implements OnInit {

  constructor(public httpClient: HttpClient) { }

  ngOnInit(): void {
  }

  addNewUser(user: {name: string, email: string, password: string}){
    console.log(user);
  this.httpClient.post('http://localhost:8080/driver/postNew', user).subscribe((res)=> {
    console.log(res);
  });
  }

}
