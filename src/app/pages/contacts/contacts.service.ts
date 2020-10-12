import { Injectable } from '@angular/core';
import { ChildComponent } from './components/child/child.component';
import { ChildModule } from './components/child/child.module';
import { ContactsModule } from './contacts.module';

@Injectable()
export class ContactsService {
 users: string[] = [];

  constructor() { }

  addUser(user: string): void {
    this.users.push(user);
  }
}
