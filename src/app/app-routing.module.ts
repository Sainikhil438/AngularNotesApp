import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { ForgotpasswordComponent } from './Components/forgotpassword/forgotpassword.component';
import { ResetpasswordComponent } from './Components/resetpassword/resetpassword.component';
import { ReviewComponent } from './Components/review/review.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { TakenotesComponent } from './Components/takenotes/takenotes.component';
import { NotesContainerComponent } from './Components/notes-container/notes-container.component';
import { ArchivenotesComponent } from './Components/archivenotes/archivenotes.component';
import { TrashnotesComponent } from './Components/trashnotes/trashnotes.component';
import { ReviewTwoComponent } from './Components/review-two/review-two.component';
import { AuthFundoo } from './Shared/auth-fundoo.guard';

const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'Register', component:RegisterComponent},
  {path:'forgotpassword', component:ForgotpasswordComponent},
  {path:'resetpassword/:token', component:ResetpasswordComponent},
  {path:'review', component:ReviewComponent},
  {path:'reviewTwo', component:ReviewTwoComponent},
  {path:'dashboard', component:DashboardComponent,canActivate : [AuthFundoo],
    children:[
      {path:'notecontainer', component:NotesContainerComponent},
      {path: 'archivenotes', component:ArchivenotesComponent},
      {path: 'trashnotes', component:TrashnotesComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
