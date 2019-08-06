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
      height: ['', [Validators.required, Validators.pattern('[0-9\.]+'), Validators.min(100), Validators.max(220)]],
      weight: ['', [Validators.required, Validators.pattern('[0-9\.]+'), Validators.min(30), Validators.max(160)]]
    });

    // this.showResult = true;
    // this.bmi = 25;

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
    console.log('data', data);


    this.bmi = this.getScore(data);

  }

  errors(formName: string): any {
    return this.form.get(formName).errors;
  }

  getColor(score: number): string {

    if (score) {
      if (score <= 14) {
        return '#7db262';
      }
      if (score > 14 && score <= 19) {
        return '#0996ff';
      }
      if (score > 19 && score <= 27) {
        return ' #E6E600';
      }
      if (score > 27 && score <= 33) {
        return 'orange';
      }
      if (score > 33) {
        return 'red';
      }

    }

  }

  getText(): string {

    if (this.bmi) {
      if (this.bmi <= 18.5) {
        return '저체중';
      } else if (this.bmi <= 23) {
        return '정상';
      } else if (this.bmi <= 25) {
        return '과체중';
      } else if (this.bmi <= 30) {
        return '비만';
      } else {
        return '고도비만';
      }

    }

  }


  getScore(data: any): number {

    const h = data.height / 100;
    const w = data.weight;

    return Math.round(w / (h * h) * 100) / 100;
  }




}

