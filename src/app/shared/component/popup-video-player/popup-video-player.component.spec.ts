import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupVideoPlayerComponent } from './popup-video-player.component';

describe('PopupVideoPlayerComponent', () => {
  let component: PopupVideoPlayerComponent;
  let fixture: ComponentFixture<PopupVideoPlayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupVideoPlayerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopupVideoPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
