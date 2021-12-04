import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-fees-tracker',
  templateUrl: './fees-tracker.component.html',
  styleUrls: ['./fees-tracker.component.css']
})
export class FeesTrackerComponent implements OnInit {

  constructor( private router:Router ) { }

  ngOnInit(): void {
  }

  signUp() {
    alert("signup");
       this.router.navigate(['sign-up']);
  }
  signIp() {
    alert("signin");
       this.router.navigate(['sign-in']);
  }
}
