import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterApiDetailsComponent } from './character-api-details.component';

describe('CharacterDetailsComponent', () => {
  let component: CharacterApiDetailsComponent;
  let fixture: ComponentFixture<CharacterApiDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharacterApiDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterApiDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
