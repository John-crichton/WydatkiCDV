import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaElementowComponent } from './lista-elementow.component';

describe('ListaElementowComponent', () => {
  let component: ListaElementowComponent;
  let fixture: ComponentFixture<ListaElementowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaElementowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaElementowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
