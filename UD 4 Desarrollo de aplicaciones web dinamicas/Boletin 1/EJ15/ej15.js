// 15. A partir del documento HTML proporcionado para este ejercicio, implementar las
//     funciones javascript necesarias para atacar la API Rest siguiente: 
//     https://picsum.photos/list . Ésta devuelve un objeto JSON con una lista de
//     datos de las fotos que almacena. Construir una lista donde cada ítem tendrá un
//     enlace a la URL de cada foto junto al nombre del autor de la misma.

document.getElementById("addJSON").addEventListener("click", atacarAPIRest);

function atacarAPIRest() {
    fetch("https://picsum.photos/list")
        .then((response) => response.json())
        .then(generarLista)
        .catch(console.log);
}

function generarLista(imagenes) {
    let lista = "<ul>";
    for (let imagen of imagenes) {
        lista += `<li> <a target="_blank" href="${imagen.post_url}">IMAGEN</a> ${imagen.author}</li>`;
    }
    lista += "</ul>";
    document.getElementById("salida").innerHTML = lista;
}

