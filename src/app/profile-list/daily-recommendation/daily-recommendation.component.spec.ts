import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyRecommendationComponent } from './daily-recommendation.component';

describe('DailyRecommendationComponent', () => {
  let component: DailyRecommendationComponent;
  let fixture: ComponentFixture<DailyRecommendationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DailyRecommendationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyRecommendationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
