import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ElementDodany } from 'src/shared/models/element-dodany.model';

@Component({
  selector: 'app-lista-elementow-karta',
  templateUrl: './lista-elementow-karta.component.html',
  styleUrls: ['./lista-elementow-karta.component.scss']
})
export class ListaElementowKartaComponent implements OnInit {

// @Input() jestPrzychodem: boolean = false;
@Input() element: ElementDodany;

// zamiast any możemy użyć void
// emitujemy klikniecie buttonax 
@Output() XKlik: EventEmitter<any> = new EventEmitter<any>();
// emitujemy klik na element dodany 
@Output() KlikEdycja: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }
  XButtonKlik() {
    this.XKlik.emit();
  }
  KlikEdycjaElementuDodanego() {
    this.KlikEdycja.emit();
  }
}
