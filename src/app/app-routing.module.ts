import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StronaGlownaComponent} from './strona-glowna/strona-glowna.component';
import {LogComponent} from './log/log.component';

const routes: Routes = [
  { path: '', component: StronaGlownaComponent },
  { path: 'log', component: LogComponent },
  { path: 'stronaglowna', component: StronaGlownaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
