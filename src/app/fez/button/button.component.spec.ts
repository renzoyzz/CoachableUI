import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FezButtonComponent } from './button.component';

describe('ButtonComponent', () => {
  let component: FezButtonComponent;
  let fixture: ComponentFixture<FezButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FezButtonComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FezButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
