**BLOQUE 1: CONFIGURACIÓN Y "EL CONTRATO DE DATOS"**

**1. Crear entorno con Vite**

`npm create vite@latest jobquest -- --template react-ts`

**Entra en la carpeta e instala las "piezas" necesarias**
`npm install`
`npm run dev`

**2. Limpieza (El folio en blanco)**

Borrar todo el contenido de App.css, index.css, App.tsx.

Escribo lo siguiente:
>App.tsx
```TypeScript
// src/App.tsx
function App() {
  return (
    <div>
      <h1>JobQuest: Mi Gestor de Candidaturas</h1>
    </div>
  )
}

export default App
```

**3. Definir la estructura de datos**
Dentro de src creo `types.ts`

```TypeScript
// src/types.ts

// 1. Definimos los posibles estados de una candidatura.
// Esto cumple el requisito de "selección cerrada/categoría (tipo union)".
// Solo permitiremos estos 4 valores exactos.
export type ApplicationStatus = 'Enviado' | 'Entrevista' | 'Oferta' | 'Rechazado';

// 2. Definimos la "Interface" (el molde de tus datos).
// Esto cumple el requisito de "Interface principal".
export interface JobApplication {
  id?: string;             // Opcional (?) porque al crearla aun no tiene ID de Firebase
  company: string;         // Requisito: String
  position: string;        // Requisito: String
  salary: number;          // Requisito: Number
  status: ApplicationStatus; // Requisito: Enum/Union
  createdAt: number;       // Para ordenar por fecha (guardaremos milisegundos)
}
```
**INSTALACIÓN DE BOOSTRAP**

Copiar lo siguiente en index.html
```HTML
<head>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
  
  <title>JobQuest</title>
</head>
```

---

**BLOQUE 2: COMPONENTES Y VISUALIZACIÓN (Fase estática)**

**1. Crear datos falsos (Mock Data)**
Reemplazo el contenido de App.tsx
>App.tsx
```Typescript
// src/App.tsx
import { useState } from 'react';
import './App.css';
// Importamos el "molde" (la interface)
import type { JobApplication } from './types';

function App() {
  // Datos falsos para ver cómo queda la web.
  // Fíjate que cumplen estrictamente con la interface JobApplication.
  const [jobs, setJobs] = useState<JobApplication[]>([
    {
      id: '1',
      company: 'Google',
      position: 'Junior Developer',
      salary: 30000,
      status: 'Enviado',
      createdAt: Date.now()
    },
    {
      id: '2',
      company: 'Spotify',
      position: 'React Intern',
      salary: 1000,
      status: 'Entrevista',
      createdAt: Date.now()
    }
  ]);

  return (
    <div className="app-container">
      <header>
        <h1>JobQuest 💼</h1>
        <p>Gestiona tus candidaturas</p>
      </header>

      <main>
        {/* Aquí pintaremos la lista luego */}
        <p>Aquí irán las tarjetas...</p>
      </main>
    </div>
  );
}

export default App;
```

**2. Crear el compoenente "Tarjeta"**
Dentro de src creo otra carpeta `components`, y dentro de components un archivo llamado `JobCard.tsx`
>JobCard.tsx
```Typescript
// src/components/JobCard.tsx
import type { JobApplication } from '../types';

// PROPS: Son los "argumentos" que recibe este componente.
// Imagina que es una función que recibe un objeto 'job'.
interface Props {
  job: JobApplication;
  onDelete: (id: string) => void; // Una función para borrar (la usaremos luego)
}

export function JobCard({ job, onDelete }: Props) {
  
  // Una función simple para dar color según el estado
  const getStatusColor = (status: string) => {
    switch(status) {
      case 'Oferta': return 'green';
      case 'Rechazado': return 'red';
      case 'Entrevista': return 'orange';
      default: return 'gray';
    }
  };

  return (
    <div className="card">
      <div className="card-header">
        <h3>{job.company}</h3>
        {/* Usamos style inline para el color del borde, simple y rápido */}
        <span style={{ color: getStatusColor(job.status), fontWeight: 'bold' }}>
          {job.status}
        </span>
      </div>
      
      <p><strong>Puesto:</strong> {job.position}</p>
      <p><strong>Salario:</strong> {job.salary}€</p>
      
      {/* Botón de borrar (aún no hace nada real) */}
      <button onClick={() => onDelete(job.id!)} className="delete-btn">
        🗑️ Borrar
      </button>
    </div>
  );
}
```

