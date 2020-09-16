import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelnawiComponent } from './panelnawi.component';

describe('PanelnawiComponent', () => {
  let component: PanelnawiComponent;
  let fixture: ComponentFixture<PanelnawiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanelnawiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelnawiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
