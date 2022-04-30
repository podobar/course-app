import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { CourseSubjectViewModel } from "../Data/course-subject-view-model";
import { CourseViewModel } from "../Data/course-view-model";

@Injectable()
export class CourseService {
  private mockedSubjects: CourseSubjectViewModel[] = [
    new CourseSubjectViewModel(1, "Subject1 name max. 40 characters length.", 12345),
    new CourseSubjectViewModel(2, "Subject2 name max. 40 characters length.", 54345),
    new CourseSubjectViewModel(3, "Subject3 name max. 40 characters length.", 66666),
    new CourseSubjectViewModel(4, "Subject4 name max. 40 characters length.", 77777),
  ]
  private mockedCourses: CourseViewModel[] = [
    new CourseViewModel(
      1,
      "Course1 name max 30 characters","opis",
      //"1Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      this.mockedSubjects
    ), 
    new CourseViewModel(
      2,
      "Course2 name max 30 characters","opis",
      //"2Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      this.mockedSubjects
    ), 
    new CourseViewModel(
      3,
      "Course3 name max 30 characters","opis",
      //"3Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      this.mockedSubjects
    ), 
  ];

  public getCourse(id: number): Observable<CourseViewModel> {
    return of(this.mockedCourses[0]);
  }

  public getAvailableCourses(): Observable<CourseViewModel[]> {
    return of(this.mockedCourses);
  }

  public getPossibleSubjects(): Observable<CourseSubjectViewModel[]> {
    return of(this.mockedSubjects);
  }

  public getSubject(id: number): Observable<CourseSubjectViewModel> {
    return of(this.mockedSubjects[0]);
  }
}
