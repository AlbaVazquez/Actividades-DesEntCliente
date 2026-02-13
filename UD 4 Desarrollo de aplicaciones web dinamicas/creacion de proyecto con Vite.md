1. Abre la carpeta donde alojarás tu proyecto, abre una terminal y ejecuta el siguiente comando:
`npm create vite@latest nombre_de_la_carpeta -- --template react-ts`

2. Ahora dirígete a la carpeta e instala las librerías necesarias:
- `cd tech-inventory`
- `npm install`

3. Para tener "un lienzo en blanco", borra todo lo que hay dentro de `App.tsx`, `App.css` y `index.css`.
Dentro de `App.tsx` escribe lo siguiente:
```jsx
function App() {
  return (
    <div>
      <h1>tu título</h1>
    </div>
  )
}

export default App
```
4. Antes de crear la app, tenemos que definir cómo son nuestros datos.
Dentro de `src`, crea un archivo llamado `types.ts`. Define ahí tus datos.
Ejemplo:
```jsx
export interface Equipment {
  id: string;
  nombre: string;  
  tipo: 'portatil' | 'monitor' | 'teclado'; 
  estado: 'disponible' | 'asignado' | 'averiado';
}
```

5. Para crear la base de datos usaremos https://console.firebase.google.com.
Dale a **Agregar proyecto**, asígnale un nombre y dale a Continuar hasta crear el proyecto.
A la izquierda busca el apartado de **Compilación** y ve a **Firestore Database**, crea una base de datos. (Selecciona **Comenzar en modo de prueba** para proyectos que no te interesan que perduren para siempre)

Una vez creada, ve al icono de la rueda dentada (ajustes/configuración) arriba a la izquierda.
Baja hasta ver **"Tus Apps"** y haz clic en este icono **Web (</>)**. Asígnale un apodo y regístralo, **no cierres el código que aperecerá por pantalla**.

**Vuelve a VSCode**, en la terminal lanza el comando `npm install firebase` dentro de la carpeta de tu entorno.
Crea un archivo nuevo en `src` llamado `firebase.ts`.
Dentro de este archivo copia el código que te da la web, debería verse así, más o menos:

```typescript
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyArJRJnhGyV74ao1EHtkLVLBnrntzFcPRg",
  authDomain: "tech-inventory-albavazquez.firebaseapp.com",
  projectId: "tech-inventory-albavazquez",
  storageBucket: "tech-inventory-albavazquez.firebasestorage.app",
  messagingSenderId: "538806608610",
  appId: "1:538806608610:web:e14cf948b1a1c3b28734bb",
  measurementId: "G-YR5RHQNRY1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
```
---
Para instalar boostrap lanza en la terminal `npm install bootstrap` y añade esta línea en `main.tsx`: `import 'bootstrap/dist/css/bootstrap.min.css';`

