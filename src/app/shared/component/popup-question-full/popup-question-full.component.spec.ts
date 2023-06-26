import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupQuestionFullComponent } from './popup-question-full.component';

describe('PopupQuestionFullComponent', () => {
  let component: PopupQuestionFullComponent;
  let fixture: ComponentFixture<PopupQuestionFullComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupQuestionFullComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopupQuestionFullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
