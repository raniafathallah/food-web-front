
import { Component, OnInit } from "@angular/core";
import {
  Validators,
  FormGroup,
} from "@angular/forms";

import { FormBuilder } from '@angular/forms';
import { User } from "src/app/interfaces/user";
import { UserService } from "src/app/services/user.service";
import { Router } from '@angular/router';
import Swal from "sweetalert2";

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.scss']
})
export class LoginUserComponent implements OnInit {

  form!: FormGroup;
  submitted = false;


  title = 'front';
  newUser: User = { 'email': 'fad3@gmail.com', 'name': 'fad3123', 'password': 'fad3123' };
  loginUser: any;



  constructor(private formBuilder: FormBuilder,
    private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      email: ['admin@gmail.com', [Validators.required, Validators.email]],
      password: ['zQ7Wqkh0ZNKqfTos', [Validators.required,
      Validators.minLength(6), Validators.maxLength(20)]],
    },);
  }

  get f() { return this.form.controls; }

  onSubmit() {

    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    let user: { "email": string, "password": string } = {
      email: this.form.get('email')?.value,
      password: this.form.get('password')?.value
    };
    this.userService.loginUser(user);
    this.router.navigate(['/list']);
    Swal.fire('Message', "you login successfully", "success");

  }

  onReset() {
    this.submitted = false;
    this.form.reset();
  }
}




