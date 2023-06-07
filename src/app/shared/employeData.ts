import { InMemoryDbService } from 'angular-in-memory-web-api';

export class EmployeeData implements InMemoryDbService {
  createDb() {
    return {
      employees: [
        {
          id: 1,
          fullName: 'Henok Addis',
          email: 'henokaddis72@gmail.com',
          salary: 50000,
          experiance: 13,
          department: 'Software Engineer',
        },
        {
          id: 2,
          fullName: 'Abyalew Addis',
          email: 'henokaddis72@gmail.com',
          salary: 50000,
          experiance: 5,
          department: 'Software Engineer',
        },
        {
          id: 3,
          fullName: 'Habtamu Addis',
          email: 'henokaddis72@gmail.com',
          salary: 50000,
          experiance: 6,
          department: 'Software Engineer',
        },
        {
          id: 4,
          fullName: 'Teda Addis',
          email: 'henokaddis72@gmail.com',
          salary: 50000,
          experiance: 9,
          department: 'Computer Engineer',
        },
        {
          id: 5,
          fullName: 'Samual Addis',
          email: 'henokaddis72@gmail.com',
          salary: 50000,
          experiance: 3,
          department: 'IT ',
        },
        {
          id: 6,
          fullName: 'Tariku Addis',
          email: 'henokaddis72@gmail.com',
          salary: 50000,
          experiance: 4,
          department: 'Software Engineer',
        },
        {
          id: 7,
          fullName: 'Abe Addis',
          email: 'henokaddis@gmail.com',
          salary: 50000,
          experiance: 2,
          department: 'Software Engineer',
        },
        {
          id: 8,
          fullName: 'Henok Addis',
          email: 'henokaddis72@gmail.com',
          salary: 50000,
          experiance: 8,
          department: 'Software Engineer',
        },
        {
          id: 9,
          fullName: 'Alex Addis',
          email: 'henokaddis72@gmail.com',
          salary: 20000,
          experiance: 3,
          department: 'Software Engineer',
        },
        {
          id: 10,
          fullName: 'Henok2 Addis',
          email: 'henokaddis72@gmail.com',
          salary: 10000,
          experiance: 8,
          department: 'Computer Science',
        },
        {
          id: 11,
          fullName: 'Henokk1 Addis',
          email: 'henokaddis72@gmail.com',
          salary: 30000,
          experiance: 5,
          department: 'Electrical Engineer',
        },
      ],
    };
  }
}
