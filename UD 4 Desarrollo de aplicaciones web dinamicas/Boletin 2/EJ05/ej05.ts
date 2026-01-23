// Crea en TypeScript una función llamada cajaSorpresa que
// funcione como un contenedor genérico. La función debe
// aceptar un argumento de cualquier tipo (contenido). Debe
// devolver un objeto con dos propiedades: datos (el contenido
// original) y secreto (un booleano true). Usa Genéricos (<T>)
// para que TypeScript sepa exactamente qué tipo de dato hay 
// dentro de la caja. haz dos llamadas a la función, 
// una pasándole un número y otra un texto. Intenta acceder 
// a un método de string (como .toUpperCase()) en la caja
// del número para ver cómo TypeScript te avisa del error.

function cajaSorpresa<T>(contenido: T): { datos: T; secreto: boolean } {
    return {
        datos: contenido,
        secreto: true
    };
}

// Llamada con un número
const cajaNumero = cajaSorpresa(42);
console.log(cajaNumero.datos); // 42
console.log(cajaNumero.secreto); // true

// Llamada con un texto
const cajaTexto = cajaSorpresa("Hola Mundo");
console.log(cajaTexto.datos); // "Hola Mundo"
console.log(cajaTexto.secreto); // true

// Intento de acceder a un método de string en la caja del número
// Esto generará un error de TypeScript

// console.log(cajaNumero.datos.toUpperCase()); // Error: Property 'toUpperCase' does not exist on type 'number'.   
