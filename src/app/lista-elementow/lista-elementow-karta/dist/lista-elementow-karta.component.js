"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ListaElementowKartaComponent = void 0;
var core_1 = require("@angular/core");
var ListaElementowKartaComponent = /** @class */ (function () {
    function ListaElementowKartaComponent() {
        // zamiast any możemy użyć void
        // emitujemy klikniecie buttonax 
        this.XKlik = new core_1.EventEmitter();
        // emitujemy klik na element dodany 
        this.KlikEdycja = new core_1.EventEmitter();
    }
    ListaElementowKartaComponent.prototype.ngOnInit = function () {
    };
    ListaElementowKartaComponent.prototype.XButtonKlik = function () {
        this.XKlik.emit();
    };
    ListaElementowKartaComponent.prototype.KlikEdycjaElementuDodanego = function () {
        this.KlikEdycja.emit();
    };
    __decorate([
        core_1.Input()
    ], ListaElementowKartaComponent.prototype, "element");
    __decorate([
        core_1.Output()
    ], ListaElementowKartaComponent.prototype, "XKlik");
    __decorate([
        core_1.Output()
    ], ListaElementowKartaComponent.prototype, "KlikEdycja");
    ListaElementowKartaComponent = __decorate([
        core_1.Component({
            selector: 'app-lista-elementow-karta',
            templateUrl: './lista-elementow-karta.component.html',
            styleUrls: ['./lista-elementow-karta.component.scss']
        })
    ], ListaElementowKartaComponent);
    return ListaElementowKartaComponent;
}());
exports.ListaElementowKartaComponent = ListaElementowKartaComponent;
