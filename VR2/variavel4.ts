/* O RETORNO SO PODE SER STRING v */
function greeting(name:string):string {
    return `Ola ${name}`
}

console.log(greeting("Matheus"));


setTimeout(function() {
    const salary: number = 1000
}, 2000);

function passCordinates(coord: {x:number, y:number}) {
    console.log("x coordinates: " + coord.x)
    console.log("x coordinates: " + coord.y)
}

const objCoord = {x: 329, y: 84.2}
passCordinates(objCoord)
