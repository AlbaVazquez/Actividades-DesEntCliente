// Funcionalidad de reinicio
document
  .getElementById("btnRestaurar")
  .addEventListener("click", () => location.reload());

  //PARTE 1: tengo que identificar el origen
  //PARTE 2: tengo que identificar el destino
  //PARTE 3: tengo que identificar el tipo de operación
  //PARTE 4: tengo que identificar si hay clonado

  //localizo el boton que moverá el elemento
const botonMover = document.getElementById("btnMover");
//CUANDO le haga click, ejecuta esto
botonMover.addEventListener("click", () => {
  //localizo todas las checkboxes de productos (check-prod) que están checked 1
  const checkboxesMarcados = document.querySelectorAll(".check-prod:checked");
  //localizo a dónde va 2
  const radioDestino = document.querySelector('input[name="destino"]:checked');

  //si no hay ningún radio o chekbox marcado, alerto 1
  if (!radioDestino) {
    alert("¡Oye! Tienes que seleccionar una estantería de destino.");
    return; // El return hace que la función se detenga aquí
  }

  if (checkboxesMarcados.length === 0) {
    alert("¡Oye! Tienes que seleccionar al menos un producto del palé.");
    return;
  }

  //guardo el elemento de la estantería radio elegida 2
  const estanteriaDestino = document.getElementById(radioDestino.value);

  //¿CÓMO LO COLOCAMOS? 3
  //leo el método de colocación elegido 3
  const radioMetodo = document.querySelector('input[name="metodo"]:checked').value;

  //¿CLONADO? 4
  const mantenerCopia = document.querySelector('input[name="clonar"][value="si"]').checked;

  //YA TENGO TODA LA INFORMACIÓN
  //recorro los productos que el usuario ha marcado 1
  checkboxesMarcados.forEach(checkbox => {
    const producto = checkbox.closest(".item-producto"); // Encuentra el elemento padre con la clase "producto"
    let productoAMover = producto;

    //si el usuairo quiere clonar, hacemos copia 4
    if (mantenerCopia) {
      productoAMover = producto.cloneNode(true); // Clona el producto original
      productoAMover.querySelector('.check-prod').checked = false; // Desmarca el checkbox en el producto clonado
    }

    //finalmente, lo coloco en su sitio 3 y 2
    if (radioMetodo === "append") {
      estanteriaDestino.append(productoAMover);
    } else if (radioMetodo === "prepend") {
      estanteriaDestino.prepend(productoAMover);
    } else if (radioMetodo === "before") {
      estanteriaDestino.before(productoAMover);
    } else if (radioMetodo === "after") {
      estanteriaDestino.after(productoAMover);
    }
  });
});