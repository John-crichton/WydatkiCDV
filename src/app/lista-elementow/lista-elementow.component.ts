import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ElementDodany } from 'src/shared/models/element-dodany.model';

@Component({
  selector: 'app-lista-elementow',
  templateUrl: './lista-elementow.component.html',
  styleUrls: ['./lista-elementow.component.scss']
})
export class ListaElementowComponent implements OnInit {

  @Input() TablicaElementow: ElementDodany[];
  @Output() usun: EventEmitter<ElementDodany> = new EventEmitter<ElementDodany>();
  constructor() { }

  ngOnInit(): void {
  }
  MetodaKlikniecieUsun(element: ElementDodany) { 
    this.usun.emit(element);
  }
}
