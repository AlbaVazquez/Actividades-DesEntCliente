document.addEventListener('DOMContentLoaded', () => {
    const menu = document.getElementById('exercise-menu');
    const contentArea = document.getElementById('exercise-main-content');
    const exerciseContainers = contentArea.querySelectorAll('.exercise-container');

    /**
     * Función principal para mostrar un ejercicio y ocultar los demás.
     * @param {string} id - El número del ejercicio (Ej: '1', '6', '15').
     */
    const showExercise = (id) => {
        // Ocultar todos los contenedores de ejercicios
        exerciseContainers.forEach(container => {
            container.classList.remove('active');
        });

        // Mostrar solo el contenedor del ejercicio seleccionado
        const selectedContainer = document.getElementById(`exercise${id}-content`);
        if (selectedContainer) {
            selectedContainer.classList.add('active');
            console.log(`Cargado el Ejercicio ${id}`);
            
            // Llamar a una función de inicialización específica (si existe)
            // Aquí es donde añadirás la lógica de cada ejercicio.
            const initFunction = window[`initExercise${id}`];
            if (typeof initFunction === 'function') {
                initFunction();
            }
        } else {
            console.error(`Contenedor del Ejercicio ${id} no encontrado.`);
        }
    };

    // Manejador de eventos para el menú: detecta qué botón se ha pulsado
    menu.addEventListener('click', (event) => {
        const button = event.target.closest('button');
        if (button) {
            const exerciseId = button.dataset.exerciseId;
            if (exerciseId) {
                showExercise(exerciseId);
            }
        }
    });

    // --- ESTRUCTURA DE INICIALIZACIÓN DE EJERCICIOS (¡A RELLENAR!) ---
    // Utiliza estas funciones para organizar los manejadores de eventos
    // y la lógica DOM de cada actividad.

    window.initExercise1 = () => {
        [cite_start]// Lógica del Ejercicio 1: radiobutton (mostrar actor seleccionado por consola [cite: 7])
    };

    window.initExercise2 = () => {
        [cite_start]// Lógica del Ejercicio 2: select simple (mostrar provincia seleccionada por consola [cite: 8])
    };

    window.initExercise3 = () => {
        [cite_start]// Lógica del Ejercicio 3: select múltiple (mostrar provincias seleccionadas por consola [cite: 9])
    };

    window.initExercise4 = () => {
        [cite_start]// Lógica del Ejercicio 4: agregar y mover provincias entre dos listas múltiples [cite: 10, 11, 12, 13]
    };

    window.initExercise5 = () => {
        [cite_start]// Lógica del Ejercicio 5: añadir/eliminar manejador para marcar/desmarcar un checkbox [cite: 14, 15, 16]
    };

    window.initExercise6 = () => {
        [cite_start]// Lógica del Ejercicio 6: mouseover/mouseout en cuadrado (cambio de color, coordenadas) y keydown en input (tecla pulsada) [cite: 17, 18, 19, 20, 21]
    };

    window.initExercise7 = () => {
        [cite_start]// Lógica del Ejercicio 7: manejador único para capturar y mostrar pulsación de dígitos [cite: 22]
    };

    window.initExercise8 = () => {
        [cite_start]// Lógica del Ejercicio 8: impedir la introducción de dígitos en el input [cite: 23]
    };

    window.initExercise9 = () => {
        [cite_start]// Lógica del Ejercicio 9: impedir copiar el texto del input [cite: 24]
    };

    window.initExercise10 = () => {
        [cite_start]// Lógica del Ejercicio 10: mostrar mensaje sobre qué botón del ratón se ha pulsado [cite: 31]
    };

    window.initExercise11 = () => {
        [cite_start]// Lógica del Ejercicio 11: mostrar tagName de target, currentTarget y this al hacer click en diferentes elementos del formulario [cite: 32, 33]
    };

    window.initExercise12 = () => {
        [cite_start]// Lógica del Ejercicio 12: validar si el input está vacío antes de procesar el formulario (impedir envío) [cite: 34, 35]
    };

    window.initExercise13 = () => {
        [cite_start]// Lógica del Ejercicio 13: uso de atributos HTML y expresiones regulares para la validación [cite: 36, 37, 38, 39, 41, 42, 43, 44, 45, 46, 47, 48, 49]
        // *Nota: Este ejercicio se centra en el HTML (atributos pattern, required, etc.). La función init podría limitarse a mostrar el formulario.*
    };

    window.initExercise14 = () => {
        [cite_start]// Lógica del Ejercicio 14: validar el formulario mediante JS, mostrando campos vacíos/con errores en una capa de salida [cite: 50, 51, 52]
    };

    window.initExercise15 = () => {
        [cite_start]// Lógica del Ejercicio 15: manejo de cookies (Guardar, Recuperar, Eliminar) [cite: 59, 60, 62, 64]
    };

    // Puedes descomentar la siguiente línea si quieres que el primer ejercicio
    // se muestre automáticamente al cargar la página.
    // showExercise('1'); 
});