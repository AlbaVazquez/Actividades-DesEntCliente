// 16. Crear un proyecto en Firebase con la cuenta corporativa del centro que servirá para practicar los ejercicios siguientes.
//     En el proyecto crear una Realtime Database e importar el fichero alumnos.json facilitado con el material de este ejercicio.
//     Una vez generados los registros en la base de datos, modificar el proyecto facilitado para que al pulsar el botón Recuperar
//     Datos se realice una llamada AJAX a la API Rest recién creada para descargar la lista de alumnos. Esa lista de alumnos deberá
//     mostrarse en la capa de salida en formato JSON.


document
    .getElementById("recuperarDatos")
    .addEventListener("click", recuperarDatos);

function recuperarDatos() {
    const url =
        "https://ejercicios2daw-default-rtdb.europe-west1.firebasedatabase.app/alumnos.json";
    fetch(url)
        .then((res) => res.json())
        .then((objRespuesta) => Object.values(objRespuesta))
        .then(mostrarAlumnos);
}

function mostrarAlumnos(listaAlumnos) {
    const capaSalida = document.getElementById("salida");
    let salida = "";
    for (let alumno of listaAlumnos) {
        salida += JSON.stringify(alumno) + "<br>";
    }
    capaSalida.innerHTML = salida;
}

