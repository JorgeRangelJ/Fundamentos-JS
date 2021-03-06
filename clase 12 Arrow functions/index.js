// Condicionales

var jorge = {
	nombre: 'Jorge',
	apellido: 'Rangel',
	edad: 23,
	ingeniero: true,
	cocinero: false,
	cantante: false,
	dj: false,
	guitarrista: false,
	drone: true
}

var juan = {
	nombre: 'juan',
	apellido: 'Perez',
	edad: 15
}

// Funcion profesiones

function imprimirProfesiones(persona) {
	console.log(`${persona.nombre} Es: `);
	if (persona.ingeniero) {
		console.log(`Ingeniero`);
	} else {
		console.log(`No es ingeniero`);
	}

	if (persona.cocinero) {
		console.log(`Cocinero`);	
	} else {
		console.log(`No es Cocinero`)
	}

	if (persona.dj) {
		console.log(`Dj`);	
	} else {
		console.log(`No es Dj`);
	}

	if (persona.cantante) {
		console.log(`Cantante`);	
	} else {
		console.log(`No es Cantante`);
	}

	if (persona.guitarrista) {
		console.log(`Guitarrista`);	
	} else {
		console.log(`No es Guitarrista`);
	}

	if (persona.drone) {
		console.log(`Piloto drone`);	
	} else {
		console.log(`No es Piloto drone`);
	}

}

// Funcion es mayor de edad

// Definiendo constante

const MAYORIA_DE_EDAD = 18;

// Asignar a una variable una funcion

/*
const esMayordeEdad = function (persona) {
	return persona.edad >= MAYORIA_DE_EDAD;
}
*/

// Arrow Function

const esMayordeEdad = ({ edad }) => edad >= MAYORIA_DE_EDAD;

// Funcion para saber si una persona es mayor de edad

function imprimirSiEsMayorDeEdad(persona) {
	if (esMayordeEdad(persona)) {
		console.log(`${persona.nombre} Es Mayor de Edad`);
	} else {
		console.log(`${persona.nombre} No Es Mayor de Edad`);
	}
}

// Funcion permitir acceso

function permitirAcceso () {
	if (!esMayordeEdad(persona)) {
		console.log('ACCESO DENEGADO');
	} else {

	}
}

imprimirProfesiones(jorge);

imprimirSiEsMayorDeEdad(jorge);

imprimirSiEsMayorDeEdad(juan);