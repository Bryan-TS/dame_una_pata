import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public isMenuCollapsed = true;

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }

  goToLogin(){
    this._router.navigateByUrl('login')
  }

  goToHome(){
    this._router.navigateByUrl('home')
  }

  goToRegister(){
    this._router.navigateByUrl('register')
  }

}
