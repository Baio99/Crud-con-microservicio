# Crud-con-microservicio
Crud usando microservicios, usando API RESTful.

En el programa que hemos estado desarrollando, se utilizaron las siguientes tecnologías, bibliotecas y buenas prácticas de seguridad:


Node.js: Plataforma de ejecución de JavaScript que te permite ejecutar código del lado del servidor.

Express.js: Framework de Node.js que simplifica el desarrollo de aplicaciones web y API.

MySQL: Sistema de gestión de bases de datos relacional utilizado para almacenar datos de usuarios.

HTTPS: se ha configurado tu servidor para utilizar el protocolo seguro HTTPS, proporcionando una capa adicional de seguridad mediante la encriptación de la comunicación entre el cliente y el servidor.

Encriptación: se ha implementado funciones de encriptación y desencriptación para los datos de usuario utilizando el módulo crypto de Node.js. Esto añade una capa adicional de seguridad al almacenar y manipular datos sensibles.

Gestión de Dependencias: se ha utilizado npm para gestionar las dependencias del proyecto, asegurando que las bibliotecas utilizadas sean seguras y actualizadas.

Buenas Prácticas en el Código: se ha seguido buenas prácticas en la escritura del código, como el uso de constantes para la configuración, manejo de errores adecuado y modularización del código.

Uso de Parámetros de Consulta Seguros: Al realizar consultas SQL, se ha utilizado parámetros de consulta seguros para prevenir inyecciones de SQL.

Validación de Datos de Entrada: se ha implementado validación de datos de entrada, asegurándote de que los campos obligatorios estén presentes antes de procesar los datos.

Manejo de Errores: Has implementado manejo de errores adecuado para proporcionar respuestas significativas en caso de fallos, sin exponer detalles internos del sistema.

Estas prácticas contribuyen a hacer la aplicación más robusta y segura, protegiendo contra posibles amenazas y vulnerabilidades. Es importante seguir evaluando y actualizando las prácticas de seguridad a medida que evoluciona la aplicación y se descubren nuevas amenazas.
