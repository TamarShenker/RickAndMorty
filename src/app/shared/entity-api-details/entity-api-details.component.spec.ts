import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntityApiDetailsComponent } from './entity-api-details.component';

describe('EntityDetailsComponent', () => {
  let component: EntityApiDetailsComponent;
  let fixture: ComponentFixture<EntityApiDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntityApiDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntityApiDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
