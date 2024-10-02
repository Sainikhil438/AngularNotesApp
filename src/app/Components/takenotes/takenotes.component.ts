import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../Services/User/user.service';
import { NotesService } from '../../Services/Notes/notes.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-takenotes',
  templateUrl: './takenotes.component.html',
  styleUrl: './takenotes.component.scss'
})
export class TakenotesComponent implements OnInit{
  notemaking !: FormGroup;
  condition = true;
  token : any;

  @Output() refreshAddNoteEvent = new EventEmitter<any>();

  constructor(private formBuilder:FormBuilder, private notesService: NotesService, private activeRoute:ActivatedRoute){}

  ngOnInit(): void {
    this.notemaking = this.formBuilder.group({
      title:['', Validators.required],
      takeNote:['', Validators.required]
    })
    // this.token = this.activeRoute.snapshot.paramMap.get('token');
    
    console.log(this.token);
  }

  enableNotes(){
    this.condition  = !this.condition;
  }

  showAccordion() {
    this.condition = !this.condition;
  }

  SubmitNote(): void{
   if(this.notemaking.valid){
    this.token = localStorage.getItem('token');
    let reqData = {
      title: this.notemaking.value.title,
      takeNote: this.notemaking.value.takeNote
    }
    this.notesService.TakeNotes(reqData).subscribe((res:any)=>{
      console.log(res);
      this.refreshAddNoteEvent.emit(res);
      console.log("After ",res);
      this.condition = !this.condition;
      this.notemaking.reset();
    },
     (error:any)=>{
      console.log("Error", error);
     });
   }
   else{
    console.log("Form is invalid");
   }
  }

}
