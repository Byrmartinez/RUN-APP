# RUN-APP
PROYECTO CAPSTONE
## scripts

### Docker 

- Para iniciar el servidor de db
    - `docker compose up`

- Para detener el servidor de db
    - `docker compose down`
## Control de cambios
- Ajuste de la estructura de carpetas
    - Agregue la carpeta Bound Context "Backoffice" para agrupar todos módulos relacionados con el backoffice

- Incorporé una configuración para el linter, que nos permite mantener un código más limpio y ordenado
    - Extensiones vs code
        - ESLint: dbaeumer.vscode-eslint
        - Errors Lens: usernamehw.errorlens
        
- Módulo usuarios
    - Dominio
        - Se ajustaron las propiedades de los campos de la entidad usuario
        - Se agregaron Exceptions personalizadas para el módulo de usuarios 
        - TODO: actualizar validaciones de los value objects con las nuevas excepciones
        - Se agrego una función para mapear los datos de un DTO plano a la entidad usuario "create"
        - Se agrego una function para mapear los datos de la entidad usuario a un DTO plano "mapToDTO"
        - En el userRepository se agrega función para buscar un usuario por email

    - Application
        - Se ajustan los casos de uso
    
    - Infrastructure
        - Se crea repositorio en base de datos Postgres directo, sin ORM
        - Se Crea el ExpressUserController para manejar las peticiones HTTP
        - Se implementa el manejo de las excepciones en el controlador
        - Se crea ExpressUserRouter para manejar las rutas de los usuarios

    - Shared
        - Se crea el modulo Shared para generar un Service Container, en este modulo se registran los sevicios y que repositorio implementaran

    - App.ts: Se crea el archivo app.ts punto de entrada para aplicación

## Ajustes de Dependencias y configuraciones

- Cree los scripts de npm para iniciar la aplicación
    - npm run dev: Inicia la aplicación en modo desarrollo
    - npm run build: Compila la aplicación
    - npm run start: Inicia la aplicación en modo producción

- para el modo de desarrollo, me gusta ocupar el entorno de ejecucion bun https://bun.sh/ es mucho mas rapido que node y no necesita compiladores adiciones para el manejo de typescript