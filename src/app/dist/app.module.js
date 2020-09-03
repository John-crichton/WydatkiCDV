"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var strona_glowna_component_1 = require("./strona-glowna/strona-glowna.component");
var dodaj_element_component_1 = require("./dodaj-element/dodaj-element.component");
var lista_elementow_component_1 = require("./lista-elementow/lista-elementow.component");
var lista_elementow_karta_component_1 = require("./lista-elementow/lista-elementow-karta/lista-elementow-karta.component");
var edytuj_element_component_1 = require("./edytuj-element/edytuj-element.component");
var animations_1 = require("@angular/platform-browser/animations");
var dialog_1 = require("@angular/material/dialog");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                strona_glowna_component_1.StronaGlownaComponent,
                dodaj_element_component_1.DodajElementComponent,
                lista_elementow_component_1.ListaElementowComponent,
                lista_elementow_karta_component_1.ListaElementowKartaComponent,
                edytuj_element_component_1.EdytujElementComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                forms_1.FormsModule,
                animations_1.BrowserAnimationsModule,
                dialog_1.MatDialogModule
            ],
            providers: [],
            entryComponents: [edytuj_element_component_1.EdytujElementComponent],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
