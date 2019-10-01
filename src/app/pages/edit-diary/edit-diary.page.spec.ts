import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDiaryPage } from './edit-diary.page';

describe('EditDiaryPage', () => {
  let component: EditDiaryPage;
  let fixture: ComponentFixture<EditDiaryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditDiaryPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDiaryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
