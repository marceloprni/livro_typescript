"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Heterogeneous = exports.DiaDaSemanaString = exports.DiaDaSemana = void 0;
// Array 
let numer = [1, 2, 3];
let textos = ["Exemplo1", "Exemplo2", "Exemplo3"];
let textos2 = []; // precisa declarar um array fora da variavel
textos2.push("ola mundo");
console.log(textos2);
let numb = [1, 2, 3];
let text = ["Exemplo1", "Exemplo2", "Exemplo3"];
let any = ['ola mundo', 1, 3, 5];
numer.push(4);
numb.push(5);
any.push('hello world');
any.push(6);
text.push("exemplo4");
console.log(numer);
console.log(text);
console.log(any);
let numerosDaMega = [8, 5, 5, 11, 4, 28];
console.log(numerosDaMega[0]);
let numberLivre = [10, 12, 13, 14];
console.log(numberLivre[1]);
// TuPlas 
let list = ["string", 1, "string"];
let list2 = ["Bill Gates", 65, "bill@gmail.com"];
console.log(list, list2);
console.log(list[0], list2[1]);
// enum caso voce não passar um valor ele vai incrementar sozinho
var DiaDaSemana;
(function (DiaDaSemana) {
    DiaDaSemana[DiaDaSemana["Segunda"] = 1] = "Segunda";
    DiaDaSemana[DiaDaSemana["Terca"] = 2] = "Terca";
    DiaDaSemana[DiaDaSemana["Quarta"] = 3] = "Quarta";
    DiaDaSemana[DiaDaSemana["Quinta"] = 4] = "Quinta";
    DiaDaSemana[DiaDaSemana["Sexta"] = 5] = "Sexta";
    DiaDaSemana[DiaDaSemana["Sabado"] = 6] = "Sabado";
    DiaDaSemana[DiaDaSemana["Domingo"] = 7] = "Domingo";
})(DiaDaSemana = exports.DiaDaSemana || (exports.DiaDaSemana = {}));
var DiaDaSemanaString;
(function (DiaDaSemanaString) {
    DiaDaSemanaString["Segunda"] = "Segunda";
    DiaDaSemanaString["Terca"] = "Ter\u00E7a";
    DiaDaSemanaString["Quarta"] = "Quarta";
    DiaDaSemanaString["Quinta"] = "Quinta";
    DiaDaSemanaString["Sexta"] = "Sexta";
    DiaDaSemanaString["Sabado"] = "Sabado";
    DiaDaSemanaString["Domingo"] = "Domingo";
})(DiaDaSemanaString = exports.DiaDaSemanaString || (exports.DiaDaSemanaString = {}));
let dia = DiaDaSemana[3];
console.log(dia);
let diaString = DiaDaSemanaString.Sabado;
let diaString2 = DiaDaSemanaString['Sabado'];
var Heterogeneous;
(function (Heterogeneous) {
    Heterogeneous["Segunda"] = "Segunda-feira";
    Heterogeneous[Heterogeneous["Terca"] = 1] = "Terca";
    Heterogeneous[Heterogeneous["Quarta"] = 2] = "Quarta";
    Heterogeneous[Heterogeneous["Quinta"] = 3] = "Quinta";
    Heterogeneous[Heterogeneous["Sexta"] = 4] = "Sexta";
    Heterogeneous[Heterogeneous["Sabado"] = 5] = "Sabado";
    Heterogeneous[Heterogeneous["Domingo"] = 18] = "Domingo";
})(Heterogeneous = exports.Heterogeneous || (exports.Heterogeneous = {}));
console.log(Heterogeneous.Segunda);
console.log(Heterogeneous['Segunda']);
console.log(Heterogeneous['Terca']);
console.log(Heterogeneous[1]);
console.log(Heterogeneous['Quarta']);
console.log(Heterogeneous['Quinta']);
console.log(Heterogeneous['Sexta']);
console.log(Heterogeneous['Sabado']);
console.log(Heterogeneous['Domingo']);
