document
  .getElementById("btnRestaurar")
  .addEventListener("click", () => location.reload());

const botonMover = document.getElementById("btnMover");

botonMover.addEventListener("click", () => {
  const checkboxesMarcados = document.querySelectorAll('input[type="checkbox"]:checked')
  const radioDestino = document.querySelector('input[name="destino"]:checked');

  if (!radioDestino) {
    alert("Selecciona un destino.");
    return;
  }

  if (checkboxesMarcados.length === 0) {
    alert("Selecciona al menos una tarea");
    return;
  }

  const apartadoDestino = document.getElementById(radioDestino.value)
  const radioMetodo = document.querySelector('input[name="metodo"]:checked').value;
  const mantenerCopia = document.querySelector('input[name="clonar"][value="si"]').checked;

  checkboxesMarcados.forEach(checkbox => {
    const tarea = checkbox.closest(".tarea");
    let tareaAMover = tarea;

    if (mantenerCopia) {
      tareaAMover = tarea.cloneNode(true);
      tareaAMover.querySelector('input[type="checkbox"]:checked').checked = false;
    }

    if (radioMetodo === "append") {
      apartadoDestino.append(tareaAMover);
    }
    else if (radioDestino === "prepend") {
      apartadoDestino.prepend(tareaAMover)
    }
  })

})