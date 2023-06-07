import { InMemoryDbService } from 'angular-in-memory-web-api';

export class EmployeeUserData implements InMemoryDbService {
  createDb() {
    return {
      employees: [
        {
          id: 1,
          fullName: 'Henok Addis',
        },
        {
          id: 2,
          fullName: 'Abyalew Addis',
        },
        {
          id: 3,
          fullName: 'Habtamu Addis',
        },
        {
          id: 4,
          fullName: 'Teda Addis',
        },
        {
          id: 5,
          fullName: 'Samual Addis',
        },
        {
          id: 6,
          fullName: 'Tariku Addis',
        },
        {
          id: 7,
          fullName: 'Abe Addis',
        },
        {
          id: 8,
          fullName: 'Henok Addis',
        },
        {
          id: 9,
          fullName: 'Alex Addis',
        },
        {
          id: 10,
          fullName: 'Henok2 Addis',
        },
        {
          id: 11,
          fullName: 'Henokk1 Addis',
        },
      ],
    };
  }
}
