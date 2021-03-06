import { User } from './../user';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  user = new User('', '');

  constructor(private router: Router) { }

  ngOnInit() {
  }
  login() {
    this.router.navigate(['']);
  }
}
