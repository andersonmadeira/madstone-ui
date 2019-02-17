import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MadUIComponent } from './madui.component';

describe('MadUIComponent', () => {
  let component: MadUIComponent;
  let fixture: ComponentFixture<MadUIComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MadUIComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MadUIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
