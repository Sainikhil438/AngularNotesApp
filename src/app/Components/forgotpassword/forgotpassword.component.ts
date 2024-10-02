import { Component, OnInit } from '@angular/core';
import { UserService } from '../../Services/User/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrl: './forgotpassword.component.scss'
})
export class ForgotpasswordComponent implements OnInit{
  forgotPasswordForm!:FormGroup;

  constructor(private userService: UserService, private formBuilder: FormBuilder, private router:Router){
  }

  ngOnInit(): void {
    this.forgotPasswordForm = this.formBuilder.group({
      email:['', Validators.required]
    })
  }

  GoToLogin(){
    this.router.navigateByUrl('login');
  }

  ForgotPassword(){
    let reqData = {
      email: this.forgotPasswordForm.value.email
    }
    this.userService.ForgotPasswordMethod(reqData).subscribe((res:any)=>{
      console.log(res)
    })
  }
}
