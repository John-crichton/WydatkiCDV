import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StronaGlownaComponent } from './strona-glowna/strona-glowna.component';
import { DodajElementComponent } from './dodaj-element/dodaj-element.component';
import { ListaElementowComponent } from './lista-elementow/lista-elementow.component';
import { ListaElementowKartaComponent } from './lista-elementow/lista-elementow-karta/lista-elementow-karta.component';
import { from } from 'rxjs';
import { EdytujElementComponent } from './edytuj-element/edytuj-element.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    StronaGlownaComponent,
    DodajElementComponent,
    ListaElementowComponent,
    ListaElementowKartaComponent,
    EdytujElementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [],
  entryComponents: [EdytujElementComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
