import type { Equipment } from "../types";

interface Props {
    equipo: Equipment;
}

export function EquipmentCard({ equipo }: Props) {

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
        <div className="border p-4 rounded shadow">
            <h2 className="text-xl font-bold mb-2">{equipo.nombre}</h2>
            <p className="mb-1">Tipo: {equipo.tipo}</p>
            <p className={`font-semibold text-${colorEstado}-600`}>Estado: {equipo.estado}</p>
        </div>
    );
}