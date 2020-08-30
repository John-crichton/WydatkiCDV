import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdytujElementComponent } from './edytuj-element.component';

describe('EdytujElementComponent', () => {
  let component: EdytujElementComponent;
  let fixture: ComponentFixture<EdytujElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdytujElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdytujElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
