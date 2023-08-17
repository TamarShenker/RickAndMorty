import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterMainComponent } from './character-list.component';

describe('CharacterMainComponent', () => {
  let component: CharacterMainComponent;
  let fixture: ComponentFixture<CharacterMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharacterMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
