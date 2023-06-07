import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-user',
  templateUrl: './employee-user.component.html',
  styleUrls: ['./employee-user.component.scss'],
})
export class EmployeeUserComponent implements OnInit {
  filterValue: any;

  constructor() {}

  ngOnInit(): void {}
}
