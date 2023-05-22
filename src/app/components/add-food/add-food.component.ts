import { Component, OnInit } from "@angular/core";
import {
  Validators,
  FormGroup,
} from "@angular/forms";

import { FormBuilder } from '@angular/forms';
import { ListService } from "src/app/services/list.service";
import Swal from "sweetalert2";

import { HttpEvent, HttpEventType } from '@angular/common/http';
import { NewProduct } from "src/app/interfaces/product";

@Component({
  selector: 'app-add-food',
  templateUrl: './add-food.component.html',
  styleUrls: ['./add-food.component.scss']
})

export class AddFoodComponent implements OnInit {
  form!: FormGroup;
  submitted = false;
  userId: any = '';
  token: any = '';
  preview: string = '';

  constructor(private formBuilder: FormBuilder, private productService:
    ListService
  ) {
    let useid = sessionStorage.getItem('userId');
    let token = sessionStorage.getItem('token');
    this.userId = useid;
    this.token = token;
  }



  initialValue: number = 0;

  ngOnInit() {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(30)]],
      description: ['', Validators.required],
      price: [this.initialValue, [Validators.required,
      Validators.min(this.initialValue), Validators.pattern(/^[1-9]\d*$/)]],
      category: ['', Validators.required],
      file: [null],
      time: ['', [Validators.required, Validators.min(this.initialValue), Validators.pattern(/^[1-9]\d*$/)]],
      portion: ['', [Validators.required, Validators.min(this.initialValue), Validators.pattern(/^[1-9]\d*$/)]]
      , image: ['', Validators.required],

    });

    this.form.patchValue({
      name: '2Larg Pizza For 3 persons',
      description: 'description',
      price: 30,
      category: 'Pizza',
      time: 30,
      portion: 1,
      image: 'https://www.pyramidpizza.ca/images/slide_3for1.png',
    });
  }


  get f() { return this.form.controls; }




  onSubmit() {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }
    //alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.form.value, null, 4));
    let product: NewProduct = {
      user: this.userId,
      name: this.form.get('name')?.value,
      description: this.form.get('description')?.value,
      price: this.form.get('price')?.value,
      category: this.form.get('category')?.value,
      img: this.form.get('file')?.value,
      time: this.form.get('time')?.value,
      portion: this.form.get('portion')?.value,
      image: this.form.get('image')?.value
    };
    this.productService.addProduct(product, this.token);
    Swal.fire('Message', "item is added", 'success');

    this.onReset();
  }

  onReset() {
    this.submitted = false;
    this.form.reset();
  }
}



