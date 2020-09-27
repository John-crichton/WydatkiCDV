import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-panelnawi',
  templateUrl: './panelnawi.component.html',
  styleUrls: ['./panelnawi.component.scss']
})
export class PanelnawiComponent implements OnInit {

  constructor() { }

public schalter: boolean
public status:string = "niezalogowany"

  ngOnInit(): void {
  }

}
