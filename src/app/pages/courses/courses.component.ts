import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/models/course/courseModel';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  courses: Course[]

  constructor() { }

  ngOnInit(): void {
    this.courses = [
      new Course('1', 'Video Course', new Date(), 128, 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, tempore veritatis quo nisi fuga iste vitae atque ab eum asperiores libero. Aliquam recusandae officiis quos velit unde dolorum culpa voluptate?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate debitis repellendus corporis quasi tenetur hic nesciunt. Iste, consequuntur sapiente, labore provident molestiae fugiat doloremque.'),
      new Course('2', 'Video Course', new Date(), 780, 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, tempore veritatis quo nisi fuga iste vitae atque ab eum asperiores libero. Aliquam recusandae officiis quos velit unde dolorum culpa voluptate?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate debitis repellendus corporis quasi tenetur hic nesciunt. Iste, consequuntur sapiente, labore provident molestiae fugiat doloremque placeat, quia voluptas voluptate ab ratione.'),
      new Course('3', 'Video Course', new Date(), 190, 'Lorem ipsum dolor sit amet consectetur adipis vitae atque ab eum asperiores libero. Aliquam recusandae officiis quos velit unde dolorum culpa voluptate?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate debitis repellendus corporis quasi tenetur hic nesciunt. Iste, consequuntur sapiente, labore provident molestiae fugiat doloremque placeat, quia voluptas voluptate ab ratione.'),
      new Course('1', 'Video Course', new Date(), 128, 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, tempore veritatis quo nisi fuga iste vitae atque ab eum asperiores libero. Aliquam recusandae officiis quos velit unde dolorum culpa voluptate?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate debitis repellendus corporis quasi tenetur hic nesciunt. Iste, consequuntur sapiente, labore provident molestiae fugiat doloremque.'),
      new Course('2', 'Video Course', new Date(), 780, 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, tempore veritatis quo nisi fuga iste vitae atque ab eum asperiores libero. Aliquam recusandae officiis quos velit unde dolorum culpa voluptate?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate debitis repellendus corporis quasi tenetur hic nesciunt. Iste, consequuntur sapiente, labore provident molestiae fugiat doloremque placeat, quia voluptas voluptate ab ratione.'),
      new Course('3', 'Video Course', new Date(), 190, 'Lorem ipsum dolor sit amet consectetur adipis vitae atque ab eum asperiores libero. Aliquam recusandae officiis quos velit unde dolorum culpa voluptate?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate debitis repellendus corporis quasi tenetur hic nesciunt. Iste, consequuntur sapiente, labore provident molestiae fugiat doloremque placeat, quia voluptas voluptate ab ratione.')
    ]
  }

  loadMore() {
    console.log('Loading more courses...');
  }

  deleteCourse(id){
    console.log('Deleting course ', id);
  }

  editCourse(id){
    console.log('Editing course ', id);
  }

}
