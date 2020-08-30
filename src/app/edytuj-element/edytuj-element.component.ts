import { Component, OnInit, Input } from '@angular/core';
import { ElementDodany } from 'src/shared/models/element-dodany.model';

@Component({
  selector: 'app-edytuj-element',
  templateUrl: './edytuj-element.component.html',
  styleUrls: ['./edytuj-element.component.scss']
})
export class EdytujElementComponent implements OnInit {

  @Input() element: ElementDodany;

  constructor() { }

  ngOnInit(): void {
  }
  jesliZatwierdzony(elementEdytowany: ElementDodany) {

  }
}
