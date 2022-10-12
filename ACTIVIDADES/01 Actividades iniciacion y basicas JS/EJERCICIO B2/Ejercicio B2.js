var peso = prompt("Introduce tu peso: ");
var altura = prompt("introduce tu altura en metros: ")

var imc = peso/(altura**2);

if(imc<18){
    alert("Peso bajo. Valorar signos de desnutrición.");
}else if(imc>18 && imc<=24.9){
    alert("Peso normal");
}else if(imc>25 && imc<26.9){
    alert("Sobrepeso");
}else if(imc>27 && imc<=29.9){
    alert("Obesidad grado I. Riesgo relativo para desarrollar enfermedades cardiovasculares");
}else if(imc>30 && 39.9){
    alert("Obesidad grado II. Riesgo muy alto para el desarrollo de enfermedades cardiovasculares");
}else if(imc>40){
    alert("Obesidad grado III Extrema o Mórbida. Riesgo relativo extremadamente alto para el desarrollo de enfermedades cardiovasculares")
}