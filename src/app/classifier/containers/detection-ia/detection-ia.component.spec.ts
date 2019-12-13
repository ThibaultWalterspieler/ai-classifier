import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetectionIaComponent } from './detection-ia.component';

describe('DetectionIaComponent', () => {
  let component: DetectionIaComponent;
  let fixture: ComponentFixture<DetectionIaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetectionIaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetectionIaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
