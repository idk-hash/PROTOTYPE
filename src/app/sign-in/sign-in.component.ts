import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  
  private auth = getAuth();
  form!: FormGroup;
  loading = false;
  submitted = false;

  constructor
    ( private formBuilder: FormBuilder,
      private router : Router )
    {}

  ngOnInit(): void
    {this.form = this.formBuilder.group(
      { username: ['', Validators.required],
        password: ['', Validators.required]});}

  public onSubmit()
    { this.submitted = true;
    if(this.form.invalid) return;
    this.loading = true;

    signInWithEmailAndPassword(this.auth, this.f.username.value, this.f.password.value)
      .then((userCredential) =>
        {  })
      .catch((error) =>
        { const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage);
          this.loading = false; }); }

  public switch() { this.router.navigate(['sign_up']) }

  get f() { return this.form.controls; }

}
