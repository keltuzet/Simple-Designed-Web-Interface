import { Component, OnInit, Injectable, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { INutritionalValueViewModel } from '../../models';

@Component({
  selector: 'app-dessert-modal',
  templateUrl: './dessert-modal.component.html',
  styleUrls: ['./dessert-modal.component.scss'],
})
export class DessertModalComponent implements OnInit {
  private source: INutritionalValueViewModel;
  formGroup: FormGroup;

  constructor() {
    this.formGroup = new FormGroup({
      name: new FormControl(),
      calories: new FormControl(),
      fat: new FormControl(),
      carbs: new FormControl(),
      protein: new FormControl(),
    });
  }

  ngOnInit(): void {
    if (this.source) {
      this.formGroup.patchValue(this.source);
    }
  }

  public set Source(value: INutritionalValueViewModel) {
    this.source = value;
    this.formGroup.patchValue(this.source);
  }

  public get Source(): INutritionalValueViewModel {
    return this.source;
  }
}
