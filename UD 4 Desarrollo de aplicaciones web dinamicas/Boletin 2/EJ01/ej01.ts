// Crea en TypeScript una interfaz llamada Docente que tenga dos
// propiedades: nombre (cadena de texto) y modulo (cadena de 
// texto). A continuación, define una función saludar que 
// reciba un objeto de tipo Docente y muestre por consola un 
// mensaje como: "Bienvenido, [nombre]. Preparado para el módulo
// [modulo]." Finalmente, invoca a la función pasando un objeto 
// que cumpla con la interfaz.

interface Docente {
    nombre: string;
    modulo: string;
}

function saludar(docente: Docente): void {
    console.log(`Bienvenido, ${docente.nombre}. Preparado para el módulo ${docente.modulo}.`);
}

const docenteEjemplo: Docente = {
    nombre: "Juan Pérez",
    modulo: "Desarrollo de Aplicaciones Web Dinámicas"
};

saludar(docenteEjemplo);