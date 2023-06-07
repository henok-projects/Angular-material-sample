import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Employee } from '../../shared/employee';
import { EmployeeService } from '../../service/employee/employee.service';

@Component({
  selector: 'app-add-modal',
  templateUrl: './add-modal.component.html',
  styleUrls: ['./add-modal.component.scss'],
})
export class AddModalComponent {
  employee!: Employee;

  form = new FormGroup({
    id: new FormControl(),
    fullName: new FormControl(),
    email: new FormControl(),
    salary: new FormControl(),
    experiance: new FormControl(),
    department: new FormControl(),
  });

  constructor(
    public dialogRef: MatDialogRef<AddModalComponent>,
    private employeeService: EmployeeService
  ) {}

  ngOnInit() {

  }

  formControl = new FormControl('', [Validators.required]);

  close(): void {
    this.dialogRef.close();
  }

  confirmAdd(): void {
    const id: number = Number(this.form.get('id')!.value);
    this.employee = new Employee(
      id,
      this.form.get('fullName')?.value,
      this.form.get('email')?.value,
      this.form.get('salary')?.value,
      this.form.get('experiance')?.value,
      this.form.get('department')?.value
    );
    this.employeeService.addEmployee(this.employee).subscribe((res) => {
      this.employeeService.getEmployees().subscribe((res) => {});
    });
  }
}
