
function log():void {
    console.log('esse void não função e proibido retorna void.')
}

console.log(log())

function verificandoTipo(x:string | number):boolean {
    if(typeof x === "string") {
        return true;
    } else if (typeof x === "number") {
        return false
    }

    return fail('esse metodo não aceita esse tipo de type')
}

function fail(message: string):never {
    throw new Error(message);
}

console.log(verificandoTipo("teste string"));
console.log(verificandoTipo(10));
let ativo = 23;
console.log(verificandoTipo(ativo));

function Update():never {
    while(true) {
        console.log("Carregando processos!")
    }
}

console.log(Update())
/* 
O type ​ ​void​ ​ pode receber o valor ​ ​null​ ​, que indica ausência de um objeto, 
ou ​ ​undefined​ ​, que indica a ausência de qualquer valor.

O type ​ ​never​ ​ não pode receber valor. 
A seguir você tem um exemplo demonstrando os dois types como variáveis:

let something: void = null
let nhoting: never = null;

*/
