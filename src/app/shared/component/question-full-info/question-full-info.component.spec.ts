import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionFullInfoComponent } from './question-full-info.component';

describe('QuestionFullInfoComponent', () => {
  let component: QuestionFullInfoComponent;
  let fixture: ComponentFixture<QuestionFullInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionFullInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuestionFullInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
