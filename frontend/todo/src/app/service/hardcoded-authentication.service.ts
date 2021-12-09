import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticate(username : string,password : string){
    //console.log('antes: ' + this.isUserLoggedIn());
    if(username==='icainelli' && password==='hola'){
      sessionStorage.setItem('authenticaterUser',username);
      //console.log('despues: ' + this.isUserLoggedIn());
      return true;
    }
    return false;
  }

  isUserLoggedIn(){
    let user = sessionStorage.getItem('authenticaterUser')
    return !(user === null)
  }

  logout(){
    sessionStorage.removeItem('authenticaterUser')
  }
}
