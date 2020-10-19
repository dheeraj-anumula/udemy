import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Course } from 'src/app/models/course/courseModel';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  @Input() course: Course;
  @Output() deleteCourse = new EventEmitter<string>();
  @Output() editCourse = new EventEmitter<string>();

  displayCreationDate: string;
  displayDuration: string;

  constructor() { }
  
  // ngOnChanges() {
  //   console.log('ngOnChanges')
  // }

  ngOnInit(): void {
    console.log('ngOninit');
    const creationDate = this.course.creationDate;
    const dd = String(creationDate.getDate()).padStart(2, '0');
    const mm = String(creationDate.getMonth() + 1).padStart(2, '0'); //January is 0!
    const yyyy = creationDate.getFullYear();

    this.displayCreationDate = mm + '/' + dd + '/' + yyyy;

    const durationInHours = Math.floor(this.course.duration / 60);
    const durationInMintues = this.course.duration % 60;

    this.displayDuration = `${durationInHours}h ${durationInMintues}min`
  }

  // ngDoCheck(){
  //   console.log('ngDoCheck');
  // }

  // ngAfterContentInit(){
  //   console.log('ngAfterContentInit');

  // }

  // ngAfterContentChecked(){
  //   console.log('ngAfterContentChecked');
  // }

  // ngAfterViewInit(){
  //   console.log('ngAfterViewInit');
  // }

  // ngAfterViewChecked(){
  //   console.log('ngAfterViewChecked');
  // }

  // ngOnDestroy(){
  //   console.log('ngOnDestroy');
  // }

  handleDeleteCourse(id: string) {
    this.deleteCourse.emit(id);
  }

  handleEditCourse(id: string) {
    this.editCourse.emit(id);
  }
}
