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

    cyclist_team.cyclists.forEach(element => { nombres += element.name + ", "});

    document.getElementById("salida").innerHTML = nombres;

}

//02. Imprime nombres ordenados alfabéticamente: Imprime los nombres de los ciclistas  ordenados alfabéticamente.

function ejercicio2(cyclist_team){

    let nombres = "";

    cyclist_team.cyclists.sort((a, b) => (a.name > b.name) ? 1 : -1);

    cyclist_team.cyclists.forEach(element => { nombres += element.name + ", "});

    document.getElementById("salida").innerHTML = nombres;
}

//03. Imprime nombres ordenados por altura y luego saca la lista de los nombres ordenada  por altura, de los más altos a los más bajos.

function ejercicio3(cyclist_team){

    let nombres = "";

    cyclist_team.cyclists.sort((a,b) => b.height - a.height);

    cyclist_team.cyclists.forEach(element => { nombres += element.name + ", "});

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

    cyclist_team.cyclists.forEach(element=> {output += element.name + " tiene " + element.tours + " tours y " + element.wins + " victorias, "})

    document.getElementById("salida").innerHTML = output;
    
}

/*05. Utiliza map() para añadir un tour a todos los ciclistas. */

function ejercicio5(cyclist_team){
  
  const addTours = cyclist_team.cyclists.map(function(element){
    element.tours ++ ;
    return element;
  });

  let output = "";

  addTours.forEach(element => { output += element.name + " tiene " + element.tours + " tours y " + element.wins + " victorias, "});

  document.getElementById("salida").innerHTML = output;
}

/*06.  Utiliza filter() para eliminar todos los ciclistas menores de 30 años */

/*Funciones auxiliares */

function dateConverter(dateString) {
  let brokenDate = dateString.split("/");
  let day = brokenDate[0];
  let month = brokenDate[1];
  let year = brokenDate[2];
  let convertedDate = year + "/" + month + "/" + day;
  return convertedDate;
}

function age(element) {
  let borndate = new Date(dateConverter(element.born));
  let today = new Date();
  let age = today.getFullYear() - borndate.getFullYear();
  let m = today.getMonth - borndate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < borndate.getDate())) {
      age--;
  }
  return age;
}

function ejercicio6(cyclist_team){

  let output = "";
  
  cyclist_team.cyclists.forEach(element => {output += element.name + " tiene " + age(element) + " años, "});

  document.getElementById("salida").innerHTML = output;
}

/* 07.  Utiliza find() para encontrar el primer ciclista que tiene más de 30 años.  */

function ejercicio7(cyclist_team){

  let mayor30 = cyclist_team.cyclists.find(element => age(element) > 30).name;

  let output = "El primer ciclista encontrado que tiene más de 30 años es: " + mayor30;

  document.getElementById("salida").innerHTML = output;

}

/*  08. Añade un ciclista a la posición 2 con los siguientes datos:  */

// nom: "Josh Pantano", 
// born: "30/11/1995", 
// height: 1.88, 
// tours: 2, 
// wins: 9

function ejercicio8(cyclist_team){

  function addCyclist(name, born, height, tours, wins) {
    const newCyclist = {
        name: name,
        born: born,
        height: height,
        tours: tours,
        wins: wins
    }
    cyclist_team.cyclists.splice(2, 0, newCyclist);
}
addCyclist("Josh Pantano", "30/11/1995", 1.88, 2, 9);

let output = "";

cyclist_team.cyclists.forEach(element => { output += element.name + ", "});

document.getElementById("salida").innerHTML = output;

}

/*09.  Imprime nombres ordenados por edad: de más jóvenes a más viejos. */

function ejercicio9(cyclist_team){

cyclist_team.cyclists.sort((a, b) => age(a) - age(b));

let output = "";

cyclist_team.cyclists.forEach(element => {output += element.name + ", tiene: " + age(element) + " años. ";
  
});

document.getElementById("salida").innerHTML = output;

}
