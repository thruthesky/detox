import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetoxificationRecipeItemPage } from './detoxification-recipe-item.page';

describe('DetoxificationRecipeItemPage', () => {
  let component: DetoxificationRecipeItemPage;
  let fixture: ComponentFixture<DetoxificationRecipeItemPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetoxificationRecipeItemPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetoxificationRecipeItemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
