import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../Services/User/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent implements OnInit{
  registerForm!: FormGroup;
  registerSuccess : boolean = false;

  constructor(private userService: UserService, private formBuilder: FormBuilder, private router:Router){
  }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required, Validators.email],
      password: ['', Validators.required, Validators.minLength(8)
        // Validators.minLength(8),
        // Validators.pattern(/^.*(?=.{8,})(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&+=]).*$/)
      ]
    })
  }

  RegisterSubmit(){
    let reqData = {
      firstName: this.registerForm.value.firstName,
      lastName: this.registerForm.value.lastName,
      email: this.registerForm.value.email,
      password: this.registerForm.value.password
    }
    console.log(reqData);

    this.userService.Register(reqData).subscribe((res:any)=>{
      console.log(res)
      this.registerSuccess = res.success;
      console.log(this.registerSuccess);
      if(this.registerSuccess){
        this.router.navigateByUrl('login');
      }
    })
  }
}
