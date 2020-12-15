# Reto Front-End: Cambio de tema.
La aplicación debe cambiar de tema claro a oscuro al dar click sobre un botón.

Esta tarea es para demostrar su entendimiento en HTML, CSS y JavaScript tecnologías fundamentales
para el desarrollo web.

## Objetivos
1. Preparar al practicante para prueba en entrevista de trabajo para desarrolladores.
1. Desarrollar agilidad para adquirir conocimientos en diferentes tecnologias.
1. Incrementar la capacidad de implementar código sin necesidad de recurrir al plagio.

## Instrucciones:
1. Verificar si node.js esta instalado: `node -v`. En caso de no mostrar la versión. Debe instalar: [descargar aquí](https://nodejs.org/es/download/)

2. `npm install` para instalar dependencias.

3. Modificar los siguientes archivos según instrucciones abajo descritas:
    - index.html
    - main.css
    - main.js

4. En el archivo `index.html` hacer lo siguiente:
    - cambiar el `<title>` a **Cambio de Tema**.
    - añadir el archivo `main.css`.
    - añanir clase tema-claro a `<body>`.
    - añadir un botón con clase btno `<button>` el texto debe decir **oscuro**
    - el botón debe estar anidado dentro de un `div`.
    - añadir el archivo `main.js` antes de `</body>`.
    - `<body>` debe llevar un contenido adicional. Este último y el diseño es totalmente según su criterio.

5. En el archivo `main.css` hacer lo siguiente:
    - crear variables globales con el selector `:root` para los colores que ustedes elijan.
    - utilizar el selector universal `*` para cambiar color letra. el color debe cambiar según el tema seleccionado.
    - el body su fondo debe cambiar según el tema seleccionado.
    - crear un selector de clase llamado `tema-claro` con 4 variables: 1 para el color del fondo, 1 para el color de letra, 1 para el fondo del botón y 1 para el color de la letra del botón. Todas debe estar inicializado con las variables globales creadas en `:root` según los colores de su selección.
    - crear un selector de clase llamado `tema-oscuro` con 4 variables: 1 para el color del fondo, 1 para el color de letra, 1 para el fondo del botón y 1 para el color de la letra del botón. Todas debe estar inicializado con las variables globales creadas en `:root` según los colores de su selección.
    - **las variables de ambos selectores debe llamarse igual**.
    - crear un selector de clase llamado `btno` el cual debe contener 2 atributos: color y background-color. Ambos deben estar inicializados con las variables creadas en los selectores de clase `tema-claro`/ `tema-oscuro`.

6. En el archivo `main.js` dentro de la función `cambiarTema` hacer lo siguiente:
    - Declarar una variable inicializada con la clase `btno`.
    - Añadir un evento de escucha con el método `click`.
    - En la función callback utilizar la propiedad `classList` y el método `toggle` para cambiar a la clase `tema-oscuro`.
    - Hacer un `if-else`. Si el nombre de la clase es `tema-claro` el texto del botón debe cambiar a `Oscuro`. En caso contrario, el texto del botón debe cambiar `Claro`.

7. Una vez, terminado el paso 6. Correr el comando npm test para validar que la función `cambiarTema` de el resultado esperado.

8. Una vez, pasado el test subir los cambios al repositorio.

## Nota
**No tocar el directorio tests**