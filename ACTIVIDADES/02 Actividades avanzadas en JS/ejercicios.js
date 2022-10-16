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

function ejercicioC2(){
    var notas = [];
    var continuar = true;
    var i = 0;

    while(continuar == true && i<5){
        var nota = prompt("Introduce una nota");
        
        if(nota.length != 0 && notas.length<4){
            if(nota<0 || nota>11){
                alert("La nota introducida es incorrecta");
            }else if(nota >= 0 && nota<5){
                alert("La nota introducida es equivalente a insuficiente");
                notas[i] = parseInt(nota);
                i++;
            }else if(nota >= 5 && nota<7){
                alert("La nota introducida es equivalente a bien");
                notas[i] = parseInt(nota);
                i++;
            }else if(nota >= 7 && nota <9){
                alert("la nota introducida es equivalente a notable");
                notas[i] = parseInt(nota);
                i++;
            }else if(nota >= 9 && nota <= 10){
                alert("La nota introducida es equivalente a sobresaliente")
                notas[i] = parseInt(nota);
                i++;
            }
        }else{
            var media = 0;
            for(var j=0; j<notas.length; j++){
                media = media + notas[j];
            }
            media = media/notas.length;
            alert("Tu nota media es de: " + media)
            continuar = false;
        }
    }
}

/*Ejercicio C3: El signo zodiacal de una persona está determinado por su día de nacimiento. Realiza un programa que 
determine tu sigo del zodiaco en función de tu fecha de nacimiento. Deberás usar un diccionario, array o lista que asocia 
a cada signo el período del año que le corresponde.*/

function ejercicioC3(){
    var dia = parseInt(prompt("Introduce el dia que naciste"));
    var mesNacimiento = parseInt(prompt("Introduce el mes en que naciste"));

    if(mesNacimiento == 3 && dia >= 21 && dia <= 31){
        alert("Tu signo del zodiaco es Aries");
    }else if(mesNacimiento == 4 && dia>=1 && dia<=20){
        alert("Tu signo del zodiaco es Aries");
    }else if(mesNacimiento == 4 && dia>=21 && dia<=30){
        alert("Tu signo del zodiaco es Tauro");
    }else if(mesNacimiento == 5 && dia>=1 && dia<=21){
        alert("Tu signo del zodiaco es Tauro");
    }else if(mesNacimiento == 5 && dia>=22 && dia<=31){
        alert("Tu signo del zodiaco es Géminis");
    }else if(mesNacimiento == 6 && dia>=1 && dia<=21){
        alert("Tu signo del zodiaco es Géminis");
    }else if(mesNacimiento == 6 && dia>=22 && dia<=30){
        alert("Tu signo del zodiaco es Cáncer");
    }else if(mesNacimiento == 7 && dia>=1 && dia<=22){
        alert("Tu signo del zodiaco es Cáncer");
    }else if(mesNacimiento == 7 && dia>=23 && dia<=31){
        alert("Tu signo del zodiaco es Leo");
    }else if(mesNacimiento == 8 && dia>=1 && dia<=23){
        alert("Tu signo del zodiaco es Leo");
    }else if(mesNacimiento == 8 && dia>=24 && dia<=31){
        alert("Tu signo del zodiaco es Virgo");
    }else if(mesNacimiento == 9 && dia>=1 && dia<=23){
        alert("Tu signo del zodiaco es Virgo");
    }else if(mesNacimiento == 9 && dia>=24 && dia<=30){
        alert("Tu signo del zodiaco es Libra");
    }else if(mesNacimiento == 10 && dia>=1 && dia<=23){
        alert("Tu signo del zodiaco es Libra");
    }else if(mesNacimiento == 10 && dia>=24 && dia<=31){
        alert("Tu signo del zodiaco es Escorpio");
    }else if(mesNacimiento == 11 && dia>=1 && dia<=22){
        alert("Tu signo del zodiaco es Escorpio");
    }else if(mesNacimiento == 11 && dia>=23 && dia<=30){
        alert("Tu signo del zodiaco es Sagitario");
    }else if(mesNacimiento == 12 && dia>=1 && dia<=21){
        alert("Tu signo del zodiaco es Sagitario");
    }else if(mesNacimiento == 12 && dia>=22 && dia<=31){
        alert("Tu signo del zodiaco es Capricornio");
    }else if(mesNacimiento == 1 && dia>=1 && dia<=20){
        alert("Tu signo del zodiaco es Capricornio");
    }else if(mesNacimiento == 1 && dia>=21 && dia<=31){
        alert("Tu signo del zodiaco es Acuario");
    }else if(mesNacimiento == 2 && dia>=1 && dia<=18){
        alert("Tu signo del zodiaco es Acuario");
    }else if(mesNacimiento == 2 && dia>=19 && dia<=29){
        alert("Tu signo del zodiaco es Piscis");
    }else if(mesNacimiento == 3 && dia>=1 && dia<=20){
        alert("Tu signo del zodiaco es Piscis");
    }else{
        alert("La fecha de nacimiento introducida no es la correcta")
    }
}

