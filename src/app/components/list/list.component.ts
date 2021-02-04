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
  displayedColumns: string[] = ['formName', 'formSubject', 'formResponsible', 'formDate', 'formTime', 'action'];
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
      }, err => {
        this.meetings = [];
        console.log('Erro ', err);
        console.log('Erro status ',err.status);
        console.log('Erro error ',err.error);
        console.log('Erro headers ',err.headers);
      });
  }
}