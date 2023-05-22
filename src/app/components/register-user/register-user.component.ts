
import { Component, OnInit } from "@angular/core";
import {
  Validators,
  FormGroup,
} from "@angular/forms";

import { FormBuilder } from '@angular/forms';
import { User } from "src/app/interfaces/user";
import { UserService } from "src/app/services/user.service";
import Validation from "./Validation";
import { Router } from '@angular/router';
import Swal from "sweetalert2";

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.scss']
})
export class RegisterUserComponent implements OnInit {
  form!: FormGroup;
  submitted = false;


  title = 'front';
  newUser: User = { 'email': 'fad3@gmail.com', 'name': 'fad3123', 'password': 'fad3123' };
  // loginUser:User={'email':'','name':'','password':''};
  loginUser: any;



  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(40)]],
      confirmPassword: ['', Validators.required],
    },
      {
        validators: [Validation.match('password', 'confirmPassword')]
      });
  }

  get f() { return this.form.controls; }

  onSubmit() {

    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    console.log(this.form.get('name')?.value);
    //alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.form.value, null, 4));
    let user: User = {
      name: this.form.get('name')?.value, email: this.form.get('email')?.value,
      password: this.form.get('password')?.value
    };
    this.userService.registerUser(user);
    Swal.fire('Message', "you registered successfully");

    this.router.navigate(['/list']);

  }

  onReset() {
    this.submitted = false;
    this.form.reset();
  }
}



