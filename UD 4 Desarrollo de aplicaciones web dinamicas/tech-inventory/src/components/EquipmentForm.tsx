import { useState } from "react";
import type { Equipment } from "../types";

import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase';

interface Props {
    onGuardar: (nuevoEquipo: Equipment) => void;
}

export function EquipmentForm({ onGuardar }: Props) {
    const [nombre, setNombre] = useState("");
    const [tipo, setTipo] = useState<Equipment["tipo"]>("portatil");
    const [estado, setEstado] = useState<Equipment["estado"]>("disponible");

    const isFormValid = nombre.trim() !== "";

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const nuevoEquipoSinId = {
            nombre: nombre,
            tipo: tipo,
            estado: estado
        };

        try {
            const docRef = await addDoc(collection(db, 'equipos'), nuevoEquipoSinId);
            const equipoCompleto: Equipment = {
                id: docRef.id,
                nombre: nombre,
                tipo: tipo,
                estado: estado
            }

            onGuardar(equipoCompleto);

            setNombre('');
            setTipo('portatil');
            setEstado('disponible');

        } catch (error) {
            console.error("Error al guardar en Firebase:", error);
            alert("Hubo un error al guardar el equipo.");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="border p-4 rounded shadow mb-8">
            <h2 className="text-xl font-bold mb-4">Agregar Nuevo Equipo</h2>
            <div className="mb-4">
                <label className="block mb-1 font-semibold">Nombre:</label>
                <input
                    type="text"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    className="w-full border p-2 rounded"
                    placeholder="Ej: Laptop HP Envy"
                />
            </div>
            <div className="mb-4">
                <label className="block mb-1 font-semibold">Tipo:</label>
                <select
                    value={tipo}
                    onChange={(e) => setTipo(e.target.value as Equipment["tipo"])}
                    className="w-full border p-2 rounded"
                >
                    <option value="portatil">Portátil</option>
                    <option value="monitor">Monitor</option>
                    <option value="teclado">Teclado</option>
                </select>
            </div>
            <div className="mb-4">
                <label className="block mb-1 font-semibold">Estado:</label>
                <select
                    value={estado}
                    onChange={(e) => setEstado(e.target.value as Equipment["estado"])}
                    className="w-full border p-2 rounded"
                >
                    <option value="disponible">Disponible</option>
                    <option value="asignado">Asignado</option>
                    <option value="averiado">Averiado</option>
                </select>
            </div>
            <button
                type="submit"
                disabled={!isFormValid}
                className={`px-4 py-2 rounded text-white ${isFormValid ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-400 cursor-not-allowed'}`}
            >
                Agregar Equipo
            </button>
        </form>
    );
}