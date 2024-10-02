import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../Services/User/user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrl: './resetpassword.component.scss'
})
export class ResetpasswordComponent implements OnInit{
  resetForm!: FormGroup;
  token : any;
  passwordChanged : boolean = false;

  constructor(private userService:UserService, private formBuilder: FormBuilder, private activeRoute:ActivatedRoute, private router: Router){
  }

  ngOnInit(): void {
    this.resetForm = this.formBuilder.group({
      newPassword: ['', Validators.required, Validators.minLength(8)],
      confirmPassword: ['', Validators.required, Validators.minLength(8)]
    })
    //this.token = this.activeRoute.snapshot.paramMap.get('token');
    console.log(this.token);
  }

  ResetSubmit(){
    let reqData = {
      newPassword : this.resetForm.value.newPassword,
      confirmPassword: this.resetForm.value.confirmPassword
    }

    this.userService.ResetPassword(reqData, this.token).subscribe((res:any)=>{
      this.passwordChanged = res.success;
      if(this.passwordChanged){
        // console.log("Done")
        this.router.navigateByUrl('login');
      }
    })
  }
}
