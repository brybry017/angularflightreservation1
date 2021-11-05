import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { DataserviceService } from 'src/app/services/dataservice.service';

@Component({
  selector: 'app-checkin',
  templateUrl: './checkin.component.html',
  styleUrls: ['./checkin.component.css']
})
export class CheckinComponent implements OnInit {

  data:any;

  constructor(private router:Router,private route:ActivatedRoute, private service:DataserviceService) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get("id");
    this.service.getReservation(id).subscribe(res =>{
      this.data = res;
      console.log(this.data);
    })
  }
  checkIn(numberOfBags:HTMLInputElement){
    let checkInRequest={
      "id": this.data.id,
      "checkedIn": true,
      "numberOfBags": numberOfBags.value
    }
    console.log(checkInRequest);
    this.service.checkin(checkInRequest).subscribe(res =>{
      console.log(res);
    })
    this.router.navigate(['/Confirm']);
  }

}
