import { Component, OnInit } from '@angular/core';
import { users } from './users';
import { Router } from '@angular/router';
// import { stronaglownaComponent} from './strona-glowna/strona-glowna.component';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.scss']
})
export class LogComponent implements OnInit {

  public comUser = ""

  constructor() { }

  ngOnInit(): void {
  }
  log(email,password){
    for (let i=0; i<users.length; i++) {
      if (users[i].email == email.value.toLowerCase() && users[i].password == password.value) {
        this.comUser = "witaj w domu"
        break;
      }
      else {
        this.comUser = 'błedny login lub hasło'
      }
    }
  }
}
