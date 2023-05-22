
import { Component, DoCheck, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListService } from 'src/app/services/list.service';

import {
  Validators,
  FormGroup,
} from "@angular/forms";


import { FormBuilder } from '@angular/forms';
import Swal from 'sweetalert2';
import { UpdatedProduct } from 'src/app/interfaces/product';

@Component({
  selector: 'app-edit-food',
  templateUrl: './edit-food.component.html',
  styleUrls: ['./edit-food.component.scss']
})

export class EditFoodComponent implements OnInit, DoCheck {

  id: string = '';
  ProductItem: any;

  form!: FormGroup;
  submitted = false;
  userId: any = '';
  token: any = '';

  constructor(private route: ActivatedRoute, private productService: ListService,
    private formBuilder: FormBuilder) {
    let useid = sessionStorage.getItem('userId');
    let token = sessionStorage.getItem('token');
    this.userId = useid;
    this.token = token;

  }
  ngDoCheck(): void {

  }

  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];
    this.form = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(10)]],
      description: ['', Validators.required],
      price: ['', Validators.required],
      category: ['', Validators.required],
      time: ['', Validators.required],
      portion: ['', Validators.required],
      image: ['', Validators.required],

    });

    //  ASSIGN EDIT VALUES 

    setTimeout(() => {
      this.ProductItem = sessionStorage.getItem("singleProduct");
      this.ProductItem = JSON.parse(this.ProductItem);

      this.form.setValue({
        name: this.ProductItem.name,
        description: this.ProductItem.description,
        price: this.ProductItem.price,
        category: this.ProductItem.category,
        time: this.ProductItem.time,
        portion: this.ProductItem.portion,
        image: this.ProductItem.image,
      });
    }, 1000);
  }


  get f() { return this.form.controls; }

  onSubmit() {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }

    let product: UpdatedProduct = {
      name: this.form.get('name')?.value,
      description: this.form.get('description')?.value,
      price: this.form.get('price')?.value,
      category: this.form.get('category')?.value,
      time: this.form.get('time')?.value,
      portion: this.form.get('portion')?.value,

    };
    this.productService.updateProduct(product, this.id, this.token);
    Swal.fire('Message', "item is updated", 'success');
    this.onReset();
  }

  onReset() {
    this.submitted = false;
    this.form.reset();
  }
}


