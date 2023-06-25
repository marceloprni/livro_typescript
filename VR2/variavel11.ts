
function typeAssetions(codigoAny:any) {
    console.log(typeof codigoAny);
    let codigo:number = <number> codigoAny; // aqui ele converte qualquer variavel para number
    return codigo*10;
}

console.log(typeAssetions(20))
console.log(typeAssetions("a"))