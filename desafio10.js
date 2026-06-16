let salabrut = Number(prompt("Digite o salário bruto: "));
let parcela = Number(prompt("Digite o valor da parcela solicitada: "));

const porcentagem = salabrut * 0.30

if(parcela < porcentagem){
    console.log(`O crédito de R$${parcela} foi aprovado.`);
}
else{
    console.log(`O crédito de R$${parcela} foi recusado.`);
}