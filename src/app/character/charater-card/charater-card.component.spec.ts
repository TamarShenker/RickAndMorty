import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharaterCardComponent } from './charater-card.component';

describe('CharaterDetailsComponent', () => {
  let component: CharaterCardComponent;
  let fixture: ComponentFixture<CharaterCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharaterCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharaterCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
