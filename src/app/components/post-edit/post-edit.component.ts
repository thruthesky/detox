import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.scss'],
})
export class PostEditComponent implements OnInit {

  form: FormGroup;


  constructor( 
    public a: AppService,
    public fb: FormBuilder,

    ) {

      this.form = fb.group({
        title: [''],
        content: ['',Validators.required],
        image: [''],
      });

   }

  ngOnInit() {}


  onSubmit() {
    
  }



}
