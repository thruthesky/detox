import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AppService } from 'src/app/services/app.service';
import { BmiForm } from 'src/app/services/bmi-form';

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
    // this.bmi = -100;

  }

  ngOnInit() { }

  onSubmit() {
    this.submit = true;

    if (this.form.invalid) {
      console.log('onSubmit() => form is invalid. just return. not submitting');
      return;
    }

    this.showResult = true;


    const data: BmiForm = {
      gender: this.form.value.gender,
      birthday: this.form.value.birthday,
      height: this.form.value.height,
      weight: this.form.value.weight,
    };



    this.bmi = this.getScore(data);

  }

  errors(formName: string): any {
    return this.form.get(formName).errors;
  }

  getColor(): string {

    if (this.bmi) {

      if (this.bmi <= 18.5) {
        return '#7db262';
      }
      else if (this.bmi <= 23) {
        return '#0996ff';
      }
      else if (this.bmi <= 25) {
        return ' #E6E600';
      }
      else if (this.bmi <= 30) {
        return 'orange';
      }
      else {
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


  getScore(data: BmiForm): number {

    const h = data.height / 100;
    const w = data.weight;

    return Math.round(w / (h * h) * 100) / 100;
  }



  getWidth(): number {
    const x = this.bmi * 12 - 100;

    if (x > 320) {
      return 320;
    }
    return x;

  }

}

