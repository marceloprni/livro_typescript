
function deleteTeste(usuario:string | string[]) {
    if(typeof usuario == 'string') {
        console.log(usuario, "deletado")
    } else {
        var i: number;
        for(i=0; i<usuario.length; i++) {
            console.log(usuario[i], 'deletado')
        }
    }
}

console.log(deleteTeste('Marcelo'))

let x: string| number| boolean = 13;
console.log(typeof(x));

