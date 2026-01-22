// 11. A partir del documento HTML proporcionado para este ejercicio, implementar las
//     funciones javascript necesarias para iniciar una promesa y atenderla si se
//     pulsa el botón “Procesar Promesa” antes de 2 segundos. En el caso de no ser
//     pulsado en ese plazo, la promesa no será atendida y se procesará un error.
//     En el párrafo de salida se debe mostrar el mensaje que devuelva el objeto
//     Promise, debiendo coger éste lo que el usuario haya indicado en el formulario
//     de entrada para reflejar los mensajes de éxito y de error.

document.getElementById("iniciaPromesa").onclick = iniciaPromesa;
document.getElementById("procesarPromesa").onclick = procesarPromesa;

let promesaFinalizada;

function iniciaPromesa() {
    promesaFinalizada = false;
    let promise = new Promise(function (resolve, reject) {
        setTimeout(gestionarPromesa, 2000, resolve, reject);
    });

    promise.then(
        (result) => mostrarResultado(result),
        (error) => mostrarResultado(error)
    );
}

function gestionarPromesa(resolve, reject) {
    if (promesaFinalizada) {
        resolve(document.getElementById("msjExito").value);
    } else {
        reject(document.getElementById("msjError").value);
    }
}

function procesarPromesa() {
    promesaFinalizada = true;
}

function mostrarResultado(mensaje) {
    document.getElementById("salida").innerHTML = mensaje;
}
