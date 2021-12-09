import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BasicAuthenticationService } from '../service/basic-authentication.service';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'in28minutes'
  password = ''
  errorMessage = 'Credencial Invalida'
  invalidLogin = false

  constructor(private router: Router, 
    private hardcodedAuthenticationService: HardcodedAuthenticationService,
    private basicAuthenticationService: BasicAuthenticationService) { }

  ngOnInit(): void {
  }

  loginForm = new FormGroup({
    username : new FormControl('',Validators.required),
    userpassword : new FormControl('',Validators.required)
  });

  handleLogin(){
    //console.log(this.username);
    //if(this.username==='icainelli' && this.password==='hola'){
    if(this.hardcodedAuthenticationService.authenticate(this.username,this.password)){
      this.router.navigate(['welcome', this.username])
      this.invalidLogin = false
    }else{
      this.invalidLogin = true
    }
  }
  
  handleBasicAuthLogin(){
    //console.log(this.username);
    //if(this.username==='icainelli' && this.password==='hola'){
    this.basicAuthenticationService.executeBasicAuthenticationService(this.username,this.password).subscribe(
      data=> {
        console.log(data)
        this.router.navigate(['welcome', this.username])
        this.invalidLogin = false
      },
      error=> {
        console.log(error)
        this.invalidLogin = true
      }
    )
  }

  handleJWTAuthLogin(){
    //console.log(this.username);
    //if(this.username==='icainelli' && this.password==='hola'){
    this.username = this.loginForm.get('username').value
    this.password = this.loginForm.get('userpassword').value
    this.basicAuthenticationService.executeJWTAuthenticationService(this.username,this.password).subscribe(
      data=> {
        console.log(data)
        this.router.navigate(['welcome', this.username])
        this.invalidLogin = false
      },
      error=> {
        console.log(error)
        this.invalidLogin = true
        this.loginForm.get('userpassword').reset()
      }
    )
  }
}
