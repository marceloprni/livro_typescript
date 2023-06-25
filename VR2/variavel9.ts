function calc(x:number, y:number): string {
    return `resultado ${x+y}`
}

console.log( typeof calc(7,4))

let resultado: string;
resultado = calc(10, 15);

console.log(resultado);