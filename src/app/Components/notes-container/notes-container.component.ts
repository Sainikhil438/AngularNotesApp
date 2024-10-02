import { Component, Input, OnInit } from '@angular/core';
import { NotesService } from '../../Services/Notes/notes.service';
import { EditnotesComponent } from '../editnotes/editnotes.component';


@Component({
  selector: 'app-notes-container',
  templateUrl: './notes-container.component.html',
  styleUrl: './notes-container.component.scss'
})
export class NotesContainerComponent implements OnInit{

  @Input() refreshDataEvent:any;
   notesArray : any;
   userId:any;
   isTrash = false;


  constructor(private notesService: NotesService){}

  ngOnInit(): void {
    this.GetNotesList();
  }
  
  
  GetNotesList(){
    this.notesService.GetNotes().subscribe((response:any)=>{
      //console.log(response.data)

      this.notesArray = response.data;
    
      //console.log("Stored in array")
      //console.log(this.notesArray);

      this.notesArray = this.notesArray.filter((object:any) => {
        return object.isTrash == false;
      })
      
      this.notesArray = this.notesArray.filter((object:any) => {
        return object.isArchive == false;
      })
      this.notesArray.reverse()
      //console.log("Filtered array")
      //console.log(this.notesArray);
    })
  }

  refreshDataList($event:any){
    this.GetNotesList();
  }

  addNoteEvent($event: any){
    console.log(event);
    this.GetNotesList();
  }

  archiveEvent($data: any){
    //console.log($data);
    this.GetNotesList();
  }

  

}
