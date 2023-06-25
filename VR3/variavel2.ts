let tipo = "Admin";
let conde = 0;
let conde1 = false;

switch(tipo) {
    case "superuser":
        console.log("Super usuário");
        break;
    case "manager":
        console.log("Gerente");
        break;
    case "admin":
        console.log("Adminitrador");
        break;
    case "user":
        console.log("Usuário comum");
        break;
    default:
        console.log("sem perfil");
        break;
}

while(conde < 5) {
    console.log(conde)
    conde++;
}


do {
    console.log('Carregando!')
} while(conde1) {
    console.log('entrou')
    conde1 = false;
}