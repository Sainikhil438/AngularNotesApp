import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NotesService } from '../../Services/Notes/notes.service';

@Component({
  selector: 'app-icon-buttons',
  templateUrl: './icon-buttons.component.html',
  styleUrl: './icon-buttons.component.scss'
})
export class IconButtonsComponent {
  
  @Input() note : any;
  @Output() refreshEventArchive = new EventEmitter<any>();
  // @Output() refreshEventTrash = new EventEmitter<any>();
  // @Output() refreshEventAll = new EventEmitter<any>();

  isDeleted : boolean = false;
  isRestored : boolean = false;

  constructor(private notesService: NotesService){}

  SetColor(noteID:any, color:string){
    this.notesService.SetNoteColor(noteID, color).subscribe((response: any)=>{
      console.log("Color ",response.color);
      this.refreshEventArchive.emit(response);
    })
  }

  SetArchive(noteID:any){
    this.notesService.SetArchive(noteID).subscribe((response:any)=>{
      console.log(response);
      this.refreshEventArchive.emit(response);
    })
  }

  SetTrash(noteID:any){
    this.notesService.SetTrashNote(noteID).subscribe((response:any)=>{
      console.log(response);
      this.refreshEventArchive.emit(response);
      //this.refreshEventAll.emit(response);
    })
  }

  public SetUnarchive(noteID:any){
    this.notesService.UnarchiveNote(noteID).subscribe((response:any)=>{
      console.log(response);
      this.refreshEventArchive.emit(response);
    })
  }

  DeleteForever(noteID:any){
    this.notesService.DeleteNoteForever(noteID).subscribe((response:any)=>{
      console.log(response);
      this.isDeleted = response.success;
      
      if(this.isDeleted){
        console.log(this.isDeleted);
        this.refreshEventArchive.emit(response);
      }
    })
  }

  Restore(noteID:any){
    //console.log(noteID);
    this.notesService.RestoreNote(noteID).subscribe((response:any)=>{
      console.log(response);
      this.isRestored = response.data;
      console.log(this.isRestored)
      if(this.isRestored){
        console.log(this.isRestored);
        this.refreshEventArchive.emit(response);
      }
    })
  }
}
