// Define en TypeScript una interfaz Tarea con id, texto y
// completada (booleano). Crea un array de tareas con al menos
// 3 elementos. Crea una función buscarTarea que reciba un id y
// devuelva la tarea correspondiente del array (usa el método 
// .find()). Importante: Al llamar a la función, el resultado 
// podría ser undefined si el ID no existe. Maneja este caso 
// con una sentencia selectiva para mostrar la tarea (y si está
// "Completada" o "Pendiente") o un mensaje de error si no se 
// encuentra.

interface Tarea {
    id: number;
    texto: string;
    completada: boolean;
}     

const tareas: Tarea[] = [
    { id: 1, texto: "Comprar leche", completada: false },
    { id: 2, texto: "Lavar el coche", completada: true },
    { id: 3, texto: "Estudiar TypeScript", completada: false }
];

function buscarTarea(id: number): Tarea | undefined {
    return tareas.find(tarea => tarea.id === id);
}

// Ejemplo de uso
const idBuscado = 2;
const tareaEncontrada = buscarTarea(idBuscado);

if (tareaEncontrada) {
    const estado = tareaEncontrada.completada ? "Completada" : "Pendiente";
    console.log(`Tarea encontrada: ${tareaEncontrada.texto} - Estado: ${estado}`);
} else {
    console.log(`Error: No se encontró una tarea con ID ${idBuscado}`);
}

