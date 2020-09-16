import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ElementDodany } from 'src/shared/models/element-dodany.model';
import { MatDialog } from '@angular/material/dialog';
import { EdytujElementComponent } from '../edytuj-element/edytuj-element.component';

@Component({
  selector: 'app-lista-elementow',
  templateUrl: './lista-elementow.component.html',
  styleUrls: ['./lista-elementow.component.scss']
})
export class ListaElementowComponent implements OnInit {

  @Input() TablicaElementow: ElementDodany[];
  @Output() usun: EventEmitter<ElementDodany> = new EventEmitter<ElementDodany>();

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  MetodaKlikniecieUsun(element: ElementDodany) { 
    this.usun.emit(element);
  }
  MetodaklikNaElementDodany(element: ElementDodany){
    //angular material 
    const dialogRef = this.dialog.open(EdytujElementComponent, {
      width: '580px',
      data: element
    });
    dialogRef.afterClosed().subscribe(rezultat => {
      if(rezultat) {
        this.TablicaElementow[this.TablicaElementow.indexOf(element)]= rezultat;
      }
    })
  }
}
