import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UwComponent } from './uw.component';

describe('UwComponent', () => {
  let component: UwComponent;
  let fixture: ComponentFixture<UwComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UwComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
