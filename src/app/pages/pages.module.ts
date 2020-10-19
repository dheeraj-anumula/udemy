import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from './courses/courses.component';
import { CourseComponent } from './courses/course/course.component';
import { CourseSectionComponent } from './courses/course-section/course-section.component';
import { FormBuilder, FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    CoursesComponent,
    CourseComponent,
    CourseSectionComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [CoursesComponent]
})
export class PagesModule { }
