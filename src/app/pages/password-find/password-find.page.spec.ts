import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordFindPage } from './password-find.page';

describe('PasswordFindPage', () => {
  let component: PasswordFindPage;
  let fixture: ComponentFixture<PasswordFindPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PasswordFindPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PasswordFindPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
