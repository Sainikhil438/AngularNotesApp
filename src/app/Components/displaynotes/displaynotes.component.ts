import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NotesService } from '../../Services/Notes/notes.service';
import { MatDialog, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { EditnotesComponent } from '../editnotes/editnotes.component';
import { DataService } from '../../Services/dataService/data.service';
import { response } from 'express';


@Component({
  selector: 'app-displaynotes',
  templateUrl: './displaynotes.component.html',
  styleUrl: './displaynotes.component.scss'
})
export class DisplaynotesComponent implements OnInit{
  // selectedColor: string = "White";
  filterNote : any;
  @Input() notesList: any;
  @Input() isTrash: boolean = false;
  @Output() refreshArchiveRefresh2 = new EventEmitter<any>();
  @Output() refreshArchiveEvent = new EventEmitter<any>();

  constructor(private noteService: NotesService, public dialog: MatDialog, private data: DataService){
  }

  ngOnInit(): void {
    this.data.incomingData.subscribe((response)=>{
      console.log("Search in Process",response);
      this.filterNote = response;
    })
  }

  openDialog(note:any) {

    if(note.isTrash === false && note.isArchive === false)
    {
      const dialogbox = this.dialog.open(EditnotesComponent,{
        data : note
      });
  
      dialogbox.afterClosed().subscribe(res =>{
        console.log('note updated', res);
        this.refreshArchiveEvent.emit(res);
       // this.refreshDataEvent.emit(res);
      });
    }
    
  }


  refreshArchiveRefresh($event:any){
    this.refreshArchiveRefresh2.emit();
  }

  // refreshDataEvent($event:any){
  // }

  // SetColor(noteID:any, color:string){
  //   this.noteService.SetNoteColor(noteID, color).subscribe((response: any)=>{
  //     console.log("Color ",response.color);
  //     this.refreshArchiveEvent.emit(response);
  //   })
  // }

  // SetArchive(noteID:any){
  //   this.noteService.SetArchive(noteID).subscribe((response:any)=>{
  //     console.log(response);
  //     this.refreshArchiveEvent.emit(response);
  //   })
  // }

  // SetTrash(noteID:any){
  //   this.noteService.SetTrashNote(noteID).subscribe((response:any)=>{
  //     console.log(response);
  //     this.refreshArchiveEvent.emit(response);
  //   })
  // }
}