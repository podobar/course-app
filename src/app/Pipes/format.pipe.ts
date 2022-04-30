import { Pipe, PipeTransform } from "@angular/core";
import { CourseSubjectViewModel } from "../Data/course-subject-view-model";

@Pipe({ name: 'format' })
export class FormatPipe implements PipeTransform {

  transform(subjects: CourseSubjectViewModel[]): string {
    if (subjects && subjects.length > 0)
      return subjects.map(subject => subject.name).join(', ');
    return "";
  }
}
