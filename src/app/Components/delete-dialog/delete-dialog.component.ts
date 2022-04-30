import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CourseViewModel } from '../../Data/course-view-model';

@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html'
})
export class DeleteDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<CourseViewModel>,
    @Inject(MAT_DIALOG_DATA) public data: CourseViewModel
  ) { }

  ngOnInit(): void {
  }

}
