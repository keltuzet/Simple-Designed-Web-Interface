import {
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
} from '@angular/core';
import { Validators } from '@angular/forms';
import { CustomValidator } from '@shared/const';
import { ExtendedFormGroup, ExtendedFormControl } from '@shared/models';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent
  implements
    DoCheck,
    OnInit,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked {
  formGroup = new ExtendedFormGroup({
    name: new ExtendedFormControl('', [
      Validators.required,
      CustomValidator.forbiddenWords(['fuck', 'dick', 'bitch']),
    ]),
    email: new ExtendedFormControl('', [
      CustomValidator.email,
      CustomValidator.forbiddenWords(['fuck', 'dick', 'bitch']),
    ]),
    password: new ExtendedFormControl(''),
    confirmPassword: new ExtendedFormControl(''),
  });

  @Input() id: number;
  @Input() name: string;

  constructor() {}

  // ngOnChanges(changes: SimpleChanges): void {
  //   console.log(JSON.stringify(changes, null, 2));
  // }

  ngOnInit(): void {
    console.log('Child:OnInit');
    // console.log(this.id + 233);
    // console.log(this.name + 'asd');
    // setTimeout(() => {}, 1000);
  }

  ngDoCheck(): void {
    console.log('Child:ngDoCheck');
  }

  ngAfterContentInit(): void {
    console.log('Child:AfterContentInit');
  }

  ngAfterContentChecked(): void {
    console.log('Child:AfterContentChecked');
  }

  ngAfterViewInit(): void {
    // console.log('Child:AfterViewInit');
  }

  ngAfterViewChecked(): void {
    console.log('Child:AfterViewChecked');
  }
}
