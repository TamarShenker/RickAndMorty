import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EpisodeApiDetailsComponent } from './episode-api-details.component';

describe('EpisodeDetailsComponent', () => {
  let component: EpisodeApiDetailsComponent;
  let fixture: ComponentFixture<EpisodeApiDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EpisodeApiDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EpisodeApiDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
