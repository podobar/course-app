import { CourseSubjectViewModel } from "./course-subject-view-model";

export class CourseViewModel {
  constructor(
    public id: number,
    public name: string,
    public description: string,
    public subjects: CourseSubjectViewModel[]
  ) {

  }
}
