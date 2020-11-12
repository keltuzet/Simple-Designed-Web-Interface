import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  ComponentFactoryResolver,
  ElementRef,
  EmbeddedViewRef,
  Injector,
  OnInit,
  TemplateRef,
  ViewChild,
  ViewChildren,
  ViewContainerRef,
  ViewRef,
} from '@angular/core';
import {
  FormControl,
  FormControlName,
  NgControl,
  Validators,
} from '@angular/forms';
import { DessertService } from '@pages/dessert/dessert.service';
import { CustomValidator } from '@shared/const';
import { ExtendedFormGroup, ExtendedFormControl } from '@shared/models';
import {
  ConnectableObservable,
  from,
  interval,
  Observable,
  Subject,
} from 'rxjs';
import { MulticastOperator } from 'rxjs/internal/operators/multicast';
import { animationFrame } from 'rxjs/internal/scheduler/animationFrame';
import { asap } from 'rxjs/internal/scheduler/asap';
import { async } from 'rxjs/internal/scheduler/async';
import { queue } from 'rxjs/internal/scheduler/queue';
import { mapTo, multicast, publish, take, tap } from 'rxjs/operators';
import { startWith } from 'rxjs/internal/operators';
import { ChildComponent } from './components/child/child.component';
import { ContactsService } from './contacts.service';
import { CompletedDirective } from './directives/completed.directive';
import moment from 'moment';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
})
export class ContactsComponent implements OnInit, AfterViewInit {
  formGroup = new ExtendedFormGroup({
    firstName: new ExtendedFormControl('', [
      Validators.required,
      CustomValidator.personName(true),
    ]),
    lastName: new ExtendedFormControl('', [CustomValidator.personName()]),
    email: new ExtendedFormControl('', [
      CustomValidator.email,
      CustomValidator.forbiddenWords(['fuck', 'dick', 'bitch']),
    ]),
    phoneNumber: new ExtendedFormControl(),
    comment: new ExtendedFormControl(
      '',
      CustomValidator.forbiddenWords(['fuck', 'dick', 'bitch'])
    ),
    count: new ExtendedFormControl(34),
    gender: new ExtendedFormControl(3),
    date: new ExtendedFormControl('1995-12-31'),
    time: new ExtendedFormControl(new Date('1995-12-31T01:02')),
  });

  customPattern = {
    M: {
      symbol: 'X',
      pattern: new RegExp('[0-9]'),
    },
  };

  options = [
    { val: 0, viewValue: '34' },
    { val: 1, viewValue: 'milk' },
    { val: 3, viewValue: 'beer' },
    { val: 4, viewValue: 'apple' },
    { val: 5, viewValue: 'orange' },
    { val: 6, viewValue: 'cheese' },
    { val: 7, viewValue: 'chocolate' },
    { val: 8, viewValue: 'apple juice' },
    { val: 9, viewValue: 'water' },
    { val: 10, viewValue: 'limon' },
  ];
  currentId = 214;
  currentName = 'Jhon';
  bool = true;

  @ViewChild('book', { read: TemplateRef }) book: TemplateRef<any>;
  @ViewChild('view', { read: ViewContainerRef }) view: ViewContainerRef;
  @ViewChild('control', { read: FormControlName }) control: FormControlName;
  @ViewChild(CompletedDirective) direct: CompletedDirective;
  @ViewChild(ChildComponent) child: ChildComponent;

  constructor(
    private componentFactory: ComponentFactoryResolver,
    private injector: Injector,
    private service: ContactsService
  ) {
    this.currentId = 13;
  }

  ngOnInit(): void {
    this.formGroup.controls.gender.valueChanges.subscribe(vl => console.log(vl));
    // from(['Async:b', 'Async:c', 'Async:d'])
    //   .pipe(startWith('Async scheduler', async))
    //   .subscribe((vl) => {
    //     console.log(vl);
    //     from(['Asap:b', 'Asap:c', 'Asap:d'])
    //       .pipe(startWith('Asap scheduler', asap))
    //       .subscribe((val) => console.log(val));
    //   });
    // from(['b', 'c', 'd'])
    // .pipe(startWith('Queue scheduler', queue))
    // .subscribe((vl) => {
    //   console.log(vl);
    // });
    // const subject = new Subject();
    // const multicasted: any = from([2, 4, 6]).pipe(multicast(subject));
    // multicasted.subscribe(vl => console.log(`1st: ${vl}`));
    // multicasted.subscribe(vl => console.log(`2nd: ${vl}`));
    // multicasted.connect();
    // const o = new Observable((sub) => {
    //   sub.next(1);
    //   setTimeout(() => {
    //     sub.next(2);
    //     // sub.complete();
    //   }, 520);
    //   setTimeout(() => {
    //     // sub.error(3);
    //   }, 530);
    // });
    // const multicasted: any = from(o).pipe(multicast(subject));
    // multicasted.subscribe(
    //   (a) => console.log(a),
    //   (er) => console.log(er),
    //   () => console.log('complete')
    // );
    // setTimeout(() => {
    //   o.subscribe(
    //     (b) => console.log(b),
    //     (er) => console.log(er),
    //     () => console.log('complete')
    //   );
    //   multicasted.connect();
    // }, 1500);
  }

  ngAfterViewInit(): void {
    // console.log(this.book);
    // console.log(this.view);
    // console.log(this.control);
    // console.log(this.direct);
    // console.log(this.child);
    // console.log(this.service);
    // setTimeout(() => {
    //   let localview = this.book.createEmbeddedView({
    //     title: '1 title',
    //     description: '1 description'
    //   });
    //   this.view.insert(localview);
    //   // localview = this.book.createEmbeddedView({
    //   //   title: '2 title',
    //   //   description: '2 description'
    //   // });
    //   console.log(this.empty);
    //   this.empty.createEmbeddedView(this.book, {
    //     title: 'via ViewContainerRef title',
    //     description: 'via ViewContainerRef description'
    //   }, 0);
    //   // this.view.insert(localview);
    //   // this.empty.insert(localview);
    //   const factory = this.componentFactory.resolveComponentFactory(ChildComponent);
    //   const componentRef = factory.create(this.injector);
    //   this.view.insert(componentRef.hostView, 0);
    // });
  }

  addBook(): void {}

  handleShow(): void {
    console.log(this.service.users);
  }

  handleAdd(): void {
    this.service.addUser(Math.random().toString());
  }
}
