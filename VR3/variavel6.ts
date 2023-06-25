interface InterfaceGenerica<I> {
    
}

/*

ele nos permite criar um componente que pode funcionar em vários tipos, em vez de em um único. 
Ao contrário dos tipos de objetos não genéricos, os tipos genéricos só podem ser criados com interfaces ou classes.

*/

interface Array<T> {

}

const nomes:Array<string> = ['pesso1', 'pesso2', 'pesso3'];
const dias:Array<number> = [5,25,28];

// Para criar uma função genérica, basta adicionar as chaves ​ ​<T>​ ​.

function funcaoGenerica<T>() {}

funcaoGenerica<number>()
funcaoGenerica<string>()
funcaoGenerica<boolean>()

function funcaoGenerica2<T>(value: T): T {
    return value;
}


console.log(funcaoGenerica2<Number>(1))
//retorna 1

console.log(funcaoGenerica2<string>('teste'))
//retorna teste

console.log(funcaoGenerica2<boolean>(true))
//retorna true


function fun<T, U, V>(args1:T, args2: U, args3: V): V {
    return args3;
}
  
console.log(fun<string, number, boolean>('teste', 1, true))
//retorna true


interface InterfaceGenerica<I> {
   
}

class classeGenerica<T> implements InterfaceGenerica<T> { 
    private arr: Array<T> = []; // parametro

    adicionaValor(item: T) {
        this.arr.push(item);
    }

    retornaValores() {
        return this.arr;
    }

    removeItem(item: T) {
        let index = this.arr.indexOf(item);
        if (index > -1)
         this.arr.splice(index, 1);
    }
}


let classeGenerica1 = new classeGenerica<number>();
classeGenerica1.adicionaValor(1);
classeGenerica1.adicionaValor(2);
classeGenerica1.adicionaValor(3);
console.log(classeGenerica1.retornaValores());

classeGenerica1.removeItem(1);
console.log(classeGenerica1.retornaValores());

let classeGenerica2 = new classeGenerica<string>();
classeGenerica2.adicionaValor('Homem de ferro');
classeGenerica2.adicionaValor('Homem aranha');
console.log(classeGenerica2.retornaValores());

classeGenerica2.removeItem('Homem aranha');
console.log(classeGenerica2.retornaValores());
