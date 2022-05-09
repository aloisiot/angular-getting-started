import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.less']
})
export class ReactiveFormsComponent implements OnInit {

  signUpForm: FormGroup = this.formBuilder.group({
    firstname: ["", Validators.required],
    lastname: [""],
    username: ["", Validators.required],
    password: [
      "",
      Validators.required,
      Validators.minLength(8),
    ]
  })

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  submitForm(): void {
    console.debug("Sign up form is submited!\n", this.signUpForm.value)
  }

}
