import { Component, OnInit } from '@angular/core';
import employees from './data/employees.json'
import { Employee } from './Employees.model';

@Component({
  selector: 'em-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  employees: Employee[] = employees;
  filterEmployess: Employee[] = employees;
  showIcon: boolean = false;
  private _designationFilter: string = '';
  message: string = '';


  set designationFilter(value: string) {
    this._designationFilter = value;
    this.filterDesignation();
  }

  get designationFilter(): string {
    return this._designationFilter;
  }

  constructor() { }

  ngOnInit(): void {
  }

  toggleIcon() {
    this.showIcon = !this.showIcon;
  }


  filterDesignation() {
    this.filterEmployess = this.employees.filter(employee => employee.designation.includes(this.designationFilter))
  }

  getMesssageRecive(value: string) {
    this.message = value
  }

}
