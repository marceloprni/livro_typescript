"use strict";
///////////////////////////////////////////////////////////
function showCoords(obj) {
    console.log(obj.x, obj.y, obj.z);
}
const coordObj = {
    x: 10,
    y: 20,
    z: "20"
};
console.log(coordObj);
const pessoal = { name: "Marcelo", age: 30 };
console.log(pessoal);
//////////////////////////////////////////////////
function showDirection(direction) {
    console.log(`A direção é: ${direction}`);
}
showDirection("left");
class A {
    x() {
        throw new Error("Method not implemented.");
    }
}
class B {
    x() {
        throw new Error("Method not implemented.");
    }
}
function exemploComInstanceof(parametro) {
    if (parametro instanceof A) {
        console.log("Sou a classe A");
    }
    else if (parametro instanceof B) {
        console.log("Sou a classe B");
    }
}
exemploComInstanceof(new B());
exemploComInstanceof(new A());
