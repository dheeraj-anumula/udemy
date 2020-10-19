import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-course-section',
  templateUrl: './course-section.component.html',
  styleUrls: ['./course-section.component.css']
})
export class CourseSectionComponent implements OnInit {

  searchForm;
  constructor(private formBuilder: FormBuilder) {
    this.searchForm = this.formBuilder.group({ search: '' })
  }

  ngOnInit(): void {
  }

  public searchCourse(searchForm) {
    console.log(searchForm.search)
  }

  addNewCourse(){
    console.log('Adding new course');
  }

}
