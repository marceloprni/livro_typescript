let perfil = "adminere"
let perfil2 = null;
let perfil3 = undefined;
console.log(perfil == "super"? "super usario": perfil == "admin" ? "admin usario": "usuario comum");

/*

??
esse funcionalidade verifica se o valor da direita é null ou undefined 
caso seja, ela retorna o resultado padrão, caso não, ela retorna o valor da direita.

*/

console.log(perfil ?? "Usuário Comum");
console.log(perfil2 ?? "Usuário Comum");
console.log(perfil3 ?? "Usuário Comum");