import type { Equipment } from '../types'; // Fíjate en el "type" que explico abajo
import { EquipmentCard } from './EquipmentCard';

interface Props {
    equipos: Equipment[];
    onEliminar: (id: string) => void;
}

export function EquipmentList({ equipos, onEliminar }: Props) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {equipos.map(equipo => (
                <EquipmentCard key={equipo.id} equipo={equipo} onEliminar={onEliminar} />
            ))}
        </div>
    );
}