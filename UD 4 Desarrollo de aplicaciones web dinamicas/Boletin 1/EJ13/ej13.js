// 13. A partir del documento HTML proporcionado para este ejercicio, implementar las
//     funciones javascript necesarias para añadir a la capa de salida el contenido
//     del fichero de texto especificado en el formulario. El contenido debe añadirse
//     sin producir ninguna recarga de página, para ello use fetch API.

document.getElementById("addTexto").addEventListener("click", procesarFichero);

function procesarFichero() {
    const nombreFichero = formulario.nombreFichero.value.trim();
    console.log(nombreFichero);

    fetch(nombreFichero)
        /*.then((response) => response.text())
        .then((textoFichero) => addTextoCapa(textoFichero))
        .catch((err) => console.log(err));*/
        .then((response) => response.text())
        .then(addTextoCapa)
        .catch(console.log);
}

const addTextoCapa = (texto) => (document.getElementById("capa").innerHTML += texto);

