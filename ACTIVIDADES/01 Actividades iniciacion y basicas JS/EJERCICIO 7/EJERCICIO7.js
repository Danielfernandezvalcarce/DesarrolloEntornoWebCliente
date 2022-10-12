var numero = prompt("Introduce un numero");

var factorial = 1;

for(var i=1; i<=numero; i++){
    var factorial = factorial * i;
}

alert("El factorial de " + numero + " es " + factorial);