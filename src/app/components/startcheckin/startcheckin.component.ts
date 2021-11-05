import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-startcheckin',
  templateUrl: './startcheckin.component.html',
  styleUrls: ['./startcheckin.component.css']
})
export class StartcheckinComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  onSelect(id:HTMLInputElement){
    console.log(id.value);
    this.router.navigate(['/Checkin',id.value]);
  }
}
