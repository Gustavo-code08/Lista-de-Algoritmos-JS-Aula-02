let tempcorporal = Number(prompt("Qual a temperatura média corporal do paciente: "));

if(tempcorporal > 37.5){
    console.log("Alerta: Estado Febril.");
}
else{
    console.log("Temperatura normal.");
}