import { useState, useEffect } from 'react'; // [FIREBASE] Importamos useEffect
import './App.css';
import type { JobApplication } from './types';
import { JobCard } from './components/JobCard';
import { JobForm } from './components/JobForm';

// [FIREBASE]
import { db } from './firebase';
import { collection, onSnapshot, addDoc, deleteDoc, doc } from 'firebase/firestore';

function App() {
  const [jobs, setJobs] = useState<JobApplication[]>([]);
  const [loading, setLoading] = useState(true); // [FIREBASE] Estado de carga

  // [FIREBASE] 1. LEER DATOS (READ)
  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'jobs'), (snapshot) => {
      const firebaseJobs = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as JobApplication[];

      firebaseJobs.sort((a, b) => b.createdAt - a.createdAt);

      setJobs(firebaseJobs);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  // [FIREBASE] 2. CREAR (CREATE)
  const handleAdd = async (newJobData: Omit<JobApplication, 'id' | 'createdAt'>) => {
    try {
      await addDoc(collection(db, 'jobs'), {
        ...newJobData,
        createdAt: Date.now()
      });
    } catch (error) {
      console.error("Error al guardar:", error);
      alert("Error al guardar");
    }
  };

  // [FIREBASE] 3. BORRAR (DELETE)
  const handleDelete = async (id: string) => {
    if (!confirm("¿Seguro que quieres borrar esta candidatura?")) return;

    try {
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
          <JobForm onAdd={handleAdd} />
        </div>
      </section>

      {/* Spinner de carga */}
      {loading ? (
        <div className="text-center">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Cargando...</span>
          </div>
        </div>
      ) : (
        <main className="row g-4">
          {jobs.map((job) => (
            <div key={job.id} className="col-12 col-md-6 col-lg-4">
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