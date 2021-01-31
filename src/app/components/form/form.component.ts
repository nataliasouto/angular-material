import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  public meetingForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<FormComponent>,
   // @Inject(MAT_DIALOG_DATA) public data: string
  ) { }

  ngOnInit(): void {
    this.meetingForm =  this.fb.group({
      id : [null],
      formName : ['',Validators.required],
      formSubject : ['',Validators.required],
      formResponsible : ['',Validators.required],
      formDate : ['',Validators.required],
      formTime : ['',Validators.required]
    });
  }

  cancel(): void {
    this.dialogRef.close();

  }
}
