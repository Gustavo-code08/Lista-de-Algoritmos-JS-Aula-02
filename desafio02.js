let idade = prompt("Digite sua idade: ");

if(idade>=18){
    console.log("Acesso liberado: Maior de idade.");
}
else if(idade<18 && idade>=0){
    console.log("Acesso negado: Menor de idade.")
}
else{
    console.log("Idade inválida")
}