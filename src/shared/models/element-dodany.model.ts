// eksportujemy element budzetu zgodnie z dodaj-element.component.html

// export class ElementBudzetu {
//     opis: string;
//     ilosc: number;

//     constructor(opis: string, ilosc: number) {
//         this.opis = opis;
//         this.ilosc = ilosc;
//     }
// }  powyższy kod można zastąpić krotszym jak niżej  -  dodajemy klase z parametrami opis i ilosc 

export class ElementDodany {
    constructor ( public opis: string, public ilosc: number) { }    
}