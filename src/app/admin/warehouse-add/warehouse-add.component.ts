import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { WarehouseService } from 'src/app/shared/service/wareHouse';

@Component({
  selector: 'app-warehouse-add',
  templateUrl: './warehouse-add.component.html',
  styleUrls: ['./warehouse-add.component.css']
})
export class WarehouseAddComponent implements OnInit {

  form: FormGroup;

  constructor(
    private warehouseService: WarehouseService
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl(null, {validators: [Validators.required, Validators.minLength(3)]}),
      products: new FormArray([
        new FormControl(null)
      ])
    });
  }

  save() {
    console.log(this.form.value.name);
    console.log(this.form.value.products);
  }

}
