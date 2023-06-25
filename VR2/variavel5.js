"use strict";
// TUPLAS PODE TRABALHAR COM DIVERSOS DADOS
Object.defineProperty(exports, "__esModule", { value: true });
exports.Heterogeneous = exports.LetraSemanas = exports.DiaDaSemana = void 0;
let lista = ['string', 1, 'string2'];
let lista2 = ['Bill Gates', 65, 'bill@teste.com'];
lista.push('Perini', 33, 'Marina');
console.log(lista);
for (let i = 0; i < lista.length; i++) {
    console.log(lista[i]);
}
let lista3 = ['Bill Gates', 1]; // aqui voce só pode fazer a leitura
// ENUM PERMITE DECLARAR UM CONJUNTO DE VALORES/CONSTANTES PREDEFINIDOS, (NUMBER, STRING, HETEROGENEOUS)
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
var LetraSemanas;
(function (LetraSemanas) {
    LetraSemanas["Segunda"] = "Segunda-Feira";
    LetraSemanas["Terca"] = "Ter\u00E7a-Feira";
    LetraSemanas["Quarta"] = "Quarta-Feira";
    LetraSemanas["Quinta"] = "Quinta-Feira";
    LetraSemanas["Sexta"] = "Sexta-Feira";
    LetraSemanas["Sabado"] = "Sabado";
    LetraSemanas["Domingo"] = "Domingo";
})(LetraSemanas = exports.LetraSemanas || (exports.LetraSemanas = {}));
let dia = DiaDaSemana[2];
let semana = DiaDaSemana['Segunda'];
console.log(dia);
console.log(semana);
let LetraDia = LetraSemanas.Segunda;
let LetraDia2 = LetraSemanas['Domingo'];
console.log(LetraDia, LetraDia2);
// HETEROGENEOUS SÃO POUCO CONHECIDOS, ELES ACEITAM OS DOIS TIPOS DE VALORES STRING E NUMEROS
var Heterogeneous;
(function (Heterogeneous) {
    Heterogeneous["Segunda"] = "Segunda-Feira";
    Heterogeneous[Heterogeneous["Terca"] = 1] = "Terca";
    Heterogeneous[Heterogeneous["Quarta"] = 2] = "Quarta";
    Heterogeneous[Heterogeneous["Quinta"] = 3] = "Quinta";
    Heterogeneous[Heterogeneous["Sexta"] = 4] = "Sexta";
    Heterogeneous[Heterogeneous["Sabado"] = 5] = "Sabado";
    Heterogeneous[Heterogeneous["Domingo"] = 18] = "Domingo";
})(Heterogeneous = exports.Heterogeneous || (exports.Heterogeneous = {}));
console.log(Heterogeneous.Segunda);
console.log(Heterogeneous['Segunda']);
// UNION NOS PERMITE PASSAR VARIOS TIPO DE VARIAVEL COM UMA BARRA 
let exemploVariavel;
exemploVariavel = 123;
console.log(exemploVariavel);
exemploVariavel = 'ABC';
console.log(exemploVariavel);
let exemploVariavel2;
exemploVariavel2 = true;
console.log(exemploVariavel2);
let exemploVariavel3;
exemploVariavel3 = [1, 2, 3];
let exemplo3 = exemploVariavel3.forEach(function (num) { console.log(num); });
console.log(exemplo3);
exemploVariavel3 = ['a', 'b', 'c'];
let exemplo4 = exemploVariavel3.forEach(function (num) { console.log(num); });
console.log(exemplo4);
function deleteTeste(usuario) {
    if (typeof usuario == "string") {
        console.log(usuario, "deletado");
    }
    else {
        var i;
        for (i = 0; i < usuario.length; i++) {
            console.log(usuario[i], "deletado");
        }
    }
}
console.log(deleteTeste('Marcelo'));
console.log(deleteTeste(exemploVariavel3));
let x = 13;
console.log(typeof (x));
function showId(id) {
    console.log(`O ID É: ${id}`);
}
console.log(showId(40));
console.log(showId("30"));
