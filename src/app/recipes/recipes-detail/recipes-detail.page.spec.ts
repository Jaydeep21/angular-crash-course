import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipesDetailPage } from './recipes-detail.page';

describe('RecipesDetailPage', () => {
  let component: RecipesDetailPage;
  let fixture: ComponentFixture<RecipesDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipesDetailPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipesDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
