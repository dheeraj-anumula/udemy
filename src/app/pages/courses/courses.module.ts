import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from './courses.component';
import { CourseComponent } from './course/course.component';
import { CourseSectionComponent } from './course-section/course-section.component';



@NgModule({
  declarations: [CoursesComponent, CourseComponent, CourseSectionComponent],
  imports: [
    CommonModule
  ]
})
export class CoursesModule { }
