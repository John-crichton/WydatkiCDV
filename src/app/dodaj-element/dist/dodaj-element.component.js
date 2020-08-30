"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.DodajElementComponent = void 0;
var core_1 = require("@angular/core");
var element_dodany_model_1 = require("src/shared/models/element-dodany.model");
var DodajElementComponent = /** @class */ (function () {
    function DodajElementComponent() {
        // wiazemy inputy z pliku html
        this.element = new element_dodany_model_1.ElementDodany('', null);
        this.formSubmit = new core_1.EventEmitter();
    }
    DodajElementComponent.prototype.ngOnInit = function () {
    };
    DodajElementComponent.prototype.onSubmit = function (form) {
        this.formSubmit.emit(form.value);
        form.reset();
    };
    __decorate([
        core_1.Input()
    ], DodajElementComponent.prototype, "element");
    __decorate([
        core_1.Output()
    ], DodajElementComponent.prototype, "formSubmit");
    DodajElementComponent = __decorate([
        core_1.Component({
            selector: 'app-dodaj-element',
            templateUrl: './dodaj-element.component.html',
            styleUrls: ['./dodaj-element.component.scss']
        })
    ], DodajElementComponent);
    return DodajElementComponent;
}());
exports.DodajElementComponent = DodajElementComponent;
