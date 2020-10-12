import { Component, OnInit } from '@angular/core';
import { ContactsService } from '@pages/contacts/contacts.service';
import { DessertService } from '@pages/dessert/dessert.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
  // viewProviders: [ContactsService]
})
export class ChildComponent implements OnInit {
  text = 'dasd';

  constructor(private service: ContactsService) { }

  ngOnInit(): void {
  }

  handleShow(): void {
    console.log(this.service.users);
  }

  handleAdd(): void {
    this.service.addUser(Math.random().toString());
  }
}
