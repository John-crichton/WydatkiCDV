"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ListaElementowComponent = void 0;
var core_1 = require("@angular/core");
var ListaElementowComponent = /** @class */ (function () {
    function ListaElementowComponent() {
        this.usun = new core_1.EventEmitter();
    }
    ListaElementowComponent.prototype.ngOnInit = function () {
    };
    ListaElementowComponent.prototype.MetodaKlikniecieUsun = function (element) {
        this.usun.emit(element);
    };
    __decorate([
        core_1.Input()
    ], ListaElementowComponent.prototype, "TablicaElementow");
    __decorate([
        core_1.Output()
    ], ListaElementowComponent.prototype, "usun");
    ListaElementowComponent = __decorate([
        core_1.Component({
            selector: 'app-lista-elementow',
            templateUrl: './lista-elementow.component.html',
            styleUrls: ['./lista-elementow.component.scss']
        })
    ], ListaElementowComponent);
    return ListaElementowComponent;
}());
exports.ListaElementowComponent = ListaElementowComponent;
