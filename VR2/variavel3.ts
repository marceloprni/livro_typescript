// Array 
let numer:number[] = [1,2,3];
let textos:string[] = ["Exemplo1", "Exemplo2", "Exemplo3"];
let textos2:string[] = []; // precisa declarar um array fora da variavel

textos2.push("ola mundo");
console.log(textos2)

let numb:Array<number> = [1,2,3];
let text:Array<string> = ["Exemplo1", "Exemplo2", "Exemplo3"];

let any:any[] = ['ola mundo', 1, 3 ,5 ]

numer.push(4)
numb.push(5)
any.push('hello world');
any.push(6)
text.push("exemplo4");

console.log(numer);
console.log(text);
console.log(any)


let numerosDaMega:ReadonlyArray<number> = [8,5,5,11,4,28];
console.log(numerosDaMega[0])
let numberLivre:Readonly<number[]> = [10,12,13,14];
console.log(numberLivre[1])

// TuPlas 
let list:[string, number, string] = ["string", 1, "string"];
let list2:[nome:string, idade:number, email:string] = ["Bill Gates", 65, "bill@gmail.com"]
console.log(list, list2);
console.log(list[0], list2[1])

// enum caso voce não passar um valor ele vai incrementar sozinho
export enum DiaDaSemana {
    Segunda = 1,
    Terca = 2,
    Quarta = 3,
    Quinta = 4,
    Sexta = 5,
    Sabado = 6,
    Domingo = 7
}

export enum DiaDaSemanaString {
    Segunda = "Segunda",
    Terca = "Terça",
    Quarta = "Quarta",
    Quinta = "Quinta",
    Sexta = "Sexta",
    Sabado = "Sabado",
    Domingo = "Domingo"
}

let dia = DiaDaSemana[3]
console.log(dia)
let diaString = DiaDaSemanaString.Sabado
let diaString2 = DiaDaSemanaString['Sabado']

export enum Heterogeneous {
    Segunda = 'Segunda-feira',
    Terca = 1,
    Quarta,
    Quinta,
    Sexta,
    Sabado,
    Domingo = 18,
}

console.log(Heterogeneous.Segunda); 
console.log(Heterogeneous['Segunda']); 

console.log(Heterogeneous['Terca']); 
console.log(Heterogeneous[1]); 

console.log(Heterogeneous['Quarta']); 
console.log(Heterogeneous['Quinta']); 
console.log(Heterogeneous['Sexta']); 
console.log(Heterogeneous['Sabado']); 
console.log(Heterogeneous['Domingo']);

