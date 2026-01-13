// 9. En el fichero persona.js crea una clase Persona con tres atributos, nombre,
//    apellidos y edad. Incluye los métodos consultores y modificadores de cada
//    atributo y el método constructor de la misma. Expórtala por defecto.
//    En el fichero ej8.js debes importar esa clase pero llamándola Usuario.
//    Prueba a instanciar un objeto con este nuevo nombre y a visualizarlo por
//    consola.

import Usuario from './persona.js';

const usuario = new Usuario('Pedro','González López',34);
console.log(usuario);