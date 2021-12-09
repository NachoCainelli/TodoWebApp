import { Component, OnInit } from '@angular/core';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  isUserLoggedIn : boolean = false;

  constructor(public hardcodedAuthenticationService : HardcodedAuthenticationService) { }

  usuarioSS: string = window.sessionStorage.getItem('authenticaterUser')

  ngOnInit(): void {
    this.hardcodedAuthenticationService.isUserLoggedIn();
    this.usuarioSS = window.sessionStorage.getItem('authenticaterUser');
  }

}
