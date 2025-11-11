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

    // --- ESTRUCTURA DE INICIALIZACIÓN DE EJERCICIOS ---

    window.initExercise1 = () => {
        
    };

    window.initExercise2 = () => {
    };

    window.initExercise3 = () => {
    };

    window.initExercise4 = () => {
    };

    window.initExercise5 = () => {
    };

    window.initExercise6 = () => {
    };

    window.initExercise7 = () => {
    };

    window.initExercise8 = () => {
    };

    window.initExercise9 = () => {
    };

    window.initExercise10 = () => {
    };

    window.initExercise11 = () => {
    };

    window.initExercise12 = () => {
    };

    window.initExercise13 = () => {
        // *Nota: Este ejercicio se centra en el HTML (atributos pattern, required, etc.). La función init podría limitarse a mostrar el formulario.*
    };

    window.initExercise14 = () => {
    };

    window.initExercise15 = () => {
    };
});