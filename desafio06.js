let resposta = prompt("Você é estudante? (responda com sim ou não): ");
let idade = prompt("Qual a sua idade: ");

if(resposta === "sim" || idade >=60){
    console.log("Você tem direito ao desconto de meia-entrada.");
}
else{
    console.log("Você não tem direito ao desconto de meia-entrada.")
}