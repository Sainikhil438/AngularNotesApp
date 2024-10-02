import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  constructor() { }

  IsUserLoggedIn(){
    return !! localStorage.getItem('token');
  }
}
