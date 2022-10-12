var numeros = [];

for(var i =0; i<3; i++){
    numeros[i] = prompt("Introduce un numero: ");
}

var menor = numeros[0];

for (var j in numeros){
    if(numeros[j] < menor){
        menor = numeros[j];
    }
}

alert("El numero menor es: " + menor);