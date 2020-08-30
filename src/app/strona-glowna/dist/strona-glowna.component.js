"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.StronaGlownaComponent = void 0;
var core_1 = require("@angular/core");
var StronaGlownaComponent = /** @class */ (function () {
    function StronaGlownaComponent() {
        //  Tablica elementow dodanych (komponent dodaj-element) dalej metoda dodawania kolenych elementow do tej tablicy
        this.TablicaElementow = new Array();
        this.bilans = 0;
    }
    StronaGlownaComponent.prototype.ngOnInit = function () {
    };
    StronaGlownaComponent.prototype.MetodaDodajElement = function (nowyElement) {
        this.TablicaElementow.push(nowyElement);
        // wraz z dodaniem nowego elementu dodamy równiez jego wartosc do bilansu
        this.bilans += nowyElement.ilosc;
    };
    StronaGlownaComponent.prototype.UsunElement = function (Element) {
        var indexTablicyElementowDodanych = this.TablicaElementow.indexOf(Element);
        this.TablicaElementow.splice(indexTablicyElementowDodanych, 1);
        // wraz z usunieciem elementu odejmujemy równiez jego wartosc od bilansu
        this.bilans -= Element.ilosc;
    };
    StronaGlownaComponent = __decorate([
        core_1.Component({
            selector: 'app-strona-glowna',
            templateUrl: './strona-glowna.component.html',
            styleUrls: ['./strona-glowna.component.scss']
        })
    ], StronaGlownaComponent);
    return StronaGlownaComponent;
}());
exports.StronaGlownaComponent = StronaGlownaComponent;
