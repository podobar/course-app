import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatDrawer } from '@angular/material/sidenav';
import { Subscription } from 'rxjs';
import { CourseSubjectViewModel } from '../../Data/course-subject-view-model';
import { CourseViewModel } from '../../Data/course-view-model';
import { CourseService } from '../../Services/course.service';
import { DeleteDialogComponent } from '../delete-dialog/delete-dialog.component';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html'
})
export class CourseListComponent implements OnDestroy {
  @ViewChild('drawer', { static: true }) drawer!: MatDrawer;
  public courses: CourseViewModel[] = [];
  public possibleSubjects: CourseSubjectViewModel[] = [];
  public editedCourseId: number = -1;
  public createEditForm: FormGroup;
  public name: FormControl;
  public description: FormControl;
  public subjects: FormControl;

  private coursesSub: Subscription;
  private subjectsSub: Subscription;
  constructor(
    private courseService: CourseService,
    public dialog: MatDialog
  ) {
    this.coursesSub = this.courseService.getAvailableCourses().subscribe((courses: CourseViewModel[]) => {
      this.courses = courses;
    });
    this.subjectsSub = this.courseService.getPossibleSubjects().subscribe((subjects: CourseSubjectViewModel[]) => {
      this.possibleSubjects = subjects;
    })
    this.name = new FormControl();
    this.description = new FormControl();
    this.subjects = new FormControl();
    this.createEditForm = new FormGroup({ "name": this.name, "description": this.description, "subjects": this.subjects });
  }

  onCreate() {
    this.editedCourseId = -1;
    this.createEditForm.reset();
    this.createEditForm.markAsPristine();
    this.createEditForm.markAsUntouched();

    this.drawer.toggle();
  }

  onEdit(id: number) {
    this.courseService.getCourse(id).subscribe((course: CourseViewModel) => {
      this.editedCourseId = id;
      this.name.setValue(course.name);
      this.description.setValue(course.description);
      this.subjects.setValue(course.subjects);
      this.drawer.toggle();
    });
  }

  onDelete(id: number) {
    this.courseService.getCourse(id).subscribe((course: CourseViewModel) => {
      const dialogRef = this.dialog.open(DeleteDialogComponent, { data: course });

      dialogRef.afterClosed().subscribe(result => {
        console.log(result);
      });
    });
  }

  onSubmit() {

    //if successful
    this.editedCourseId = -1;
  }

  onCancel() {
    this.drawer.close();
  }

  ngOnDestroy() {
    this.coursesSub.unsubscribe();
    this.subjectsSub.unsubscribe();
  }

}
