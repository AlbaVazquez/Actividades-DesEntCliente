**1. Asincronía (Async/Await)**
-

En la programación "antigua" (síncrona), si pedías algo todo se congelaba hasta que te lo daba.

**La analogía:** Imagina que vas a un restaurante y pides una pizza.

- **Síncrono:** te quedas petrificado en la barra mirando al cocinero durante 20 minutos. No puedes mirar el móvil, ni ir al baño, ni hablar. Solo esperar.

- **Asíncrono:** pides la pizza, el camarero te da un "ticket" (Promesa) y tú te vas a tu mesa a ver Instagram mientras cocinan. Cuando esté lista, te avisan.

---

En JavaScript:

- **async**: avisa a la función que se procesarán cosas que tardan un tiempo, pero que no se congele.
- **await**: significa que espera a terminar antes de pasar a la siguiente línea, pero dejará que el resto de la web siga funcionando.

**2. JSON (parse y stringify)**
-
Los ordenadores y los servidores a veces hablan "idiomas" ligeramente distintos.

El código JavaScript entiende Objetos (cosas con propiedades).

Internet envía la información como texto (Strings).

Necesitamos un traductor:

1. **JSON.stringify() (Empaquetar):** tienes un objeto en JS y quieres enviarlo al servidor. Lo conviertes en texto plano para que pueda "viajar" por el cable de internet.

    Como si metieras tu ropa en una maleta para viajar.

2. **JSON.parse() (Desempaquetar):**
recibes texto del servidor y lo quieres usar en tu código. Lo conviertes de nuevo a objeto.

    Como si llegaras al hotel, abres la maleta (String) y sacas tu ropa (Objeto) para usarla.

**3. Métodos HTTP (Los verbos)**
-

Cuando hablas con la cocina (el servidor), necesitas decirle **qué** quieres hacer con la comida.

- **GET (Dame)**: "dame el menú / dame la lista de usuarios". Sólo lectura.

- **POST (Toma/Crea)**: "toma mi pedido nuevo / crea un usuario nuevo".

- **PUT (Cambia)**: "me he equivocado, cambia la pizza de jamón por la de queso".

- **DELETE (Borra)**: "cancela mi pedido".

**4. Fetch (El camarero)**
-

Fetch es la herramienta que utilizamos para ir a la cocina y volver. Es el camarero. Tú le das una dirección (URL) y él va a **buscar o a llevar datos**.

**5. Juntando todo**
-
Este es un ejemplo real, vamos a pedir la lista de usuarios a un servidor.

[Hazme click para ir al ejemplo](ejemplo.js)




