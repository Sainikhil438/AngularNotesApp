import { Component, Input, OnInit, output, Output } from '@angular/core';
import { NotesService } from '../../Services/Notes/notes.service';

@Component({
  selector: 'app-archivenotes',
  templateUrl: './archivenotes.component.html',
  styleUrl: './archivenotes.component.scss'
})
export class ArchivenotesComponent implements OnInit{
  archiveNotes: any;
  userID: any;
  
  

  constructor(private notesService: NotesService){
  }

  ngOnInit(): void {
    this.GetArchiveNotesList();
  }

  GetArchiveNotesList(){
    this.notesService.GetNotes().subscribe((response:any)=>{
      console.log(response)
      this.archiveNotes = response.data;
      this.archiveNotes = this.archiveNotes.filter((object:any) => {
        return object.isTrash == false;
      })
      
      this.archiveNotes = this.archiveNotes.filter((object:any) => {
        return object.isArchive == true;
      })
      this.archiveNotes.reverse()
      console.log(this.archiveNotes)
    })
  }
  
  refreshArchiveRefresh3($event:any){
    this.GetArchiveNotesList();
  }

  // refreshArchiveData($event: any){
  //   console.log("Hi")
  //   //this.GetArchiveNotesList();
  // }

  // refreshDataEvent($event:any){
  //   this.GetArchiveNotesList();
  // }


  // refreshArchive($event: any){
  //   this.GetArchiveNotesList();
  // }
  

  // SetUnarchive(noteID:any){
  //   this.notesService.UnarchiveNote(noteID).subscribe((response:any)=>{
  //     console.log(response);
  //     this.GetArchiveNotesList();
  //   })
  // }
}
