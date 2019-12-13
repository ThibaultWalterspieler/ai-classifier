import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PosDetectComponent } from './pos-detect.component';

describe('PosDetectComponent', () => {
  let component: PosDetectComponent;
  let fixture: ComponentFixture<PosDetectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PosDetectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PosDetectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