/*Ejercicio C4: Escribe un programa que muestre una tabla de multiplicar como la siguiente:*/

function ejercicioC4(){
    document.write("<table border=\"solid\">")
    for(var i = 1; i<=10; i++){
        document.write("<tr>")
        for(var j = 1; j<=10; j++){
            document.write("<td>" + i*j + "</td>");
        }
        document.write("</tr>");
    }
    document.write("</table>")
}

/*Ejercicio C5: Un viajero desea saber cuánto tiempo tomó un viaje que realizó. Él tiene la duración en minutos de 
cada uno de los tramos del viaje.
Desarrolla un programa que permita ingresar los tiempos de viaje de los tramos y entregue como resultado el 
tiempo total de viaje en formato horas:minutos
El programa deja de pedir tiempos de viaje cuando se ingresa un 0. */

function ejercicioC5(){

    var continuar = true;
    var i = 0;
    var totalMinutos = 0;
    var minutosArr = [];

    while(continuar == true){
        var minutosStr = prompt("Introduce los minutos que te ha llevado el viaje (en blanco para terminar)");
        var minutos = parseInt(minutosStr);
        
        if(minutosStr.length != 0){
            minutosArr[i] = minutos;
            i++;
        }else{
            for(var j=0; j<minutosArr.length; j++){
                document.write("Duracion del tramo: " + minutosArr[j] + "<br>")
                totalMinutos = totalMinutos + minutosArr[j];
            }
            var horas = Math.floor(totalMinutos/60);
            var minutos = (totalMinutos%60).toFixed();
            document.write("Duracion total del viaje: " + horas + " horas " + minutos + " minutos.");
            continuar = false;
        }
    }
}

/*Ejercicio C6: Escribe un programa que «piense» un número entre 0 y 100, y entregue pistas al usuario para que lo adivine. 
El usuario debe ingresar su intento, y el programa debe decir si el número pensado es mayor, menor, o el correcto: */

function ejercicioC6A(){

    var numero = Math.floor(Math.random() * (100 - 0) + 0);
    var continuar = true;

    while(continuar == true){
        var numeroUsuario = parseInt(prompt("Introduce un numero: "));

        if(numero > numeroUsuario){
            alert("El numero es mayor que " + numeroUsuario);
        }else if(numero < numeroUsuario){
            alert("El numero es menor que " + numeroUsuario);
        }else{
            alert("Has adivinado el número!!!")
            continuar = false;
        }
    }
}

/*Ejercicio C6B: Una vez que completes este ejercicio, es hora de invertir los roles: ahora tú pensarás un número y 
el computador lo adivinará.*/

function ejercicioC6B(){
    var max = 100;
    var min = 0;
    var numeroUsuario = parseInt(prompt("Introduce un numero: "));
    var continuar = true;


    while(continuar == true){
        var numeroMaquina = Math.floor(Math.random() * (max - min) + min);
        alert("Creo que el numero que has pensado es el: " + numeroMaquina);
        var respuestaUsuario = prompt("Responde si el numero introducido es mayor, menor o igual en caso de que lo haya adivinado");

        if(respuestaUsuario == "mayor"){
            min = numeroMaquina;
        }else if(respuestaUsuario == "menor"){
            max = numeroMaquina;
        }else if(respuestaUsuario == "igual" && numeroMaquina == numeroUsuario){
            alert("La Inteligencia Artificial ha adivinado el numero!!");
            continuar = false;
        }else{
            alert("Disculpa, no te he entendido bien");
        }
    }
}

/*Ejercicio C7: Una máquina de alimentos tiene productos de tres tipos, A, B y C, que valen respectivamente 1.20€, 
2.70€ y 4.80€. La máquina acepta y da cambio con monedas de 10cent, 50cent y 1€.Escriba un programa que pida al usuario 
elegir el producto y luego le pida ingresar las monedas hasta alcanzar el monto a pagar. Si el monto ingresado es mayor 
que el precio del producto, el programa debe entregar las monedas de vuelto, una por una. */

