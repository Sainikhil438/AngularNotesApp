import { Injectable } from '@angular/core';
import { HttpService } from '../Http/http.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  token:any;
  
  constructor(private httpService: HttpService) {
    this.token = localStorage.getItem('token');
    // this.userID = parseInt(localStorage.getItem('userID') || '0')
   }

  TakeNotes(reqData:any){
    let header={
      headers: new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization':'Bearer '+this.token
      })
    }
    return this.httpService.postServiceReset('https://localhost:44329/api/Note/Notemaking', reqData,true,header)
  }

  GetNotes(){
    let header={
      headers: new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization':'Bearer '+this.token
      })
    }
    return this.httpService.getService('https://localhost:44329/api/Note/ParticularUserId', true, header)
  }

  SetArchive(noteID:any){
    let header={
          headers: new HttpHeaders({
            'Content-Type':'application/json',
            'Authorization':'Bearer '+this.token
          })
        }
        return this.httpService.putService('https://localhost:44329/api/Note/Archive?Noteid='+noteID,{}, true, header)
  }

  UnarchiveNote(noteID:any){
    let header={
          headers: new HttpHeaders({
            'Content-Type':'application/json',
            'Authorization':'Bearer '+this.token
          })
        }
        return this.httpService.putService('https://localhost:44329/api/Note/Unarchive?Noteid='+noteID,{}, true, header)
  }

  SetTrashNote(noteID:any){
    let header={
      headers: new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization':'Bearer '+this.token
      })
    }
    return this.httpService.putService('https://localhost:44329/api/Note/Trash?Noteid='+noteID,{}, true, header)
  }

  EditNotes(reqData:any, noteId:any){
    let header={
      headers: new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization':'Bearer '+this.token
      })
    }
    return this.httpService.patchService('https://localhost:44329/api/Note/UpdateByID?id='+noteId, reqData, true, header)
  }

  SetNoteColor(noteID:any, color:string){
    let header={
      headers: new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization':'Bearer '+this.token
      })
    }
    return this.httpService.patchService('https://localhost:44329/api/Note/Colour?Noteid='+noteID+'&colour='+color,{}, true, header)
  }

  DeleteNoteForever(noteID:any){
    let header={
      headers: new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization':'Bearer '+this.token
      })
    }
    return this.httpService.deleteService('https://localhost:44329/api/Note/ByID?id='+noteID, true, header)
  }

  RestoreNote(noteID:any){
    let header={
      headers: new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization':'Bearer '+this.token
      })
    }
    return this.httpService.putService('https://localhost:44329/api/Note/Restore?Noteid='+noteID, {}, true, header);
  }
}
