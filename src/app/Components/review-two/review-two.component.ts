import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-review-two',
  templateUrl: './review-two.component.html',
  styleUrl: './review-two.component.scss'
})
export class ReviewTwoComponent implements OnInit{

  notesForm !: FormGroup;
  NotesArray: any[] = [];
  
  constructor(private formBuilder: FormBuilder){}

  ngOnInit(): void {
    this.notesForm = this.formBuilder.group({
      Title : [''],
      Notes : ['']
    })
  }
  

  AddTask(){
    let reqData = {
      Title: this.notesForm.value.Title,
      Notes : this.notesForm.value.Notes
    }
    if(reqData){
      this.NotesArray.push(reqData);
      // console.log(this.NotesArray)
    }
  }

  Remove(index:any){
    this.NotesArray.splice(index, 1);
  }

  TaskCheck(data:any, index:number){
    console.log(data,index)
    this.NotesArray[index].isChecked = !this.NotesArray[index].isChecked;
    console.log('checkbox for note:', data.Notes, 'is now:', this.NotesArray[index].isChecked);
  }
}
