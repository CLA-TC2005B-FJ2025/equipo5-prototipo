# Highpoint International School Ecoa's

Este repositorio contiene el Front End para el sistema de Ecoa's de Highpoint.
Para correrlo dentro de tu localhost o instanacia de codespaces, es necesario tener 
corriendo una instancia de nuestro [back-end](https://github.com/CLA-TC2005B-FJ2025/CRUD-Equipo5/tree/main),
esto debido a que asi podremos obtener el link de nuestro API para consumir los 
servicios web necesarios para poder utilizar la plataforma de manera adecuada.

### Manera de utilizar la plataforma (En este punto se asume que se cuenta con un link del API)
Debemos de clonar el repositorio (o bien crear una instancia con codespaces), y después de esto,
crear un archivo .env en la raíz del proyecto, ya sea de manera manual, o en nuestra terminal con 
el comando
```sh
touch .env
```

Una vez hecho esto, debemos de agregar la siguiente variable a nuestro archivo .env
```sh
VITE_API_URL="link_de_tu_api/"
```
Es importante dejar el ultimo "/" para el funcionamiento correcto, ahora podemos guardar
el archivo y ejecutar los siguientes comando en sucesion

```sh
  npm install
  npm run dev
```

Si realizamos el proceso de manera correcta, debemos de poder visitar el siguiente link.
```sh
  http://localhost:5173/
```
E ingresar las credenciales ```alonso@tec.mx``` y ```hola1234```, con un permiso de administrador, 
llegando a nuestro dashboard principal.
