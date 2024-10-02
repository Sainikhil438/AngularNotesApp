import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NotesService } from '../../Services/Notes/notes.service';
import { response } from 'express';

@Component({
  selector: 'app-trashnotes',
  templateUrl: './trashnotes.component.html',
  styleUrl: './trashnotes.component.scss'
})
export class TrashnotesComponent implements OnInit{
  @Output() trashNotes:any;
  // isDeleted : boolean = false;
  // isRestored : boolean = false;
  @Output() refreshtrashEvent = new EventEmitter<any>();

  constructor(private notesService: NotesService){}

  ngOnInit(): void {
    this.GetTrashNotesList();
  }

  GetTrashNotesList(){
    this.notesService.GetNotes().subscribe((response:any)=>{
      console.log(response)
      this.trashNotes = response.data;

      this.trashNotes = this.trashNotes.filter((object:any)=>{
        return object.isTrash == true;
      })

      this.trashNotes = this.trashNotes.filter((object:any)=>{
        return object.isArchive == false;
      })

      this.trashNotes.reverse()
      console.log(this.trashNotes);
    })
  }

  refreshTrashNotes($event:any){
    this.GetTrashNotesList();
  }

  // DeleteForever(noteID:any){
  //   this.notesService.DeleteNoteForever(noteID).subscribe((response:any)=>{
  //     console.log(response);
  //     this.isDeleted = response.success;
  //     if(this.isDeleted){
  //       //this.GetTrashNotesList();
  //       this.refreshtrashEvent.emit(response);
  //     }
  //   })
  // }

  // Restore(noteID:any){
  //   this.notesService.RestoreNote(noteID).subscribe((response:any)=>{
  //     console.log(response);
  //     this.isRestored = response.data;
  //     if(this.isRestored){
  //       this.GetTrashNotesList();
  //     }
  //   })
  // }

  

  
}
