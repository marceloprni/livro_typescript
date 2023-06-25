"use strict";
function typeAssetions(codigoAny) {
    console.log(typeof codigoAny);
    let codigo = codigoAny; // aqui ele converte qualquer variavel para number
    return codigo * 10;
}
console.log(typeAssetions(20));
console.log(typeAssetions("a"));
