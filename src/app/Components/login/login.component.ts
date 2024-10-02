import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../Services/User/user.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;

  constructor(private userService:UserService, private formbuilder:FormBuilder, private router: Router, private snack:MatSnackBar){
  }

  ngOnInit(): void {
    this.loginForm= this.formbuilder.group({
      email: ['',[Validators.required,
        Validators.pattern(/^[a-z]{3,}(.[0-9a-z]*)?@([a-z]){2,}.[a-z]+(.in)*$/)
      ]],
      password:['',[Validators.required,
        Validators.minLength(8),
        Validators.pattern(/^.*(?=.{8,})(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&+=]).*$/)
      ]]
    })
  }

  GoToRegister(){
    this.router.navigateByUrl('Register');
  }

  GoToForgotPassword(){
    this.router.navigateByUrl('forgotpassword');
  }

  LoginSubmit(){
    let reqdata = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password
    };
    this.userService.Login(reqdata).subscribe((res: any) => {
      console.log(res);
      if(res.data != null){
        localStorage.setItem('token', res.data);
        this.snack.open('You are logged in successfully', '', {
          duration: 5000
        });
        console.log(res.data);
        this.router.navigateByUrl('dashboard');
      }
    });

    
    // if (this.loginForm.valid) {
    //   let reqdata = {
    //     email: this.loginForm.value.email,
    //     password: this.loginForm.value.password
    //   };
    //   this.userService.Login(reqdata).subscribe((res: any) => {
    //     console.log(res);
    //   });
    // } else {
    //   console.log('Form is invalid');
    // }
  }

}
