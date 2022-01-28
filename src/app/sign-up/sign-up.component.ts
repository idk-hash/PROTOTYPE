import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DBService } from '../services/DB/db.service';

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
    private router : Router,
    private db : DBService)
    {}

  ngOnInit(): void
    {this.form = this.formBuilder.group({
      firstName:  ['', Validators.required],
      lastName:   ['', Validators.required],
      uni:        ['', Validators.required],
      day:        ['Day', Validators.required],
      month:      ['Month', Validators.required],
      year:       ['Year', Validators.required],
      ntuEmail:   ['', Validators.required],
      password:   ['', Validators.required]});
    this.addOption();
    this.addOption(31, false);
    this.addOption(12, false);
    this.addOption(2005, false);
    }

  addOption(aaa : number = 3, choice : boolean = true)
    {if(choice)
      {for(let i = 0; i < aaa ; i++)
        {let option = document.createElement("option");
        option.value = data[i][0];
        option.text = data[i][0];
        document.getElementById(data[i][1])?.appendChild(option);}}
    else
      {var temp = 0;
      if      (aaa == 31)   {temp = 0}
      else if (aaa == 12)   {temp = 1}
      else if (aaa == 2005) {temp = 2}
      for(let i = 1; i <= aaa ; i++)
        {if (aaa == 2005 && i == 1) {i += 1979}
        let option = document.createElement("option");
        option.value = i.toString();
        option.text = i.toString();
        document.getElementById(data[temp][1])?.appendChild(option);}}}

  get f() { return this.form.controls; }

  public onSubmit()
    {this.submitted = true;

    if(this.form.invalid) {return;}

    this.loading = true;

    createUserWithEmailAndPassword(this.auth, this.f.ntuEmail.value, this.f.password.value)
      .then((userCredential) => {
        this.db.add(this.f);
      })
      .catch((error) => {
        console.log(error.code, error.message);
        this.loading = false;
      });
    }

  public switch()
    {this.router.navigate(['sign_in'])}

}