function ejercicioC7(){
    var productoA = 1.20;
    var productoB = 2.70;
    var productoC = 4.80;
    
    var totalImporteIntroducido = 0;
    var importeTotal;
    var continuar = true

    while(continuar == true){
        var productoCliente = prompt("Que producto quiere? (A:1.20€)(B:2.70€)(C:4.80€)")
        if(productoCliente == "A"){
            importeTotal = productoA;
            document.write("Producto A, precio 1.20€ <br>")
            continuar = false;
        }else if(productoCliente == "B"){
            importeTotal = productoB;
            document.write("Producto B, precio 2.70€ <br>")
            continuar = false;
        }else if(productoCliente == "C"){
            importeTotal = productoC;
            document.write("Producto C, precio 4.80€ <br>")
            continuar = false;
        }else{
            alert("Ese producto no existe;")
            continuar = true;
        }
    }

    while(totalImporteIntroducido < importeTotal){

        var importeIntroducido = prompt("Introduzca monedas, solo admite de 0.10, 0.50 y 1€: ");

        if(importeIntroducido == "0.10"){
            totalImporteIntroducido = totalImporteIntroducido + 0.1;
            alert("Has introducido una moneda de 0.10€, quedan " + (importeTotal- totalImporteIntroducido));
        }else if(importeIntroducido == "0.50"){
            totalImporteIntroducido = totalImporteIntroducido + 0.5;
            alert("Has introducido una moneda de 0.50€, quedan " + (importeTotal- totalImporteIntroducido));
        }else if(importeIntroducido == "1"){
            totalImporteIntroducido = totalImporteIntroducido + 1;
            alert("Has introducido una moneda de 1€, quedan " + (importeTotal- totalImporteIntroducido));
        }else{
            alert("No admitimos ese tipo de monedas")
        }
    }

    var resto = totalImporteIntroducido - importeTotal;

    while(resto >= 0){
        
        if(totalImporteIntroducido == importeTotal){
            alert("Ha introducido el importe exacto")
        }else if(resto-1 >= 0){
            resto = resto - 1;
            alert("Su cambio, 1€");
        }else if(resto -0.5 >= 0){
            resto = resto - 0.5;
            document.write("Su cambio, 0.5€");
        }else if(resto - 0.1 >= 0){
            resto = resto - 0.1;
            alert("Su cambio, 0.1€");
        }
    
    }
}

/*Ejercicio C8: El supermercado Pryca ha lanzado una promoción para todos sus clientes que posean su tarjeta de fidelización. 
La promoción consiste en aplicar un descuento por cada n productos que pasan por caja. El primer descuento es de 20%, y se 
aplica sobre los primeros n productos ingresados. Luego, cada descuento es la mitad del anterior, y es aplicado sobre los 
siguientes n productos.Por ejemplo, si n = 3 y la compra es de 11 productos, entonces los tres primeros tienen 20% de descuento, 
los tres siguientes 10%, los tres siguientes 5%, y los dos últimos no tienen descuento. Escriba un programa que pida al usuario 
ingresar n y la cantidad de productos, y luego los precios de cada producto. Al final, el programa debe entregar el precio total, 
el descuento total y el precio final después de aplicar el descuento.
Si al aplicar el descuento el precio queda con decimales, redondee el valor hacia abajo. */

function ejercicioC8(){
    var continuar = true;
    var productos = 0;
    var i = 0;
    var precioProductos = []
    var nProductos = parseInt(prompt("Cuantos productos distintos has comprado?"));

    while(continuar == true){
        var introduceProductos = prompt("Introduce el precio del producto " + i + " pulsa Enter para terminar");
        if(introduceProductos.length == 0){
            continuar = false;
        }else{
            precioProductos[i] = parseInt(introduceProductos)
            i++;
        }
    }

    var descuento = 0.2;
    //var j = 0;
    var fin = 3;

    while(descuento>= 0.05 && fin<=precioProductos.length){
        for(j=0; j<fin; j++){
            precioProductos[j] = precioProductos[j]*(1-descuento);
        }
        fin += 3;
        descuento = descuento/2;
        
    }

    var total = 0;

    for(l=0; l<precioProductos.length; l++){
        total += precioProductos[l];
    }
    Math.round(total, -2);
    alert("El total de su compra es de: " + total)
}