import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DisplaynotesComponent } from '../displaynotes/displaynotes.component';
import { NotesService } from '../../Services/Notes/notes.service';

@Component({
  selector: 'app-editnotes',
  templateUrl: './editnotes.component.html',
  styleUrl: './editnotes.component.scss'
})
export class EditnotesComponent implements OnInit{
  title:any;
  takeNote:any;
  noteID:any;
  color:any;

  constructor(private noteService:NotesService, public dialogbox: MatDialogRef<EditnotesComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any){
      this.title = data.title,
      this.takeNote = data.takeNote,
      this.noteID = data.noteID,
      this.color = data.colour
    }

    ngOnInit(): void {
    }

  closeDialog() {
    let reqData = {
      title: this.title,
      takeNote: this.takeNote,
    }
    console.log(reqData , this.noteID)

    this.noteService.EditNotes(reqData, this.noteID).subscribe((response:any)=>{
      console.log(response);
    })

    this.dialogbox.close();
  }

}
