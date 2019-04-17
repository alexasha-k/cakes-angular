import { Component, OnInit, Inject, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

export interface DialogData {
  cakeFillingsSelected: string;
  cakeSizesSelected: string;
  cakeDecoratingSelected: string;
}

@Component({
  selector: 'app-order-dialog',
  templateUrl: './order-dialog.component.html',
  styleUrls: ['./order-dialog.component.scss']
})
export class OrderDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<OrderDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private fb: FormBuilder
  ) { }

  orderForm = this.fb.group({
    name: ['', Validators.required],
    phone: ['', Validators.required],
    address: this.fb.group({
      street: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zip: ['', Validators.required]
    }),
    message: [''],
    orderDetails: this.fb.group({
      cakeFillingsSelected: [{value: data.cakeFillingsSelected, disabled: true}, Validators.required],
      cakeSizesSelected: [{value: data.cakeSizesSelected, disabled: true}, Validators.required],
      cakeDecoratingSelected: [{value: data.cakeDecoratingSelected, disabled: true}, Validators.required],
    })
  });

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    if (this.orderForm.valid) {
      console.warn(this.orderForm.getRawValue());
    }
  }

}
