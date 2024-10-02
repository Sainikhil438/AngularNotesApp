import { Injectable } from '@angular/core';
import { HttpService } from '../Http/http.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpService) { }

  Login(reqData:any){
    let header={
      headers: new HttpHeaders({
        'Content-Type':'application/json'
      })
    }
    return this.http.PostMethod('https://localhost:44329/api/User/Login', reqData, false, header)
  }

  Register(reqData:any){
    let header={
      headers: new HttpHeaders({
        'Content-Type':'application/json'
      })
    }
   return this.http.PostMethod('https://localhost:44329/api/User/Register', reqData, false, header)
  }

  ForgotPasswordMethod(reqData:any){
    let header={
      headers: new HttpHeaders({
        'Content-Type':'application/json',
      })
    }
   return this.http.PostMethod('https://localhost:44329/api/User/ForgotPassword', reqData, false, header)
  }

  ResetPassword(reqData:any, token:any){
    let header={
      headers: new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization':'Bearer '+token
      })
    }
    return this.http.postServiceReset('https://localhost:44329/api/User/ResetPassword?newPassword='+reqData.newPassword+'&confirmPassword='+reqData.confirmPassword,{},true,header)
  }
}
