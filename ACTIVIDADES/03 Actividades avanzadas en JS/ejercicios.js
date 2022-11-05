/*1.- separados_$ Crea un código JS que devuelva los elementos del array introducido en un String y separados por el símbolo $ */

function ejercicio1(){
    let arr = [];
    let continuar = true;

    while(continuar == true){
        let elemento = prompt("Introduce un elemento del array o pulsa enter para finalizar");
        if(elemento.length!=0){
            arr.push(elemento);
        }else{
            continuar = false;
        }
    }

    let output = "";

    for(let i=0; i<arr.length; i++){
        output += "$" + arr[i] + " ";
    }

    document.getElementById("ejercicio1").innerHTML = output;
}

/*2.- concat Crea un código JS que concatene el array introducido en el array [“zen”, 19, “choice”]*/

function ejercicio2(){
    let arr1 = ["zen", 19, "choice"];
    let arr2 = [];
    
    for(let i=0; i<3; i++){
        arr2[i] = prompt("Introduce el elemento " + i + " del array");
    }
    document.getElementById("ejercicio2").innerHTML = arr1.concat(arr2);
}

/* 3.- splice Crea un código JS que en el array introducido le elimine el 2º elemento*/

function ejercicio3(){
    let arr = [];
    let continuar = true;

    while(continuar == true){
        let elemento = prompt("Introduce un elemento del array o pulsa enter para finalizar");
        if(elemento.length!=0){
            arr.push(elemento);
        }else{
            continuar = false;
        }
    }

    arr.splice(1, 1);

    let output = "";

    for(let i=0; i<arr.length; i++){
        output += arr[i] + ", ";
    }

    document.getElementById("ejercicio3").innerHTML = output;
}

/*4.- splice2 Crea un código JS que en el array introducido le elimine el 2º elemento y añada dos elementos nuevos, 
“Doe” y 3.1415 en aquella posición */

function ejercicio4(){
    let arr = [];
    let continuar = true;

    while(continuar == true){
        let elemento = prompt("Introduce un elemento del array o pulsa enter para finalizar");
        if(elemento.length!=0){
            arr.push(elemento);
        }else{
            continuar = false;
        }
    }

    arr.splice(1, 1, "Doe", 3.1415);

    let output = "";

    for(let i=0; i<arr.length; i++){
        output += arr[i] + ", ";
    }

    document.getElementById("ejercicio4").innerHTML = output;
}

/*5.- strOrdenaMajor Crea un código JS que ordene un Array de Strings alfabéticamente */

function ejercicio5(){
    let arr = [];
    let continuar = true;

    while(continuar == true){
        let elemento = prompt("Introduce un elemento del array o pulsa enter para finalizar");
        if(elemento.length!=0){
            arr.push(elemento);
        }else{
            continuar = false;
        }
    }

    arr.sort();

    let output = "";

    for(let i=0; i<arr.length; i++){
        output += arr[i] + ", ";
    }

    document.getElementById("ejercicio5").innerHTML = output;
}

/*6.- numOrdenaMajor Ordena de menor a mayor un array de números */

function ejercicio6(){
    let arr = [];
    output = "";
    
    for(let i=0; i<25; i++){
        arr[i] = Math.floor(Math.random()*25);
    }
    output += "Array desordenado <br><br>";

    for(let j=0; j<arr.length; j++){
        output += arr[j] + ", ";
    }

    arr.sort(function(a, b){return a - b});

    output += "<br><br> Array ordenado <br><br>"

    for(let k=0; k<arr.length; k++){
        output += arr[k] + ", ";
    }
    document.getElementById("ejercicio6").innerHTML = output;
}

/*7.- numOrdenaMenor Ordena de mayor a menor un array de números */

function ejercicio7(){
    let arr = [];
    output = "";
    let size = parseInt(prompt("Como de grande quieres que sea el array?"));
    
    for(let i=0; i<size; i++){
        arr[i] = Math.floor(Math.random()*size);
    }
    output += "Array desordenado <br><br>";

    for(let j=0; j<arr.length; j++){
        output += arr[j] + ", ";
    }

    arr.sort(function(a, b){return b - a});

    output += "<br><br> Array ordenado <br><br>"

    for(let k=0; k<arr.length; k++){
        output += arr[k] + ", ";
    }
    document.getElementById("ejercicio6").innerHTML = output;
}

/*8.- strOrdenaPerLong Crea un código JS que ordene un Array de Strings de forma que aquellos elementos con strings más 
largos estén delante. */

