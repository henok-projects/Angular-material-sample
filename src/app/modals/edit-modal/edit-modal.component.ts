import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { EmployeeService } from 'src/app/service/employee/employee.service';
import { Employee } from 'src/app/shared/employee';

@Component({
  selector: 'app-edit-modal',
  templateUrl: './edit-modal.component.html',
  styleUrls: ['./edit-modal.component.scss'],
})
export class EditModalComponent {
  id!: number;
  fullName!: string;
  email!: string;
  salary!: number;
  experiance!: number;
  department!: string;
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
    @Inject(MAT_DIALOG_DATA)
    public data: {
      id: number;
      fullName: string;
      email: string;
      salary: number;
      experiance: number;
      department: string;
    },
    public dialogRef: MatDialogRef<EditModalComponent>,
    private employeeService: EmployeeService
  ) {
    this.id = data.id;
    this.fullName = data.fullName;
    this.email = data.email;
    this.salary = data.salary;
    this.experiance = data.experiance;
    this.department = data.department;
  }

  ngOnInit() {
    this.form.get('id')?.setValue(this.id);
    this.form.get('id')?.disable();
    this.form.get('fullName')?.setValue(this.fullName);
    this.form.get('email')?.setValue(this.email);
    this.form.get('salary')?.setValue(this.salary);
    this.form.get('experiance')?.setValue(this.experiance);
    this.form.get('department')?.setValue(this.department);
  }

  close(): void {
    this.dialogRef.close();
  }

  editItem(): void {
    this.employee = new Employee(
      this.id,
      this.form.get('fullName')?.value,
      this.form.get('email')?.value,
      this.form.get('salary')?.value,
      this.form.get('experiance')?.value,
      this.form.get('department')?.value
    );

    this.employeeService.editEmployee(this.employee).subscribe((data) => {
      this.dialogRef.close(data);
    });
  }
}
