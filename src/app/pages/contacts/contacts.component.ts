import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  formGroup = new FormGroup({
    name: new FormControl('name'),
    email: new FormControl('email'),
  });

  constructor() { }

  ngOnInit(): void {
  }

  getError() {
    // return this.formGroup.errors;
    return 'Validity error errorerrorerrorerrorerrorerrorerrorerrorerror';
  }
}
