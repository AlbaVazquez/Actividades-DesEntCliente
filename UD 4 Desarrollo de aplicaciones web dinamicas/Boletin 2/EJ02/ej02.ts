// Vamos a simular la respuesta de una API en TypeScript:
// Define un tipo EstadoCarga que solo permita los valores: 
// "idle", "loading", "success" o "error".
// Define una interfaz Usuario con id y nombre.
// Define una interfaz RespuestaAPI que tenga:
// estado: del tipo EstadoCarga.
// data: que puede ser Usuario o null.
// Crea una función procesarRespuesta que reciba un objeto
// RespuestaAPI. Usando condicionales, la función debe:
// Si está cargando, imprimir "Cargando...".
// Si hay error, imprimir "Ha ocurrido un error".
// Si el estado es success y hay datos, imprimir
// "Bienvenido [nombre del usuario]".

type EstadoCarga = "idle" | "loading" | "success" | "error";

interface Usuario {
    id: number;
    nombre: string;
}

interface RespuestaAPI {
    estado: EstadoCarga;
    data: Usuario | null;
}

function procesarRespuesta(respuesta: RespuestaAPI): void {
    switch (respuesta.estado) {
        case "loading":
            console.log("Cargando...");
            break;
        case "error":
            console.log("Ha ocurrido un error");
            break;
        case "success":
            if (respuesta.data) {
                console.log(`Bienvenido ${respuesta.data.nombre}`);
            }
            break;
        default:
            // Estado "idle" o cualquier otro caso no manejado
            break;
    }
}

// Ejemplos de uso:
const respuesta1: RespuestaAPI = {
    estado: "loading",
    data: null
};

const respuesta2: RespuestaAPI = {
    estado: "error",
    data: null
};

const respuesta3: RespuestaAPI = {
    estado: "success",
    data: { id: 1, nombre: "Juan" }
};

procesarRespuesta(respuesta1); // Imprime: Cargando...
procesarRespuesta(respuesta2); // Imprime: Ha ocurrido un error
procesarRespuesta(respuesta3); // Imprime: Bienvenido Juan