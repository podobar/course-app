import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDrawer } from '@angular/material/sidenav';
import { Subscription } from 'rxjs';
import { CourseSubjectViewModel } from '../../Data/course-subject-view-model';
import { CourseService } from '../../Services/course.service';

@Component({
  selector: 'app-subject-list',
  templateUrl: './subject-list.component.html'
})
export class SubjectListComponent implements OnDestroy {
  @ViewChild('drawer', { static: true }) drawer!: MatDrawer;
  public editedSubjectId: number = -1;
  public possibleSubjects: CourseSubjectViewModel[] = [];
  private subjectsSub: Subscription;

  public createEditForm: FormGroup;
  public name: FormControl;
  public number: FormControl;

  constructor(private courseService: CourseService) {
    this.subjectsSub = this.courseService.getPossibleSubjects().subscribe((subjects: CourseSubjectViewModel[]) => {
      this.possibleSubjects = subjects;
    });
    this.name = new FormControl();
    this.number = new FormControl();
    this.createEditForm = new FormGroup({ "name": this.name, "number": this.number });
  }

  onEdit(id: number) {
    this.courseService.getSubject(id).subscribe((subject: CourseSubjectViewModel) => {
      this.editedSubjectId = id;
      this.name.setValue(subject.name);
      this.number.setValue(subject.number);
      this.drawer.toggle();
    });
  }

  onSubmit() {

    //if successful
    this.editedSubjectId = -1;
  }

  onCancel() {
    this.drawer.close();
  }

  ngOnDestroy() {
    this.subjectsSub.unsubscribe();
  }



}
