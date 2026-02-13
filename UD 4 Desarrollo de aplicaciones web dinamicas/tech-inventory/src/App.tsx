import { EquipmentList } from './components/EquipmentList';
import type { Equipment } from './types';
import { useState, useEffect } from 'react';
import { EquipmentForm } from './components/EquipmentForm';

import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebase'; // Tu conexión a la base de datos

function App() {
const [equipos, setEquipos] = useState<Equipment[]>([]);

const [isLoading, setIsLoading] = useState(true);
useEffect(() => {
    const descargarInventario = async () => {
      try {
        const equiposRef = collection(db, 'equipos');
        const snapshot = await getDocs(equiposRef);

        const listaDescargada: Equipment[] = [];
        snapshot.forEach((doc) => {
          listaDescargada.push({
            id: doc.id, // Firebase genera un ID raro, lo guardamos
            nombre: doc.data().nombre,
            tipo: doc.data().tipo,
            estado: doc.data().estado
          });
        });

        setEquipos(listaDescargada);
      } catch (error) {
        console.error("Error descargando datos:", error);
      } finally {
        setIsLoading(false);
      }
    };

    descargarInventario();
  }, []);

const agregarEquipo = (nuevoEquipo: Equipment) => {
    setEquipos([...equipos, nuevoEquipo]);
};

  return (
    <div className="p-8 font-sans max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">📦 TechInventory</h1>
      
      <EquipmentForm onGuardar={agregarEquipo} />

      <h2 className="text-2xl font-semibold mt-8 mb-4">Lista de Equipos</h2>
      {isLoading ? (
        <p className="text-gray-500 font-bold animate-pulse">Cargando inventario desde la nube...</p>
      ) : (
        <EquipmentList equipos={equipos} />
      )}
    </div>
  )
}

export default App;