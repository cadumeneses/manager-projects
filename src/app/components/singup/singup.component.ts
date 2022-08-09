import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})
export class SingupComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  signupForm = this.fb.group({
    name: ['', Validators.required, Validators.minLength(3)],
    email:['', Validators.required, Validators.email],
    password:['', Validators.required, Validators.minLength(7)]
  })

  get name(){
    return this.signupForm.get('name');
  }

  get email(){
    return this.signupForm.get('email');
  }
  get password(){
    return this.signupForm.get('password');
  }

}
