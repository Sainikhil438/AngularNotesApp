import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { ForgotpasswordComponent } from './Components/forgotpassword/forgotpassword.component';
import { ResetpasswordComponent } from './Components/resetpassword/resetpassword.component';
import { HttpClientModule } from '@angular/common/http';
import { ReviewComponent } from './Components/review/review.component';
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { TakenotesComponent } from './Components/takenotes/takenotes.component';
import { NotesContainerComponent } from './Components/notes-container/notes-container.component';
import { DisplaynotesComponent } from './Components/displaynotes/displaynotes.component';
import { SinglenoteComponent } from './Components/singlenote/singlenote.component';
import {MatCardModule} from '@angular/material/card';
import {MatMenuModule} from '@angular/material/menu';
import { ArchivenotesComponent } from './Components/archivenotes/archivenotes.component';
import { TrashnotesComponent } from './Components/trashnotes/trashnotes.component';
import { ReviewTwoComponent } from './Components/review-two/review-two.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDialogModule} from '@angular/material/dialog';
import { EditnotesComponent } from './Components/editnotes/editnotes.component';
import { FilterPipe } from './filter.pipe';
import { IconButtonsComponent } from './Components/icon-buttons/icon-buttons.component';
import { AuthserviceService } from './Services/AuthService/authservice.service';
import {MatSnackBarModule} from '@angular/material/snack-bar';





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ForgotpasswordComponent,
    ResetpasswordComponent,
    ReviewComponent,
    DashboardComponent,
    TakenotesComponent,
    NotesContainerComponent,
    DisplaynotesComponent,
    SinglenoteComponent,
    ArchivenotesComponent,
    TrashnotesComponent,
    ReviewTwoComponent,
    EditnotesComponent,
    FilterPipe,
    IconButtonsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    HttpClientModule,
    MatSelectModule,
    MatDatepickerModule,
    MatRadioModule,
    MatNativeDateModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatExpansionModule,
    MatCardModule,
    MatMenuModule,
    MatCheckboxModule,
    MatDialogModule,
    MatSnackBarModule,
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),
    AuthserviceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
