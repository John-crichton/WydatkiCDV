import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ElementDodany } from 'src/shared/models/element-dodany.model';


@Component({
  selector: 'app-dodaj-element',
  templateUrl: './dodaj-element.component.html',
  styleUrls: ['./dodaj-element.component.scss']
})
export class DodajElementComponent implements OnInit {
  // wiazemy inputy z pliku html
  @Input() element: ElementDodany = new ElementDodany('', null);

  @Output() formSubmit: EventEmitter<ElementDodany> = new EventEmitter<ElementDodany>();
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(form: NgForm) {
    this.formSubmit.emit(form.value);
    form.reset();
  }


}
