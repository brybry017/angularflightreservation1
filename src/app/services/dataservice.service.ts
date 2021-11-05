import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  endpoint = 'http://localhost:8080/flightreservation/';

  constructor(private http:HttpClient) { }

  httpOptions ={
    headers: new HttpHeaders({
      'Content-Type':'application/json',
      'Accept':'application/json'
    })
  }

  getReservation(id:any){
    return this.http.get(this.endpoint+"reservations/"+id);
  }
  checkin(checkInRequest: Object){
    console.log(checkInRequest)
    return this.http.post("http://localhost:8080/flightreservation/reservations/",checkInRequest);
  }
}
