import type { Equipment } from "../types";

interface Props {
    equipo: Equipment;
    onEliminar: (id: string) => void; // <-- 1. Añadimos la función a las Props
}

export function EquipmentCard({ equipo, onEliminar }: Props) { // <-- 2. Recibimos onEliminar

    let colorEstado = 'gray';
    switch (equipo.estado) {
        case 'disponible':
            colorEstado = 'green';
            break;
        case 'asignado':
            colorEstado = 'blue';
            break;
        case 'averiado':
            colorEstado = 'red';
            break;
    }

    return (
        <div className="border p-4 rounded shadow flex flex-col justify-between">
            <div>
                <h2 className="text-xl font-bold mb-2">{equipo.nombre}</h2>
                <p className="mb-1">Tipo: {equipo.tipo}</p>
                <p className={`font-semibold text-${colorEstado}-600`}>Estado: {equipo.estado}</p>
            </div>
            
            {/* 3. AÑADIMOS EL BOTÓN DE BORRAR */}
            <button 
                onClick={() => onEliminar(equipo.id)}
                className="mt-4 bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 self-start"
            >
                🗑️ Eliminar
            </button>
        </div>
    );
}