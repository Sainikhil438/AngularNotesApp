import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../Services/dataService/data.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MediaMatcher } from '@angular/cdk/layout';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  
  constructor(private router:Router, private data: DataService, private snackbar: MatSnackBar){}

  LogOut(){
    this.router.navigateByUrl('login');
    // localStorage.setItem('token','')
    localStorage.removeItem('token');
    this.snackbar.open('You are logged Out successfully', '', {
      duration: 3000
    });
  }

  search(event: any){
    console.log(event.target.value);
    this.data.outgoingData(event.target.value);
  }
}
