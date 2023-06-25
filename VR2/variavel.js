"use strict";
var mensagem = 'mensagem fora do if';
if (true) {
    var mensagemDentro = 'mensagem dentro do if';
    console.log(mensagemDentro);
}
console.log(mensagem);
console.log(mensagemDentro);
mensagem2 = 'msg';
console.log(mensagem2);
var mensagem2;
let mensagemLet = 'mensagem let fora';
if (true) {
    let mensagemLetDentro = 'mensagem dentro do if';
    console.log(mensagemLetDentro);
}
console.log(mensagemLet);
const mensagemConst = 'msg1';
console.log(mensagemConst); // ela não consegue ser alterada 
