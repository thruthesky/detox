import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-beeman-test',
  templateUrl: './beeman-test.component.html',
  styleUrls: ['./beeman-test.component.scss'],
})
export class BeemanTestComponent implements OnInit {


  showResult = false;

  form: FormGroup;
  submit = false;
  
  bmi: number;


  constructor(
    public fb: FormBuilder,
    public a: AppService,
  ) {
    this.form = fb.group({
      gender: ['', [Validators.required]],
      birthday: ['', [Validators.required]],
      height: ['', [Validators.required, Validators.pattern('[0-9]+'), Validators.min(100), Validators.max(220)]],
      weight: ['', [Validators.required, Validators.pattern('[0-9]+'), Validators.min(30), Validators.max(160)]]
    });



  }

  ngOnInit() { }

  onSubmit() {
    this.submit = true;

    if (this.form.invalid) {
      console.log('onSubmit() => form is invalid. just return. not submitting');
      return;
    }

    this.showResult = true;
    

    const data = {
      gender: this.form.value.gender,
      birthday: this.form.value.birthday,
      height: this.form.value.height,
      weight: this.form.value.weight,
    };
    console.log('data',data);


    this.bmi = this.getScore(data);

  }

  errors(formName: string): any {
    return this.form.get(formName).errors;
  }

  getColor(score: number): string {

    if (score) {
      if (score <= 14) {
        return 'green';
      }
      if (score > 14 && score <= 19) {
        return 'blue';
      }
      if (score > 19 && score <= 28) {
        return 'yellow';
      }
      if (score > 28 && score <= 33) {
        return 'orange';
      }
      if (score > 33) {
        return 'red';
      }

    }

  }


  getScore(data): number {
    
  return (data.weight/data.height/data.height) * 10000;

  }




}

