"use strict";
function deleteTeste(usuario) {
    if (typeof usuario == 'string') {
        console.log(usuario, "deletado");
    }
    else {
        var i;
        for (i = 0; i < usuario.length; i++) {
            console.log(usuario[i], 'deletado');
        }
    }
}
console.log(deleteTeste('Marcelo'));
let x = 13;
console.log(typeof (x));
