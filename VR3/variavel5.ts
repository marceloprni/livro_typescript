interface Pessoa {
    nome: string;
    idade: number;
    email: string;
    telefone?: number;
}

const example1 = 'string';
const example2 = Symbol();

interface MeuExemplo {
    [example1]: string;
    [example2]: boolean;
}

/*

ela foi adicionada a funcionalidade de ter propriedades de nomes, como constantes, nos tipos. 
Isso significa que as interfaces podem ser definidas por strings, constantes, números ou literais.

*/


let pessoa : Pessoa;
let pessoa2 : Pessoa;


/*
Neste exemplo, o tipo ​ ​PessoaJuridica​ ​ estende as propriedades ​ ​nome​ ​, ​ ​idade​ ​, ​ 
​email​ ​ e ​ ​telefone​ ​ da interface ​ ​IPessoa​ ​, e declara duas novas propriedades: ​ ​conta​ ​ e ​ ​cnpj​ ​.

As propriedades podem ser especificadas como opcionais e, para isso, 
basta adicionar o operador ​ ​?​ ​ ao final do nome da propriedade:

*/

interface PessoaJuridica extends Pessoa { 
    conta: number;
    cnpj: number;
    abrirConta?(): boolean;
}



