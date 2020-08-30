import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaElementowKartaComponent } from './lista-elementow-karta.component';

describe('ListaElementowKartaComponent', () => {
  let component: ListaElementowKartaComponent;
  let fixture: ComponentFixture<ListaElementowKartaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaElementowKartaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaElementowKartaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
