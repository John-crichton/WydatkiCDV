import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DodajElementComponent } from './dodaj-element.component';

describe('DodajElementComponent', () => {
  let component: DodajElementComponent;
  let fixture: ComponentFixture<DodajElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DodajElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DodajElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
