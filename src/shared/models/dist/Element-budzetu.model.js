"use strict";
// eksportujemy element budzetu zgodnie z dodaj-element.component.html
exports.__esModule = true;
exports.ElementDodany = void 0;
// export class ElementBudzetu {
//     opis: string;
//     ilosc: number;
//     constructor(opis: string, ilosc: number) {
//         this.opis = opis;
//         this.ilosc = ilosc;
//     }
// }  powyższy kod można zastąpić krotszym jak niżej  -  dodajemy klase z parametrami opis i ilosc 
var ElementDodany = /** @class */ (function () {
    function ElementDodany(opis, ilosc) {
        this.opis = opis;
        this.ilosc = ilosc;
    }
    return ElementDodany;
}());
exports.ElementDodany = ElementDodany;
