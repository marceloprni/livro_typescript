interface Point {
        x: number;
        y: number;
        z: string;
}

///////////////////////////////////////////////////////////
function showCoords(obj: Point) {
    console.log(obj.x, obj.y, obj.z);
}

const coordObj: Point = {
    x: 10,
    y: 20,
    z: "20"
}

console.log(coordObj)


interface neste {
    name:string
}

interface neste {
    age:number
}

const pessoal: neste = {name: "Marcelo", age: 30}

console.log(pessoal)

//////////////////////////////////////////////////

function showDirection(direction: "left" | "right" | "center") {
    console.log(`A direção é: ${direction}`);
}

showDirection("left");

////////////////////////////////////////////////

/*

const p = document.getElementById("some-p")

console.log(p!.innerText) - você tem que colocar o ponto de interogação

*/

///////////////////////////////////////////////
interface Z {x(): string}

class A implements Z {
    x(): string {
        throw new Error("Method not implemented.");
    }
}

class B implements Z {
    x(): string {
        throw new Error("Method not implemented.");
    }
}

function exemploComInstanceof(parametro: Z) {
    if(parametro instanceof A) {
        console.log("Sou a classe A");
    } else if (parametro instanceof B) {
        console.log("Sou a classe B");
    }
}

exemploComInstanceof(new B());
exemploComInstanceof(new A());