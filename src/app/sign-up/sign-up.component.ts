import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { getAuth, createUserWithEmailAndPassword , signInWithEmailAndPassword , EmailAuthProvider} from "firebase/auth";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  private auth = getAuth();
  form!: FormGroup;
  loading = false;
  submitted = false;

  constructor
    (private formBuilder: FormBuilder,
    private router : Router)
    {}

  ngOnInit(): void
    {this.form = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
    }

  get f() { return this.form.controls; }

  public onSubmit()
    {this.submitted = true;

    if(this.form.invalid) {return;}

    this.loading = true;

    createUserWithEmailAndPassword(this.auth, this.f.username.value, this.f.password.value)
    .then((userCredential) => {
      console.log("did it work?");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);

      this.loading = false;
    });
    }

  public switch()
    {this.router.navigate(['home/sign_in'])}

}
