/*Ejercicio 8: Escribir el código de una función a la que se pasa como parámetro un número entero y
devuelve como resultado una cadena de texto que indica si el número es par o impar. Mostrar
por pantalla el resultado devuelto por la función.*/


function ejercicio8(){
    var numeroS = prompt("Introduce un numero");
    var numero = parseInt(numeroS);

    if(numero%2 == 0){
        alert("El numero introducido es par");
    }else{
        alert("El numero introducido es impar");
    }
}

/*Ejercicio 9: Definir una función que muestre información sobre una cadena de texto que se le pasa como
argumento. A partir de la cadena que se le pasa, la función determina si esa cadena está
formada sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas.*/

function ejercicio9(){

    var texto = prompt("Introduce un texto a examinar.");
    var contadorMayus = 0;
    var contadorMin = 0;
    var abcMin = "abcdefghijklmnopqrstuvwxyz";
    var abcMayus = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    for(var i=0; i<texto.length; i++){
        for(var j=0; j<abcMin.length; j++){
            if(texto[i] == abcMin[j]){
                contadorMin++
            }
        }
        for(var k=0; k<abcMayus.length; k++){
            if(texto[i] == abcMayus[k]){
                contadorMayus++
            }
        }
    }

    if(contadorMin != 0 && contadorMayus == 0){
        alert("El texto introducido esta todo en minusculas");
    }else if(contadorMayus != 0 && contadorMin == 0){
        alert("El texto introducido esta todo en mayusculas");
    }else if(contadorMayus != 0 && contadorMin != 0){
        alert("El texto está en mayusculas y minusculas");
    }

}

/*Ejercicio 10: Definir una función que determine si la cadena de texto que se le pasa como parámetro es un
palíndromo, es decir, si se lee de la misma forma desde la izquierda y desde la derecha.
Ejemplo de palíndromo complejo: "La ruta nos aporto otro paso natural".*/

function ejercicio10(){
    var texto = prompt("Introduce una cadena de texto a examinar").toLowerCase();
    var textoJunto = texto.split(" ").join("");
    var textoReves = "";
    var contador = 0;

    for(var i=textoJunto.length-1; i>=0; i--){
        textoReves = textoReves + textoJunto[i];
    }

    for(var j=0; j<textoJunto.length; j++){
        if(textoJunto[j] == textoReves[j]){
            contador++;
        }
    }

    if(contador == textoJunto.length){
        alert("El texto es un palíndromo");
    }else{
        alert("El texto no es un palindromo");
    }

}

/*Ejercicio C1: Con la función getMonth() realiza un script para escriba el nombre del mes en el que estamos. 
La variable a usar seria: var letras = ['Enero', 'Febrero', ...];*/

function ejercicioC1(){
    var fecha = new Date();
    var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviemrbe", "Diciembre"]

    alert("El mes en el que estamos es: " + meses[fecha.getMonth()]);
}

/* Ejercicio C2: Realiza un programa que en función de la nota que introduzcamos, nos muestre por pantalla la nota equivalente
 en letras del estilo Notable, Insuficiente, … A su vez, este programa debe almacenar hasta 5 notas y luego mostrar la media 
 tanto con numero como con letras.*/