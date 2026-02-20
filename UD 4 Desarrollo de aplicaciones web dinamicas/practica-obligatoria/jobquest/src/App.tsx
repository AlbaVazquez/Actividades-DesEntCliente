import { useState, useEffect } from 'react'; // [FIREBASE] Importamos useEffect
import './App.css';
import type { JobApplication } from './types';
import { JobCard } from './components/JobCard';
import { JobForm } from './components/JobForm';

// TAREA 1: Importar siempre lo necesario de Firebase
// [FIREBASE]
import { db } from './firebase';
import { collection, onSnapshot, addDoc, deleteDoc, doc } from 'firebase/firestore';

// TAREA 2: Crear los estados principales. Uno para los datos, otro para el "Cargando"
function App() {
  const [jobs, setJobs] = useState<JobApplication[]>([]);
  const [loading, setLoading] = useState(true); // [FIREBASE] Estado de carga

  // TAREA 3: Leer datos de Firebase al inicio y cada vez que cambien
  // [FIREBASE] 1. LEER DATOS (READ)
  useEffect(() => {
    // onSnapshot necesita: collection(base_de_datos, 'nombre_coleccion')
    const unsubscribe = onSnapshot(collection(db, 'jobs'), (snapshot) => {
      // Magia para convertir el formato de Firebase a nuestro array
      const firebaseJobs = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as JobApplication[];

      // Ordenar y guardar en el estado
      firebaseJobs.sort((a, b) => b.createdAt - a.createdAt);

      setJobs(firebaseJobs);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  // TAREA 4: Función para CREAR (recibe datos sin ID ni fecha)
  // [FIREBASE] 2. CREAR (CREATE)
  const handleAdd = async (newJobData: Omit<JobApplication, 'id' | 'createdAt'>) => {
    try {
      // addDoc necesita la colección y el objeto con los datos
      await addDoc(collection(db, 'jobs'), {
        ...newJobData,
        createdAt: Date.now()
      });
    } catch (error) {
      console.error("Error al guardar:", error);
      alert("Error al guardar");
    }
  };

  // TAREA 5: Función para BORRAR (solo necesita el ID)
  // [FIREBASE] 3. BORRAR (DELETE)
  const handleDelete = async (id: string) => {
    if (!confirm("¿Seguro que quieres borrar esta candidatura?")) return;

    try {
      // deleteDoc necesita buscar el documento exacto: doc(db, 'coleccion', id)
      await deleteDoc(doc(db, 'jobs', id));
    } catch (error) {
      console.error("Error al borrar:", error);
    }
  };

  return (
    <div className="container py-5">
      <header className="text-center mb-5">
        <h1 className="display-4 fw-bold text-primary">JobQuest 💼</h1>
        <p className="lead text-secondary">Gestiona tus candidaturas en la nube</p>
      </header>

      <section className="row justify-content-center mb-5">
        <div className="col-lg-8">
          {/* TAREA 6: Conectar el Formulario. Pásale la función de crear por props */}
          <JobForm onAdd={handleAdd} />
        </div>
      </section>

      {/* TAREA 7: Lógica visual del cargando vs lista */}
      {/* Spinner de carga */}
      {loading ? (
        <div className="text-center">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Cargando...</span>
          </div>
        </div>
      ) : (
        <main className="row g-4">
          {/* TAREA 8: Renderizar la lista. Usa .map() */}
          {jobs.map((job) => (
            <div key={job.id} className="col-12 col-md-6 col-lg-4">
              {/* Pásale a la tarjeta los datos (job) y la función de borrar (onDelete) */}
              <JobCard job={job} onDelete={handleDelete} />
            </div>
          ))}

          {jobs.length === 0 && (
            <div className="col-12 text-center">
              <p className="alert alert-info">Base de datos vacía. ¡Añade tu primera candidatura!</p>
            </div>
          )}
        </main>
      )}
    </div>
  );
}

export default App;