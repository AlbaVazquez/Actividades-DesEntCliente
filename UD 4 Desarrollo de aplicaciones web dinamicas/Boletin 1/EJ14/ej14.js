// 14. A partir del documento HTML proporcionado para este ejercicio, implementar las
//     funciones javascript necesarias para atacar la API Rest facilitada en el input
//     del formulario y mostrar los objetos leídos por la consola.

document.getElementById("addJSON").addEventListener("click", procesarFichero);

function procesarFichero() {
    const url = formulario.url.value.trim();

    fetch(url)
        .then((response) => response.text())
        .then(mostrarObjetosConsola)
        .catch(console.log);
}

function mostrarObjetosConsola(texto) {
    let listaUsuarios = JSON.parse(texto).results;
    console.log(listaUsuarios);
}

