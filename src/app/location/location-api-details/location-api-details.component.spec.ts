import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationApiDetailsComponent } from './location-api-details.component';

describe('LocationDetailsComponent', () => {
  let component: LocationApiDetailsComponent;
  let fixture: ComponentFixture<LocationApiDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocationApiDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationApiDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
