import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit {

  departments = [
    {"id": 1, "name": 'Marketing'},
    {"id": 2, "name": 'Accounting'},
    {"id": 3, "name": 'Expansion'},
    {"id": 4, "name": 'Call Center'},
    {"id": 5, "name": 'Human Resources'}
  ];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onSelect(department){
    this.router.navigate(['/departments', department.id]);
  }

}