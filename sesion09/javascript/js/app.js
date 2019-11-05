// Estructura Condicional
var nota = prompt('Ingrese su nota');
if(nota >= 14){
    console.log('Aprobo el curso 🎉');
} else {
    console.log('No aprobo el curso 😭');
}

var dia = new Date().getDay();

switch (dia) {
    case 1:
        console.log("lunes");
        break;
    case 2:
        console.log("martes");
        break;
    case 3:
        console.log("miercoles");
        break;
    case 4:
        console.log("jueves");
        break;
    case 5:
        console.log("viernes");
        break;
    case 6:
        console.log("sabado");
        break;
    default: 
        console.log("domingo");
        break;
}

var meses = new Date().getMonth();
var mesActual = document.getElementById('mes');
switch (meses) {
    case 0:
        console.log("enero");
        mesActual.innerHTML = "enero";
        break;
    case 1:
        console.log("febrero");
        mesActual.innerHTML = "febrero";
        break;
    case 2:
        console.log("marzo");
        mesActual.innerHTML = "marzo";
        break;
    case 3:
        console.log("abril");
        mesActual.innerHTML = "abril";
        break;
    case 4:
        console.log("mayo");
        mesActual.innerHTML = "mayo";
        break;
    case 5:
        console.log("junio");
        mesActual.innerHTML = "junio";
        break;
    case 6:
        console.log("julio");
        mesActual.innerHTML = "julio";
        break;
    case 7:
        console.log("agosto");
        mesActual.innerHTML = "agosto";
        break;
    case 8:
        console.log("setiembre");
        mesActual.innerHTML = "setiembre";
        break;
    case 9:
        console.log("octubre");
        mesActual.innerHTML = "octubre";
        break;
    case 10:
        console.log("noviembre");
        mesActual.innerHTML = "noviembre";
        break;
    default: 
        console.log("diciembre");
        mesActual.innerHTML = "diciembre";
        break;
}

// Estructura repetitiva For
var index;
for (index = 0; index < 10; index++) {    
    console.log("hola " + index);
}

var cursos = [
    'Algoritmos',
    'SQL Server 2016',
    'Desarrollo Frontend'
];

var i;
for (i = 0; i < cursos.length; i++) {
    console.log(cursos[i]);
}

var curso = {
    nombre: 'Desarrollo Frontend',
    numeroAlumnos: 6,
    numeroEdicion: 7,
    anio: new Date().getFullYear()
};

var i;
for (i in curso) {
    console.log(curso[i]);
}

var index = 0;
while (index < cursos.length) {
    console.log(cursos[index]);
    index++;
}

// Al menos se ejecuta 1 vez
var index = 0;
do {
    console.log("hola " + index);
    index ++;
} while (index <= 10);
