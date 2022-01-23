import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { getAuth, createUserWithEmailAndPassword , signInWithEmailAndPassword , EmailAuthProvider} from "firebase/auth";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

const data = [["Day", "day"], ["Month", "month"], ["Year", "year"]]

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
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      uni: ['', Validators.required],
      day: ['Day', Validators.required],
      month: ['Month', Validators.required],
      year: ['Year', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required]});
    for(let i = 0; i <3 ; i++)
      {var option = document.createElement("option");
      option.value = data[i][0];
      option.text = data[i][0];
      document.getElementById(data[i][1])?.appendChild(option);}
    for(let i = 1; i <= 31 ; i++)
      {var option = document.createElement("option");
      option.value = i.toString();
      option.text = i.toString();
      document.getElementById("day")?.appendChild(option);}
    for(let i = 1; i <= 12 ; i++)
      {var option = document.createElement("option");
      option.value = i.toString();
      option.text = i.toString();
      document.getElementById("month")?.appendChild(option);}
    for(let i = 1980; i <= 2005 ; i++)
      {var option = document.createElement("option");
      option.value = i.toString();
      option.text = i.toString();
      document.getElementById("year")?.appendChild(option);}
    }

  get f() { return this.form.controls; }

  public onSubmit()
    {this.submitted = true;

    if(this.form.invalid) {return;}

    this.loading = true;

    createUserWithEmailAndPassword(this.auth, this.f.username.value, this.f.password.value)
      .then((userCredential) => {
        // TODO : Create account in DB
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
    {this.router.navigate(['sign_in'])}

}