function ejercicio8(){
    let arr = [];
    let continuar = true;

    while(continuar == true){
        let elemento = prompt("Introduce un elemento del array o pulsa enter para finalizar");
        if(elemento.length!=0){
            arr.push(elemento);
        }else{
            continuar = false;
        }
    }

    arr.sort((a,b) => {
        if(a==b){
            return 0;
        }else if(a.length > b.length){
            return -1;
        }else{
            return 1;
        }
    });

    let output = "";

    for(let i=0; i<arr.length; i++){
        output += arr[i] + ", ";
    }

    document.getElementById("ejercicio8").innerHTML = output;
}

/*9.- strArrayLongituds Crea un codi JS que a partir d’un Array de Strings obtengui un array paral·lel amb les 
longituts dels elements. map() */

function ejercicio9(){
    let arr = [];
    let continuar = true;

    while(continuar == true){
        let elemento = prompt("Introduce un elemento del array o pulsa enter para finalizar");
        if(elemento.length!=0){
            arr.push(elemento);
        }else{
            continuar = false;
        }
    }

    let mapArr = arr.map(elemento => elemento.length);

    let output = "";

    for(let i=0; i<arr.length; i++){
        output += arr[i] + ", ";
    }

    output += "<br><br>";

    for(let j=0; j<mapArr.length; j++){
        output += mapArr[j] + ", ";
    }

    document.getElementById("ejercicio9").innerHTML = output;
}

/*10.- strCreaFraseGuions Escribe un código JS que una función que, al pasarle un array de palabras, 
cree un String con estas palabras separadas por guiones, pero sin añadir guiones al principio y al final del String */

function ejercicio10(){
    let arr = [];
    let continuar = true;

    while(continuar == true){
        let elemento = prompt("Introduce un elemento del array o pulsa enter para finalizar");
        if(elemento.length!=0){
            arr.push(elemento);
        }else{
            continuar = false;
        }
    }

    let output = "";

    for(let i=0; i<arr.length-1; i++){
        output += arr[i] + "-";
    }
    output = output + arr[arr.length-1];

    document.getElementById("ejercicio10").innerHTML = output;
}

/*11.- strCreaAcronim Hacer un código que tome todas las palabras de un Array de Strings y
construya un acrónimo en mayúsculas. map() */

function ejercicio11(){
    let arr = [];
    let continuar = true;

    while(continuar == true){
        let elemento = prompt("Introduce un elemento del array o pulsa enter para finalizar");
        if(elemento.length!=0){
            arr.push(elemento);
        }else{
            continuar = false;
        }
    }

    mapArr = arr.map(acro => acro[0].toUpperCase());

    let output = "";

    for(let i=0; i<arr.length; i++){
        output += arr[i] + " ";
    }
    output += "<br><br>"
    for(let j=0; j<arr.length; j++){
        output += mapArr[j];
    }

    document.getElementById("ejercicio11").innerHTML = output;
}

/*12.- strFiltreLongitud Escribe un código JS que elimine de un Array de Strings todos aquellos elementos
que tengan una longitud inferior a 5. filter() */

function ejercicio12(){
    let arr = [];
    let continuar = true;

    while(continuar == true){
        let elemento = prompt("Introduce un elemento del array o pulsa enter para finalizar");
        if(elemento.length!=0){
            arr.push(elemento);
        }else{
            continuar = false;
        }
    }

    filterArr = arr.filter(elemento => elemento.length < 5);

    let output = "";

    for(let i=0; i<arr.length; i++){
        output += arr[i] + " ";
    }

    output += "<br><br>";

    for(let j=0; j<filterArr.length; j++){
        output += filterArr[j];
    }

    document.getElementById("ejercicio11").innerHTML = output;
}

/*13.- numSumaForeach Obtiene la suma total de un array de números utilizando el método
forEach() */

function ejercicio13(){
    let arr = [];
    output = "";
    let size = parseInt(prompt("Como de grande quieres que sea el array a sumar?"));
    
    for(let i=0; i<size; i++){
        arr[i] = Math.floor(Math.random()*size);
    }

    output += "Array de numeros <br><br>"

    for(let j=0; j<arr.length; j++){
        output += arr[j] + ", ";
    }

    output += "<br><br> La suma de los numeros es: "

    let suma = 0;

    arr.forEach(element => {
        suma += element;
    });

    output += suma;

    document.getElementById("ejercicio13").innerHTML = output;
}

