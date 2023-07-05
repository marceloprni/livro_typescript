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


function analisaSaldo(target: any, key: any, descriptor: any) {}
function validaTitular(target: any, propertyKey: any) {}

function saldo() {
    return (
        target: any,
        propertyKey: number,
        parameterIndex: number,
    ) => {
        console.log('target', target);
        console.log('property key', propertyKey);
        console.log('parameter index', parameterIndex);
    }
}

function log(ctor:any) {
    console.log(ctor)
}

function analisaConta(tipoConta: any) {
    return (_target: any) => {
        console.log(`${tipoConta} - ${_target}`);
    }
}

function validaRegra(ctor: any) { }

@log
@validaRegra
@analisaConta("PJ")
class Conta {
    numeroDaConta: number;
    titular: string;
    saldo: number;

    constructor(numeroDaConta: number, titular: string, saldo: number) {
        this.numeroDaConta = numeroDaConta;
        this.titular = titular;
        this.saldo = saldo;
    }

    @analisaSaldo
    consultaSaldo(): string {
        return `O seu saldo atual é: ${this.saldo}`;
    }

  

}

export { Conta }

const resultado = new Conta(12335123, 'Marcelo', 30000);
console.log(resultado)
