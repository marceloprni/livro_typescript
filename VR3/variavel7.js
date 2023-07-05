"use strict";
/*

Analisando os decorators ​ ​PropertyDecorator​ ​, ​ ​MethodDecorator​ ​ e ​ ​ParameterDecorator​ ​,
podemos defini-los como funções que recebem três parâmetros:

target (alvo): pode ser um método estático ou uma ​ ​function​ ​ construtora de uma classe. propertyKey
(chave): nome do membro da instância que será utilizado no alvo. descriptor
(descritor): a propriedade ​ ​descriptor​ ​ do membro da instância, chamando o método ​ ​Object.getOwnPropertyDescriptor()​ ​.

O ​ ​target​ ​ é o protótipo da classe em que está sendo aplicado o decorator, e ​ ​key​ ​ é o nome da propriedade da classe.

Um decorator de ​ ​parameter​ ​ deve ser declarado antes da declaração de um parâmetro e recebe três parâmetros.

Um decorator de ​ ​parameter​ ​ deve ser declarado antes da declaração de um parâmetro e recebe três parâmetros.
O primeiro, como na maioria dos decorators que já vimos, é o ​ ​target​ ​,
que é o protótipo da classe. O segundo é o ​ ​propertyKey​ ​,
que é o nome do método que contém o parâmetro com o qual estamos trabalhando.
O último é o ​ ​parameterIndex​ ​, que é o número da posição do parâmetro na função, lembrando que começa a partir do ​ ​0​​.


*/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Conta = void 0;
function analisaSaldo(target, key, descriptor) { }
function validaTitular(target, propertyKey) { }
function saldo() {
    return (target, propertyKey, parameterIndex) => {
        console.log('target', target);
        console.log('property key', propertyKey);
        console.log('parameter index', parameterIndex);
    };
}
function log(ctor) {
    console.log(ctor);
}
function analisaConta(tipoConta) {
    return (_target) => {
        console.log(`${tipoConta} - ${_target}`);
    };
}
function validaRegra(ctor) { }
let Conta = class Conta {
    constructor(numeroDaConta, titular, saldo) {
        this.numeroDaConta = numeroDaConta;
        this.titular = titular;
        this.saldo = saldo;
    }
    consultaSaldo() {
        return `O seu saldo atual é: ${this.saldo}`;
    }
};
__decorate([
    analisaSaldo
], Conta.prototype, "consultaSaldo", null);
Conta = __decorate([
    log,
    validaRegra,
    analisaConta("PJ")
], Conta);
exports.Conta = Conta;
const resultado = new Conta(12335123, 'Marcelo', 30000);
console.log(resultado);
