import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AddModalComponent } from 'src/app/modals/add-modal/add-modal.component';
import { DeleteModalComponent } from 'src/app/modals/delete-modal/delete-modal.component';
import { EditModalComponent } from 'src/app/modals/edit-modal/edit-modal.component';
import { EmployeeService } from 'src/app/service/employee/employee.service';
import { Employee } from 'src/app/shared/employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
})
export class EmployeeComponent implements OnInit {
  data: any[] = [];

  dataservice!: EmployeeService | null;

  displayedColumns: string[] = [
    'id',
    'fullName',
    'email',
    'salary',
    'experiance',
    'department',
    'actions',
  ];
  dataSource!: MatTableDataSource<any>;
  dataTable!: any[];

  @Output() editEmployeeDialog = new EventEmitter<Employee>();
  @Output() deleteEmployeeDialog = new EventEmitter<Employee>();

  constructor(
    private employeService: EmployeeService,
    public dialogService: MatDialog
  ) {}

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort!: MatSort;
  @ViewChild('filter', { static: true }) filter!: ElementRef;

  ngOnInit() {
    this.employeService.getEmployees().subscribe((res) => {
      this.employeService.employeeUsersList.subscribe((data) => {
        this.dataTable = data;
        this.dataSource = new MatTableDataSource(this.dataTable);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  EmployeeAction(action: string, employee: any) {
    if (action === 'edit') {
      this.dialogService
        .open(EditModalComponent, {
          panelClass: 'edit-modal',
          autoFocus: false,
          data: {
            id: employee.id,
            fullName: employee.fullName,
            email: employee.email,
            salary: employee.salary,
            experiance: employee.experiance,
            department: employee.department,
          },
        })
        .afterClosed()
        .subscribe((res) => {
          if (res) {
            const message = 'Successfully changed employee';
          }

          this.employeService.getEmployees().subscribe((res) => {
            this.employeService.employeeUsersList.subscribe((data) => {
              this.dataTable = data;
              this.dataSource = new MatTableDataSource(this.dataTable);
              this.dataSource.paginator = this.paginator;
              this.dataSource.sort = this.sort;
            });
          });
        });
    }

    if (action === 'delete') {
      this.dialogService
        .open(DeleteModalComponent, {
          panelClass: 'edit-modal',
          autoFocus: false,
          data: {
            id: employee.id,
            fullName: employee.fullName,
            email: employee.email,
            salary: employee.salary,
            experiance: employee.experiance,
            department: employee.department,
          },
        })
        .afterClosed()
        .subscribe((res) => {
          if (res) {
            const message = 'Successfully changed employee';
          }

          this.dataTable = res;

          this.employeService.getEmployees().subscribe((res) => {
            this.employeService.employeeUsersList.subscribe((data) => {
              this.dataTable = data;
              this.dataSource = new MatTableDataSource(this.dataTable);
              this.dataSource.paginator = this.paginator;
              this.dataSource.sort = this.sort;
            });
          });
        });
    }
  }

  openDialogAddEmployee(): void {
    const dialogRef = this.dialogService
      .open(AddModalComponent, {
        panelClass: 'edit-modal',
        autoFocus: false,
      })
      .afterClosed()
      .subscribe((res) => {
        if (res) {
          const message = 'Successfully changed employee';
        }
      });
  }
}
