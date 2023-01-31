# Iniciar proyecto
Lo que tienes que hacer para empezar es, clonar el repositorio con
```
git clone https://github.com/EstebanV23/00-front-coex.git
```
y si trabajas con ssh entonces
```
git clone git@github.com:EstebanV23/00-front-coex.git
```
Luego entras a la carpeta
```
cd 00-front-coex
```
No es necesario que hagas
```
npm install
```
Al menos que quieras las dependencías de desarrollo, ya que no es necesario de ninguna dependencía para correr el programa

Al descargalo vas a escontrar una carpeta llamada *src/*

En ella encontrarás el archivo *index.html*, solo ejecútalo y tendrás el trabajo realizado

Si quieres agregar tus preguntas, simplemente modifica esta plantilla

**A tener en cuenta**
- El id debe ser númerico y lo mejor es que sea unico, también que no comparta id con alguna pregunta
- El atributo isCorrect, solamente lo tienes que colocar a la pregunta que es correcta
- Puedes colocar tantas respuestas quieras, pero siempre con un id distinto
```javascript
{
    "id": 12,
    "titleQuestion": "TU PREGUNTA AQUI",
    "answers": 
    [
      {
        "id": 1,
        "text": "TEXTO QUE SEMUESTRA EN PANTALLA DE LA RESPUESTA",
        "isCorrect": true
      },
      {
        "id": 2,
        "text": "TEXTO QUE SEMUESTRA EN PANTALLA DE LA RESPUESTA"
      },
      {
        "id": 3,
        "text": "TEXTO QUE SEMUESTRA EN PANTALLA DE LA RESPUESTA"
      }
    ]
}
```
Lo que tienes que hacer luego de modificar la plantilla, es agregar el nuevo objeto al documento json *questions.json* que es un array de objetos, y listo, tendrás tu pregunta en el programa 