import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})
export class SingupComponent implements OnInit {

  constructor(private fb: FormBuilder, private authService: AuthService) { }

  ngOnInit(): void {
  }

  signupForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    email:['', [Validators.required, Validators.email]],
    password:['', [Validators.required, Validators.minLength(7)]]
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

  singupSave(): void {
    const payLoad = this.signupForm.value
    this.authService.singup(payLoad as any).subscribe({
      next: user => console.log('Save User', payLoad),
      error: err => console.log('Error', err)
    });
  }

}
