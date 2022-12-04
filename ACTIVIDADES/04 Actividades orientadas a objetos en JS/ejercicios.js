const cyclist_team = {
  team: "alfa-lum-1984",
  cyclists: [
    {
      name: "Juan Alonso",
      born: "8/01/1958",
      height: 1.92,
      tours: 0,
      wins: 12,
    },
    {
      name: "Josh Pantano",
      born: "25/10/2000",
      height: 1.84,
      tours: 3,
      wins: 12,
    },
    {
      name: "Bid Seville",
      born: "12/07/1993",
      height: 1.88,
      tours: 3,
      wins: 3,
    },
    {
        name: "Zolz Bucker",
        born: "08/09/1984",
        height: 1.72,
        tours: 0,
        wins: 1,
      },
    {
      name: "Otto Verdes",
      born: "19/02/1979",
      height: 1.92,
      tours: 0,
      wins: 12,
    },
    {
      name: "Bert Poel",
      born: "03/06/1995",
      height: 1.99,
      tours: 1,
      wins: 2,
    },
  ],
};

//01. Imprime nombres: Imprime los nombres de los ciclistas, según el orden natural del  array.

function ejercicio1(cyclist_team){

    let nombres = "";

    for(let i=0; i < cyclist_team.cyclists.length; i++){
        nombres += cyclist_team.cyclists[i].name + ", ";
    }

    document.getElementById("salida").innerHTML = nombres;

}

//02. Imprime nombres ordenados alfabéticamente: Imprime los nombres de los ciclistas  ordenados alfabéticamente.

function ejercicio2(cyclist_team){

    let nombres = "";

    cyclist_team.cyclists.sort((a, b) => (a.name > b.name) ? 1 : -1);

    for(let i=0; i < cyclist_team.cyclists.length; i++){
        nombres += cyclist_team.cyclists[i].name + ", ";
    }

    document.getElementById("salida").innerHTML = nombres;
}

//03. Imprime nombres ordenados por altura y luego saca la lista de los nombres ordenada  por altura, de los más altos a los más bajos.

function ejercicio3(cyclist_team){

    let nombres = "";

    cyclist_team.cyclists.sort((a,b) => b.height - a.height);

    for(let i=0; i < cyclist_team.cyclists.length; i++){
        nombres += cyclist_team.cyclists[i].name + ", ";
    }

    document.getElementById("salida").innerHTML = nombres;
}

/*04. Imprime nombres de ciclistas de mejor a peor: Ordena de peor a mejor, teniendo en  cuenta que el mejor ciclista es el 
que tiene más tours, y si empatan a tours, es mejor el  que tiene más wins. Imprime los nombres ordenados y también el número 
de tours y  de wins.*/


function ejercicio4(cyclist_team){

    let output = "";

    function ordenar(a, b){
      if(a.tours > b.tours){
        return -1;
      }else if(a.tours < b.tours){
        return 1;
      }else{
        if(a.wins > b.wins){
          return -1;
        }
        else if(b.wins < a.wins){
          return 1;
        }
      }
    }

    cyclist_team.cyclists.sort((a, b) => ordenar(a, b));
    
    for (let i=0 ; i < cyclist_team.cyclists.length; i++) {
      
      output += cyclist_team.cyclists[i].name + " tiene " + cyclist_team.cyclists[i].tours + " tours y " + cyclist_team.cyclists[i].wins + " victorias, ";

    }

    document.getElementById("salida").innerHTML = output;
    
}

/*05. Utiliza map() para añadir un tour a todos los ciclistas. */

function ejercicio5(cyclist_team){
  
  const addTours = cyclist_team.cyclists.map(function(element){
    element.tours ++ ;
    return element;
  });

  let output = "";
    
  for (let i=0 ; i < addTours.length; i++) {
    
    output += addTours[i].name + " tiene " + addTours[i].tours + " tours y " + addTours[i].wins + " victorias, ";

  } 

  document.getElementById("salida").innerHTML = output;
}

/*06.  Utiliza filter() para eliminar todos los ciclistas menores de 30 años */

function ejercicio6(cyclist_team){

  let output = "";

  function cambiaFechas(fecha){
    
    for (let i = 0; i < cyclist_team.cyclists.length; i++) {    
      
    }
  }


  for (let i=0 ; i < cyclist_team.cyclists.length; i++) {
    
    output += cyclist_team.cyclists[i].name + " tiene " + cyclist_team.cyclists[i].born + " años.";

  } 

  document.getElementById("salida").innerHTML = output;
}