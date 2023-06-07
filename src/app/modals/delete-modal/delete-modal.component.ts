import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { EmployeeService } from 'src/app/service/employee/employee.service';

@Component({
  selector: 'app-delete-modal',
  templateUrl: './delete-modal.component.html',
  styleUrls: ['./delete-modal.component.scss'],
})
export class DeleteModalComponent {
  id!: number;
  fullName!: string;
  email!: string;
  salary!: number;
  experiance!: number;
  department!: string;

  employees: any;

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
    public dialogRef: MatDialogRef<DeleteModalComponent>,
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
    if (this.id != null) {
      this.form.get('id')?.setValue(this.id);
      this.form.get('id')?.disable();
    }

    if (this.fullName != null) {
      this.form.get('fullName')?.setValue(this.fullName);
      this.form.get('fullName')?.disable();
    }

    if (this.email != null) {
      this.form.get('email')?.setValue(this.email);
      this.form.get('email')?.disable();
    }

    if (this.salary != null) {
      this.form.get('salary')?.setValue(this.salary);
      this.form.get('salary')?.disable();
    }

    if (this.experiance != null) {
      this.form.get('experiance')?.setValue(this.experiance);
      this.form.get('experiance')?.disable();
    }

    if (this.department != null) {
      this.form.get('department')?.setValue(this.department);
      this.form.get('department')?.disable();
    }
  }

  deleteItem(): void {
    this.employeeService.deleteEmployee(this.id).subscribe((data) => {
      this.dialogRef.close(data);
    });
  }

  close(): void {
    this.dialogRef.close();
  }
}
