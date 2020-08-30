import { Component, OnInit } from '@angular/core';
import { ElementDodany } from 'src/shared/models/element-dodany.model';
import { Element } from '@angular/compiler';

@Component({
  selector: 'app-strona-glowna',
  templateUrl: './strona-glowna.component.html',
  styleUrls: ['./strona-glowna.component.scss']
})
export class StronaGlownaComponent implements OnInit {
//  Tablica elementow dodanych (komponent dodaj-element) dalej metoda dodawania kolenych elementow do tej tablicy

  TablicaElementow: ElementDodany[] = new Array<ElementDodany>();
  bilans: number = 0;
  constructor() { }

  ngOnInit(): void {
  }
  MetodaDodajElement(nowyElement: ElementDodany){
    this.TablicaElementow.push(nowyElement);
    // wraz z dodaniem nowego elementu dodamy równiez jego wartosc do bilansu
    this.bilans += nowyElement.ilosc;
  }
  UsunElement(Element: ElementDodany) {
    let indexTablicyElementowDodanych = this.TablicaElementow.indexOf(Element);
    this.TablicaElementow.splice(indexTablicyElementowDodanych, 1);
    // wraz z usunieciem elementu odejmujemy równiez jego wartosc od bilansu
    this.bilans -= Element.ilosc;
  }
}
