let nome = prompt("Digite o nome de usuário: ");
let senha = prompt("Digite a senha: ");

if(nome === "admin" && senha === "senai123"){
    console.log("Acesso liberado, Bem vindo!");
}
else{
    console.log("Acesso negado")
}