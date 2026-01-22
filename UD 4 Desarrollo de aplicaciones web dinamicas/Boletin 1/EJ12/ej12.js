// 12. A partir del documento HTML proporcionado para este ejercicio, implementar las
//     funciones javascript necesarias para iniciar una promesa y atenderla para que
//     lea el texto incluido en el input y lo añada al párrafo de salida pasados dos
//     segundos. Para este ejercicio no será necesario controlar el posible error del
//     objeto Promise y se debe usar async/await.



async function muestraMensaje() {
    let promise = new Promise(function (resolve) {
        setTimeout(function () {
            resolve(document.getElementById("msjExito").value);
        }, 2000);
    });
    document.getElementById("salida").innerHTML = await promise;
}

document.getElementById("iniciaPromesa").onclick = muestraMensaje;