Ahora editamos App.tsx
>App.tsx
```TypeScript
// src/App.tsx
import { useState } from 'react';
import './App.css';
import type { JobApplication } from './types'; // Nota: Si te da error "import type", quita la palabra "type"
import { JobCard } from './components/JobCard';

function App() {
  const [jobs, setJobs] = useState<JobApplication[]>([
    {
      id: '1',
      company: 'Google',
      position: 'Junior Developer',
      salary: 30000,
      status: 'Enviado',
      createdAt: 1708280000000
    },
    {
      id: '2',
      company: 'Spotify',
      position: 'React Intern',
      salary: 1000,
      status: 'Entrevista',
      createdAt: 1708280000000
    }
  ]);

  // Función para borrar de verdad
  const handleDelete = (id: string) => {
    // 1. Filtramos: "Dame todos los trabajos MENOS el que tiene este ID"
    const listaActualizada = jobs.filter((job) => job.id !== id);
    
    // 2. Actualizamos el estado (esto es lo que repinta la pantalla)
    setJobs(listaActualizada);
  };

  return (
    <div className="container py-5">

      <header className="text-center mb-5">
        <h1 className="display-4 fw-bold text-primary">JobQuest 💼</h1>
        <p className="lead text-secondary">Gestiona tus candidaturas de forma fácil</p>
      </header>

      <main className="row g-4">

        {jobs.map((job) => (
          <div key={job.id} className="col-12 col-md-6 col-lg-4">
            <JobCard 
              job={job}        
              // Aquí conectamos la función real 
              onDelete={handleDelete} 
            />
          </div>
        ))}

        {jobs.length === 0 && (
          <div className="col-12 text-center">
            <p className="alert alert-info">No hay candidaturas aún. ¡Añade una!</p>
          </div>
        )}

      </main>
    </div>
  );
}

export default App;
```

**BLOQUE 3: EL FORMULARIO (Añadir datos)**

**1. Creo el componente `JobForm.tsx` dentro de componentes**

>JobForm.tsx
```TypeScript

// src/components/JobForm.tsx
import { useState } from 'react';
import type { JobApplication, ApplicationStatus } from '../types';

interface Props {
  // Esta función se la pasaremos desde el padre (App)
  // Recibe los datos del nuevo trabajo para guardarlos
  onAdd: (job: Omit<JobApplication, 'id' | 'createdAt'>) => void;
}

export function JobForm({ onAdd }: Props) {
  // --- ESTADOS DEL FORMULARIO ---
  // Guardamos cada input en una variable
  const [company, setCompany] = useState('');
  const [position, setPosition] = useState('');
  const [salary, setSalary] = useState<number | ''>(''); // Puede estar vacío al inicio
  const [status, setStatus] = useState<ApplicationStatus>('Enviado');

  // --- FUNCIÓN AL ENVIAR ---
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // IMPORTANTE: Evita que la página se recargue (típico de examen)

    // Validamos que haya datos básicos
    if (!company || !position || !salary) return;

    // Llamamos a la función del padre con los datos nuevos
    onAdd({
      company,
      position,
      salary: Number(salary), // Aseguramos que sea número
      status
    });

    // Limpiamos el formulario después de enviar
    setCompany('');
    setPosition('');
    setSalary('');
    setStatus('Enviado');
  };

  return (
    <div className="card mb-4 shadow-sm">
      <div className="card-header bg-primary text-white">
        <h5 className="m-0">➕ Añadir Nueva Candidatura</h5>
      </div>
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <div className="row g-3">
            
            {/* Campo: Empresa */}
            <div className="col-md-6">
              <label className="form-label">Empresa</label>
              <input 
                type="text" 
                className="form-control" 
                placeholder="Ej: Google"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                required
              />
            </div>

            {/* Campo: Puesto */}
            <div className="col-md-6">
              <label className="form-label">Puesto</label>
              <input 
                type="text" 
                className="form-control" 
                placeholder="Ej: Frontend Dev"
                value={position}
                onChange={(e) => setPosition(e.target.value)}
                required
              />
            </div>

            {/* Campo: Salario */}
            <div className="col-md-6">
              <label className="form-label">Salario Anual (€)</label>
              <input 
                type="number" 
                className="form-control" 
                placeholder="Ej: 25000"
                value={salary}
                onChange={(e) => setSalary(Number(e.target.value))}
                required
              />
            </div>

            {/* Campo: Estado (Select) */}
            <div className="col-md-6">
              <label className="form-label">Estado</label>
              <select 
                className="form-select"
                value={status}
                onChange={(e) => setStatus(e.target.value as ApplicationStatus)}
              >
                <option value="Enviado">Enviado 📩</option>
                <option value="Entrevista">Entrevista 🤝</option>
                <option value="Oferta">Oferta 🎉</option>
                <option value="Rechazado">Rechazado ❌</option>
              </select>
            </div>

            {/* Botón Guardar */}
            <div className="col-12 text-end mt-3">
              <button type="submit" className="btn btn-success">
                Guardar Candidatura
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
```

