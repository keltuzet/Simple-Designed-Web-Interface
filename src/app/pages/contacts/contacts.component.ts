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
import { Validators } from '@angular/forms';
import { DessertService } from '@pages/dessert/dessert.service';
import { CustomValidator } from '@shared/const';
import { ExtendedFormGroup, ExtendedFormControl } from '@shared/models';
import { ChildComponent } from './components/child/child.component';
import { ContactsService } from './contacts.service';
import { CompletedDirective } from './directives/completed.directive';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
})
export class ContactsComponent implements OnInit, AfterViewInit {
  formGroup = new ExtendedFormGroup({
    firstName: new ExtendedFormControl('', [
      Validators.required,
      CustomValidator.forbiddenWords(['fuck', 'dick', 'bitch']),
    ]),
    lastName: new ExtendedFormControl('', [
      CustomValidator.forbiddenWords(['fuck', 'dick', 'bitch']),
    ]),
    email: new ExtendedFormControl('', [
      CustomValidator.email,
      CustomValidator.forbiddenWords(['fuck', 'dick', 'bitch']),
    ]),
    comment: new ExtendedFormControl(
      '',
      CustomValidator.forbiddenWords(['fuck', 'dick', 'bitch'])
    ),
  });

  currentId = 214;
  currentName = 'Jhon';
  bool = true;

  @ViewChild('book', { read: TemplateRef }) book: TemplateRef<any>;
  @ViewChild('view', { read: ViewContainerRef }) view: ViewContainerRef;
  @ViewChild('free', { read: ViewContainerRef }) empty: ViewContainerRef;
  @ViewChild(CompletedDirective) direct: CompletedDirective;
  @ViewChild(ChildComponent) child: ChildComponent;
  // @ViewChildren(DessertService) service: DessertService;

  constructor(
    private componentFactory: ComponentFactoryResolver,
    private injector: Injector,
    private service: ContactsService
  ) {
    this.currentId = 13;
  }

  ngOnInit(): void {
    // this.currentId = 1;
    // setTimeout(() => {}, 2000);
    // setTimeout(() => {
    //   // this.currentId = 155;
    // }, 2000);
  }

  ngAfterViewInit(): void {
    // console.log(this.book);
    // console.log(this.view);
    // console.log(this.empty);
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
