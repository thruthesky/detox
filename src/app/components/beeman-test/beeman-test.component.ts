import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-beeman-test',
  templateUrl: './beeman-test.component.html',
  styleUrls: ['./beeman-test.component.scss'],
})
export class BeemanTestComponent implements OnInit {


  form: FormGroup;
  submit = false;

  constructor(public fb: FormBuilder) {
    this.form = fb.group({
      gender: ['', [Validators.required]],
      birthday: ['', [Validators.required]],
      height: ['', [Validators.required]],
      weight: ['', [Validators.required]],
    });
  }

  ngOnInit() { }

  onSubmit() {
    this.submit = true;

    if (this.form.invalid) {
      console.log('onSubmit() => form is invalid. just return. not submitting');
      return;
    }

  }

  errors(formName: string): any {
    return this.form.get(formName).errors;
  }

}
