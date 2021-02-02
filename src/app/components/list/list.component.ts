import { FormComponent } from './../form/form.component';
import { Component, OnInit } from '@angular/core';
import { MeetingService } from 'src/app/service/meeting.service';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  displayedColumns: string[] = ['formName', 'formSubject', 'formResponsible'];
  meetings = [];
  length: number;
  totalRecordsPerPage: number = 5;
  meetingNameFind: string;
  meetingDateFind: string;
  
  constructor(
    private service: MeetingService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.findAll(0,'formDate',null);
  }


  findAll(pageNumber:number, sortField:string, filters:string){
    this.service.getAll(pageNumber,this.totalRecordsPerPage,sortField,filters).subscribe(meetingsReturn => {
          this.meetings =  meetingsReturn['meeting'];
          this.length = meetingsReturn['page'].size;
      }, error => {
        this.meetings = [];
        console.log('Error ',error);
        console.log('Error status ',error.status);
        console.log('Error error ',error.error);
        console.log('Error headers ',error.headers);
      });
  }
}