import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { DessertService } from './dessert.service';
import { Icons } from './const';
import { AccountTableColumns, DessertTableColumns } from '../../shared/const';
import { AccountData } from '../../shared/data';
import { IAccountView, INutritionalValueViewModel } from '../../shared/models';
import { CustomInputTypeEnum } from '../../shared/enums';

@Component({
  selector: 'app-dessert',
  templateUrl: './dessert.component.html',
  styleUrls: ['./dessert.component.scss'],
})
export class DessertComponent implements OnInit {
  DessertTableColumns = DessertTableColumns;
  AccountTableColumns = AccountTableColumns;
  desserts: INutritionalValueViewModel[];
  dessertTableFilters: CustomInputTypeEnum[] = [
    CustomInputTypeEnum.Text,
    CustomInputTypeEnum.Number,
    CustomInputTypeEnum.Number,
    CustomInputTypeEnum.Number,
    CustomInputTypeEnum.Number,
  ];
  AccountData: IAccountView[] = AccountData;

  filterForm: FormGroup = new FormGroup({
    name: new FormControl(),
    calories: new FormControl(),
    fat: new FormControl(),
    carbs: new FormControl(),
    protein: new FormControl(),
  });

  rowForm: FormGroup = new FormGroup({
    name: new FormControl(),
    calories: new FormControl(''),
    fat: new FormControl(),
    carbs: new FormControl(),
    protein: new FormControl(),
  });

  icons = Icons;
  isBeingEdited = false;
  editRowIndex: number;
  currentPage = 3;

  constructor(private dessertService: DessertService) {}

  resetEditRowIndex(): void {
    this.editRowIndex = null;
  }

  ngOnInit(): void {
    this.getDesserts();
    this.filterForm.valueChanges.subscribe((value) => console.log(value));
  }

  getDesserts(): void {
    this.dessertService
      .getDesserts()
      .subscribe((desserts) => (this.desserts = desserts));
  }

  toggle(): void {
    this.isBeingEdited = !this.isBeingEdited;
  }

  handleShowEditModel(rowIndex: number, desset: INutritionalValueViewModel): void {
    if (this.editRowIndex === null || this.editRowIndex === undefined) {
      console.log('no');
      this.editRowIndex = rowIndex;
      this.rowForm.patchValue(desset);
    }
  }

  handleDeleteDessert(id: number): void {
    this.dessertService.deleteDessert(id).subscribe(() => this.getDesserts());
  }

  handleCancelEdit(): void {
    this.editRowIndex = null;
  }

  handleUpdateRow(id: number): void {
    this.editRowIndex = null;
    const dessert: INutritionalValueViewModel = {
      id,
      ...this.rowForm.getRawValue()
    };
    this.dessertService.editDessert(dessert).subscribe(() => {
      this.getDesserts();
    });
  }
}
