document.addEventListener("DOMContentLoaded", () => {
  const menu = document.getElementById("exercise-menu");
  const contentArea = document.getElementById("exercise-main-content");
  const exerciseContainers = contentArea.querySelectorAll(
    ".exercise-container"
  );

  /**
   * Función principal para mostrar un ejercicio y ocultar los demás.
   * @param {string} id - El número del ejercicio (Ej: '1', '6', '15').
   */
  const showExercise = (id) => {
    // Ocultar todos los contenedores de ejercicios
    exerciseContainers.forEach((container) => {
      container.classList.remove("active");
    });

    // Mostrar solo el contenedor del ejercicio seleccionado
    const selectedContainer = document.getElementById(`exercise${id}-content`);
    if (selectedContainer) {
      selectedContainer.classList.add("active");
      console.log(`Cargado el Ejercicio ${id}`);

      // Llamar a una función de inicialización específica (si existe)
      // Aquí es donde añadirás la lógica de cada ejercicio.
      const initFunction = window[`initExercise${id}`];
      if (typeof initFunction === "function") {
        initFunction();
      }
    } else {
      console.error(`Contenedor del Ejercicio ${id} no encontrado.`);
    }
  };

  // Manejador de eventos para el menú: detecta qué botón se ha pulsado
  menu.addEventListener("click", (event) => {
    const button = event.target.closest("button");
    if (button) {
      const exerciseId = button.dataset.exerciseId;
      if (exerciseId) {
        showExercise(exerciseId);
      }
    }
  });

  // --- ESTRUCTURA DE INICIALIZACIÓN DE EJERCICIOS ---

  window.initExercise1 = () => {
    formulario1.consultar.addEventListener("click", mostrarDatos); //SI HAGO CLICK EN EL BOTÓN DE CONSULTAR DATOS INICIA UN EVENTO
    function mostrarDatos() { 
      for (let actor of formulario1.actores) { //RECORRO LOS ACTORES DEL GRUPO (name="actores") 'actores'
        if (actor.checked) { //SI EL ACTOR ITERADO ES EL SELECCIONADO...
          console.log(actor.value); //MOSTRAR SUS VALORES POR CONSOLA
        }
      }
    }
  };

  window.initExercise2 = () => {
    formulario2.boton.addEventListener("click", mostrarInfo);
    function mostrarInfo() {
      provincia = formulario2.provincias.value;
      console.log(`Provincia: `)
    }
  };

  window.initExercise3 = () => {};

  window.initExercise4 = () => {};

  window.initExercise5 = () => {};

  window.initExercise6 = () => {};

  window.initExercise7 = () => {
    const teclado = document.getElementById("teclado"); //ENCUENTRO EL DIV QUE CONTIENE EL TECLADO
    const salida = document.getElementById("salida"); //ENCUENTRO EL CAMPO POR EL QUE SALDRÁ EL TEXTO
    salida.value = ""; //VACÍO ESE CAMPO PARA QUE APAREZCA EN BLANCO

    teclado.addEventListener("click", pulsarDigito); //SI HAGO CLICK EN EL TECLADO INICIA UN EVENTO

    function pulsarDigito() { //FUNCIÓN PARA MOSTRAR LA TECLA PULSADA
      const elementoClicado = event.target; //RECOJO EL ELEMENTO AL QUE HE HECHO CLICK
      
      if (elementoClicado.tagName === "INPUT" && elementoClicado.type === "button") { //SI HE HECHO CLICK EN UN BOTÓN...
        const digitoPulsado = elementoClicado.value; //RECOJO EL VALOR DEL BOTÓN CLICADO
        salida.value += digitoPulsado; //Y LO MUESTRO COMO SALIDA

        console.log(`Dígito pulsado: ${digitoPulsado}`);
      }
    }
  };

  window.initExercise8 = () => {};

  window.initExercise9 = () => {};

  window.initExercise10 = () => {};

  window.initExercise11 = () => {};

  window.initExercise12 = () => {};

  window.initExercise13 = () => {
    // *Nota: Este ejercicio se centra en el HTML (atributos pattern, required, etc.). La función init podría limitarse a mostrar el formulario.*
  };

  window.initExercise14 = () => {};

  window.initExercise15 = () => {};
});
