import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutToxicPage } from './about-toxic.page';

describe('AboutToxicPage', () => {
  let component: AboutToxicPage;
  let fixture: ComponentFixture<AboutToxicPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutToxicPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutToxicPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
