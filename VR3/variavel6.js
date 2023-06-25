"use strict";
const nomes = ['pesso1', 'pesso2', 'pesso3'];
const dias = [5, 25, 28];
// Para criar uma função genérica, basta adicionar as chaves ​ ​<T>​ ​.
function funcaoGenerica() { }
funcaoGenerica();
funcaoGenerica();
funcaoGenerica();
function funcaoGenerica2(value) {
    return value;
}
console.log(funcaoGenerica2(1));
//retorna 1
console.log(funcaoGenerica2('teste'));
//retorna teste
console.log(funcaoGenerica2(true));
//retorna true
function fun(args1, args2, args3) {
    return args3;
}
console.log(fun('teste', 1, true));
class classeGenerica {
    constructor() {
        this.arr = []; // parametro
    }
    adicionaValor(item) {
        this.arr.push(item);
    }
    retornaValores() {
        return this.arr;
    }
    removeItem(item) {
        let index = this.arr.indexOf(item);
        if (index > -1)
            this.arr.splice(index, 1);
    }
}
let classeGenerica1 = new classeGenerica();
classeGenerica1.adicionaValor(1);
classeGenerica1.adicionaValor(2);
classeGenerica1.adicionaValor(3);
console.log(classeGenerica1.retornaValores());
classeGenerica1.removeItem(1);
console.log(classeGenerica1.retornaValores());
let classeGenerica2 = new classeGenerica();
classeGenerica2.adicionaValor('Homem de ferro');
classeGenerica2.adicionaValor('Homem aranha');
console.log(classeGenerica2.retornaValores());
classeGenerica2.removeItem('Homem aranha');
console.log(classeGenerica2.retornaValores());