**2. Conectar el formulario en App.tsx**
>App.tsx
```TypeScript
// src/App.tsx
import { useState } from 'react';
import './App.css';
import type { JobApplication } from './types';
import { JobCard } from './components/JobCard';
// [NUEVO] Importamos el formulario
import { JobForm } from './components/JobForm'; 

function App() {
  const [jobs, setJobs] = useState<JobApplication[]>([
    {
      id: '1',
      company: 'Google',
      position: 'Junior Developer',
      salary: 30000,
      status: 'Enviado',
      createdAt: 1708280000000
    },
    // ... puedes dejar tus datos falsos o borrarlos
  ]);

  // Función para borrar (ya la tenías)
  const handleDelete = (id: string) => {
    const listaActualizada = jobs.filter((job) => job.id !== id);
    setJobs(listaActualizada);
  };

  // --- [NUEVO] Función para AÑADIR ---
  // Recibe los datos del formulario (company, salary, etc.)
  const handleAdd = (newJobData: Omit<JobApplication, 'id' | 'createdAt'>) => {
    
    // 1. Creamos el objeto completo añadiendo lo que falta (ID y Fecha)
    const newJob: JobApplication = {
      ...newJobData,              // Copia los datos del form
      id: crypto.randomUUID(),    // Genera un ID aleatorio único
      createdAt: Date.now()       // Pone la fecha de ahora mismo
    };

    // 2. Añadimos el nuevo trabajo AL PRINCIPIO de la lista
    setJobs([newJob, ...jobs]); 
  };

  return (
    <div className="container py-5">
      <header className="text-center mb-5">
        <h1 className="display-4 fw-bold text-primary">JobQuest 💼</h1>
        <p className="lead text-secondary">Gestiona tus candidaturas de forma fácil</p>
      </header>

      {/* [NUEVO] Aquí ponemos el formulario, antes de la lista */}
      <section className="row justify-content-center mb-5">
        <div className="col-lg-8">
           {/* Le pasamos la función handleAdd al formulario */}
           <JobForm onAdd={handleAdd} />
        </div>
      </section>

      <main className="row g-4">
        {jobs.map((job) => (
          <div key={job.id} className="col-12 col-md-6 col-lg-4">
            <JobCard job={job} onDelete={handleDelete} />
          </div>
        ))}

        {jobs.length === 0 && (
          <div className="col-12 text-center">
            <p className="alert alert-info">No hay candidaturas aún. ¡Añade una!</p>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
```

**BLOQUE 4: CONECTAR CON LA BASE DE DATOS**
**1. Una vez creada la base de datos, lanzar el siguiente comando `npm install firebase`

Creo `firebase.ts` en src y copio el código que me da firebase dentro.
(IMPORTANTE: cambiar la última línea por `export const db = getFirestore(app);` e importar `import { getFirestore } from "firebase/firestore";`)

Edito App.tsx para quitar los datos falsos y conectar la base de datos

>App.tsx
```TSX
// src/App.tsx
import { useState, useEffect } from 'react'; // [FIREBASE] Importamos useEffect
import './App.css';
import type { JobApplication } from './types';
import { JobCard } from './components/JobCard';
import { JobForm } from './components/JobForm';

// [FIREBASE] Importamos las funciones de la base de datos
import { db } from './firebase';
import { collection, onSnapshot, addDoc, deleteDoc, doc } from 'firebase/firestore';

function App() {
  const [jobs, setJobs] = useState<JobApplication[]>([]);
  const [loading, setLoading] = useState(true); // [FIREBASE] Estado de carga

  // [FIREBASE] 1. LEER DATOS (READ)
  // Este efecto se ejecuta al arrancar la página y "escucha" cambios en tiempo real
  useEffect(() => {
    // Nos conectamos a la colección 'jobs'
    const unsubscribe = onSnapshot(collection(db, 'jobs'), (snapshot) => {
      // Convertimos los documentos de Firebase a nuestro formato
      const firebaseJobs = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as JobApplication[];

      // Ordenamos por fecha (más nuevo arriba)
      firebaseJobs.sort((a, b) => b.createdAt - a.createdAt);

      setJobs(firebaseJobs);
      setLoading(false); // Quitamos el spinner
    });

    return () => unsubscribe(); // Limpieza al salir
  }, []);

  // [FIREBASE] 2. CREAR (CREATE)
  const handleAdd = async (newJobData: Omit<JobApplication, 'id' | 'createdAt'>) => {
    try {
      // Guardamos en la nube. Firebase crea el ID automático.
      await addDoc(collection(db, 'jobs'), {
        ...newJobData,
        createdAt: Date.now()
      });
      // NO hace falta hacer setJobs, el onSnapshot de arriba actualizará la lista solo
    } catch (error) {
      console.error("Error al guardar:", error);
      alert("Error al guardar");
    }
  };

  // [FIREBASE] 3. BORRAR (DELETE)
  const handleDelete = async (id: string) => {
    if (!confirm("¿Seguro que quieres borrar esta candidatura?")) return;
    
    try {
      // Buscamos el documento por su ID y lo borramos
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
```