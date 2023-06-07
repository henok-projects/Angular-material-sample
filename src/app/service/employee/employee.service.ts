import { ErrorHandler, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../../shared/employee';
import { BehaviorSubject, Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private employeeUrl = 'api/employees';

  constructor(private http: HttpClient) {}

  private employDataStore: { groups: Employee[] } = {
    groups: [],
  };

  private _employeeUsersList: BehaviorSubject<Employee[]> =
    new BehaviorSubject<any>(null);

  public readonly employeeUsersList: Observable<any> =
    this._employeeUsersList.asObservable();

  getEmployees(): Observable<any> {
    return this.http.get<any>(this.employeeUrl).pipe(
      map((data: any) => {
        let emp = [];
        emp.push(data);
        this.employDataStore.groups.push(data);
        this._employeeUsersList.next(data);
        return data;
      })
    );
  }

  deleteEmployee(id: number): Observable<any> {
    let deleteUrl = `${this.employeeUrl}/${id}`;
    return this.http.delete<any>(deleteUrl).pipe(
      map((res) => {
        let index = this._employeeUsersList.value.findIndex(
          (data) => data.id === id
        );

        this._employeeUsersList.value.splice(index, 1);
        let emp = this._employeeUsersList;
        this._employeeUsersList = emp;
        return emp.value;
      })
    );
  }

  addEmployee(employee: Employee): Observable<Employee> {
    return this.http.post<any>(this.employeeUrl, employee).pipe(
      map((data: any) => {
        let emp = [];
        emp.push(data);

        this.employDataStore.groups.forEach((entry, i) => {
          if (entry.id === employee.id) {
            this.employDataStore.groups.push();
          }
        });

        this.employDataStore.groups.push(employee);
        this._employeeUsersList.next(emp);

        return data;
      })
    );
  }

  editEmployee(employee: Employee): Observable<any> {
    let updateUrl = `${this.employeeUrl}/${employee.id}`;
    return this.http.put<any>(updateUrl, employee).pipe(
      map((data) => {
        this.employDataStore.groups.forEach((entry, i) => {
          if (entry.id === employee.id) {
            var updateEntry = entry;
            updateEntry.id = employee.id;
            updateEntry.fullName = employee.fullName;
            updateEntry.email = employee.email;
            updateEntry.salary = employee.salary;
            updateEntry.experiance = employee.experiance;
            updateEntry.department = employee.department;

            this.employDataStore.groups[i] = updateEntry;
          }
          this._employeeUsersList.next(
            Object.assign({}, this.employDataStore).groups
          );
        });

        return data;
      })
    );
  }
}