/*14.- strOcurrencias Escribe un código JS que calcule el número de veces que aparece
exactamente el string “la” en un array. */

function ejercicio14(){
    let arr = [];
    let continuar = true;

    while(continuar == true){
        let elemento = prompt("Introduce un elemento del array o pulsa enter para finalizar");
        if(elemento.length!=0){
            arr.push(elemento);
        }else{
            continuar = false;
        }
    }

    let output = "Array introducido <br><br>";

    for(let i=0; i<arr.length; i++){
        output += arr[i] + ", ";
    }

    output += "<br><br>Elementos en los que sale el string 'la'<br><br>";

    let filterArr = arr.filter(element => element.includes("la"));

    for(let j=0; j<filterArr.length; j++){
        output += filterArr[j];
    }

    document.getElementById("ejercicio14").innerHTML = output;
}

/*15.- numSumaReduce Obtener la suma total de un array de números utilizando el método
reducción() */

function ejercicio15(){
    let arr = [];
    output = "";
    let size = parseInt(prompt("Como de grande quieres que sea el array a sumar?"));
    
    for(let i=0; i<size; i++){
        arr[i] = Math.floor(Math.random()*size);
    }

    output += "Array de numeros <br><br>"

    for(let j=0; j<arr.length; j++){
        output += arr[j] + ", ";
    }

    output += "<br><br> La suma de los numeros es: "

    let valorInicial = 0;

    let sumaConReduccion = arr.reduce((anteriorvalor, valor) => anteriorvalor + valor, valorInicial);

    output += sumaConReduccion;

    document.getElementById("ejercicio15").innerHTML = output;
}

/*16.- numMaxForeach Obtiene el valor numérico más alto de un array utilizando forEach */

function ejercicio16(){
    let arr = [];
    output = "";
    let size = Math.floor(Math.random()*1000);
    
    for(let i=0; i<size; i++){
        arr[i] = Math.floor(Math.random()*size);
    }

    output += "Array de numeros <br><br>"

    for(let j=0; j<arr.length; j++){
        output += arr[j] + ", ";
    }

    output += "<br><br> El valor mas alto es: "
    let max = arr[0];

    arr.forEach(element => { if(element>max){max = element}});
    

    output += max;

    document.getElementById("ejercicio16").innerHTML = output;
}

/*17.- restructuraArray Escribe un código JS que cree un Array nuevo cogiendo el primero y el último
elemento de un Array y colocándolos en el centro del Array. (Para hacer este ejercicio, daremos por
supuesto que siempre se tratará de un Array con un número par de posiciones) */

function ejercicio17(){
    let arr = [];
    let continuar = true;

    while(continuar == true){
        let elemento = prompt("Introduce un elemento del array o pulsa enter para finalizar");
        if(elemento.length!=0){
            arr.push(elemento);
        }else if(elemento.length == 0 && arr.length%2!=0){
            alert("El array debe de ser impar!! introduce un elemento mas!")
        }
        else{
            continuar = false;
        }
    }

    let output = "Array introducido <br><br>";

    for(let i=0; i<arr.length; i++){
        output += arr[i] + ", ";
    }

    output += "<br><br>Array cambiando las posiciones de sus extremos<br><br>";

    arr.splice((arr.length/2), 0, arr[0], arr[arr.length-1]);
    arr.splice(0, 1);
    arr.splice(arr.length-1, 1)
    

    for(let j=0; j<arr.length; j++){
        output += arr[j] + ", ";
    }

    document.getElementById("ejercicio17").innerHTML = output;
}

/*18.- capCuaArray Escribe un código JS que dado un array de números, recorte los tres primeros
elementos del array y los coloque al final en orden invertido. */

function ejercicio18(){
    let arr = [];
    output = "";
    let size = Math.floor(Math.random()*10);
    
    for(let i=0; i<size; i++){
        arr[i] = Math.floor(Math.random()*10);
    }

    output += "Array de numeros <br><br>"

    for(let j=0; j<arr.length; j++){
        output += arr[j] + ", ";
    }

    output += "<br><br> El array con los cambios solicitados es: "

    arr.splice(arr.length, 0, arr[2], arr[1], arr[0]);
    arr.splice(0,3);
    
    for(let j=0; j<arr.length; j++){
        output += arr[j] + ", ";
    }

    document.getElementById("ejercicio18").innerHTML = output;
}