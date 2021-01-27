import { FormComponent } from './../form/form.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    public dialog: MatDialog
  ) { }

  addForm() {
    const dialogRef = this.dialog.open(FormComponent, {width: '500px'
  });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Fechar');
    });
  }
  
  ngOnInit(): void {
  }

}
