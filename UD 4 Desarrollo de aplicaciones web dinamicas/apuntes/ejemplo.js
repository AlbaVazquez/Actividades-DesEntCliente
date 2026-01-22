// Ponemos 'async' antes de la función para indicar que es asíncrona
async function obtenerUsuarios() {

    // Usamos 'try...catch' para manejar errores
    try {
        // 'await' pausa la ejecución hasta que la promesa se resuelva
        const respuesta = await fetch('https://jsonplaceholder.typicode.com/users');

        // Verificamos si la respuesta es exitosa
        if (respuesta.ok) {
            // Esperamos a que la respuesta se convierta en JSON
            const datosUsuarios = await respuesta.json();
            // Mostramos los datos en la consola
            console.log("Aquí están los datos de los usuarios:", datosUsuarios);
        }

        else {
            // Si la respuesta no es exitosa, mostramos el estado de la respuesta
            console.log("Error en la solicitud:", respuesta.status);
        }
    }

    // Capturamos errores de red u otras excepciones
    catch (error) {
        console.log("Error de red o excepción:", error);
    }
}