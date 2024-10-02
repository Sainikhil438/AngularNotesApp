import { Injectable, OnInit } from "@angular/core";
import { AuthserviceService } from "../Services/AuthService/authservice.service";
import { Router } from "@angular/router";



@Injectable({
  providedIn: 'root'
})

export class AuthFundoo implements OnInit{

  constructor(private auth: AuthserviceService, private router:Router){}

  ngOnInit(): void {
    
  }

  canActivate():boolean{
    if(this.auth.IsUserLoggedIn()){
      return true;
    }
    this.router.navigateByUrl("/login")
    return false;
  }


}