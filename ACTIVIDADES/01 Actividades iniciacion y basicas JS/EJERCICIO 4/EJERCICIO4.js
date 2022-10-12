var valores = [true, 5, false, "hola", "adios", 2];

//EJERCICIO 4.1 

var Maxlength = 0;
for(i=0; i<valores.length; i++){
    if(typeof(valores[i] == "String") && valores[i].length > Maxlength){
        Maxlength = valores[i].length;
    } 
}

document.write(Maxlength);
document.write("<br>")
//EJERCICIO 4.2

var bool = [];

for(i=0; i<valores.length; i++){
    if(typeof(valores[i] == "boolean" && valores[i] == false)){
        bool = valores[i] * false; 
    }
    else if(typeof(valores[i] == "boolean") && valores[i] == true){
        bool = valores[i] * false;
    }
}

document.write(bool);
document.write("<br>")

//EJERCICIO 4.3

var a = valores[1];
var b = valores[5];

document.write(a+b);
document.write("<br>");
document.write(a-b);
document.write("<br>");
document.write(a*b);
document.write("<br>");
document.write(a/b);
document.write("<br>");
document.write(a**b);
document.write("<br>");