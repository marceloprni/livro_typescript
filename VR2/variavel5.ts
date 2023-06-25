
// TUPLAS PODE TRABALHAR COM DIVERSOS DADOS

let lista:[string, number, string] = ['string', 1, 'string2'];
let lista2:[nome:string, idade:number, email:string] = ['Bill Gates', 65, 'bill@teste.com'];

lista.push('Perini', 33, 'Marina');
console.log(lista);

for(let i = 0; i < lista.length; i++) {
    console.log(lista[i])
}

let lista3:readonly[string, number] = ['Bill Gates', 1]; // aqui voce só pode fazer a leitura

// ENUM PERMITE DECLARAR UM CONJUNTO DE VALORES/CONSTANTES PREDEFINIDOS, (NUMBER, STRING, HETEROGENEOUS)

export enum DiaDaSemana {
    Segunda = 1,
    Terca = 2,
    Quarta = 3,
    Quinta = 4,
    Sexta = 5,
    Sabado = 6,
    Domingo = 7
}

export enum LetraSemanas {
    Segunda = 'Segunda-Feira',
    Terca = 'Terça-Feira',
    Quarta = 'Quarta-Feira',
    Quinta = 'Quinta-Feira',
    Sexta = 'Sexta-Feira',
    Sabado = 'Sabado',
    Domingo = 'Domingo'
}


let dia = DiaDaSemana[2]
let semana = DiaDaSemana['Segunda']
console.log(dia)
console.log(semana)

let LetraDia = LetraSemanas.Segunda
let LetraDia2 = LetraSemanas['Domingo']
console.log(LetraDia, LetraDia2)

// HETEROGENEOUS SÃO POUCO CONHECIDOS, ELES ACEITAM OS DOIS TIPOS DE VALORES STRING E NUMEROS

export enum Heterogeneous {
    Segunda = 'Segunda-Feira',
    Terca = 1,
    Quarta,
    Quinta,
    Sexta,
    Sabado,
    Domingo = 18
}

console.log(Heterogeneous.Segunda)
console.log(Heterogeneous['Segunda'])

// UNION NOS PERMITE PASSAR VARIOS TIPO DE VARIAVEL COM UMA BARRA 

let exemploVariavel:(string|number);
exemploVariavel = 123;
console.log(exemploVariavel);
exemploVariavel = 'ABC';
console.log(exemploVariavel);

let exemploVariavel2:(string|number|boolean);
exemploVariavel2 = true;
console.log(exemploVariavel2);

let exemploVariavel3:(number[] | string[]);
exemploVariavel3 = [1,2,3]
let exemplo3 = exemploVariavel3.forEach(function(num) { console.log(num)});
console.log(exemplo3)
exemploVariavel3 = ['a', 'b', 'c'];
let exemplo4 = exemploVariavel3.forEach(function(num) { console.log(num)});
console.log(exemplo4)

function deleteTeste(usuario: string | string[]) {
    if(typeof usuario == "string") {
        console.log(usuario, "deletado");
    } else {
        var i;
        for(i = 0; i < usuario.length; i++) {
            console.log(usuario[i], "deletado")
        }
    }
}

console.log(deleteTeste('Marcelo'))
console.log(deleteTeste(exemploVariavel3))


let x: string | number | boolean = 13;
console.log(typeof(x));

/* TYPE ALIAS */
type ID = string | number;

function showId(id: ID) {
    console.log(`O ID É: ${id}`)
}

console.log(showId(40))
console.log(showId("30"))