# Proyecto Delilah Resto

Se base en la construccion de una API, para realizar pedidos en un restaurante

## clonar e instalacion del proyecto

```
$ git clone https://github.com/juantuberquia/DelilahResto
```

### Instalar dependencias

```
 npm install
```

## Base de Datos

1. iniciar MYSQL
2. crear una base de datos
3. abrir `conexionDB.js` , cuya ruta es ( `DelilahResto\configuracion`), en el cual se puede editar la cadena de conexión, nombre de base de datos, usuario, contraseña, etc.
4. Ejecutar los querys que se encuentran en el archivo `createDataBase.js`, cuya ruta es : (`DelilahResto\scripts`).

```
$ node index.js
```

### Para registrar un nuevo usuario:

1. Ingresar a la aplicacion POSTMAN
2. Ingresar a la sub-carpeta usuarios
3. Ingresar al endpoint agregar usuarios, proceder a ingresar los datos: usuario, nombre, correo telefono, direccion, contrasena

### Para obtener la lista de los productos

1. Ingresar a la aplicacion POSTMAN
2. Ingresar a la sub-carpeta usuarios
3. Ingresar al endpoint agregar validar login, proceder a ingresar los datos: correo: "4dministr4dor",
   "contrasena" : "4dmin40"
4. Ingresar a la sub-carpeta producto
5. Ingresar al endpoint obtener productos

### Para agregar un pedido

1. Ingresar a la aplicacion POSTMAN
2. Ingresar a la sub-carpeta usuarios
3. Ingresar al endpoint agregar validar login, proceder a ingresar los datos: correo: "4dministr4dor",
   "contrasena" : "4dmin40"
4. Ingresar a la sub-carpeta pedido
5. Ingresar al endpoint realizar pedido
6. Ingresar los datos: fechaCreacion y metodoPago

### Para actualizar un estado

1. Ingresar a la aplicacion POSTMAN
2. Ingresar a la sub-carpeta usuarios
3. Ingresar al endpoint agregar validar login, proceder a ingresar los datos: correo: "4dministr4dor",
   "contrasena" : "4dmin40"
4. Ingresar a la sub-carpeta pedido
5. Ingresar al endpoint actualizar pedido

### Operacion CRUD sobre los productos

1. Ingresar a la aplicacion POSTMAN
2. Ingresar a la sub-carpeta usuarios
3. Ingresar al endpoint agregar validar login, proceder a ingresar los datos: correo: "4dministr4dor",
   "contrasena" : "4dmin40"
4. Ingresar a la sub-carpeta producto
5. Agregar producto : ingresar al endpoint agregar producto
6. Obtener producto : ingresar al endpoint obtener producto por ID
7. Actualizar producto : ingresar al endpoint actualizar producto por ID
8. Eliminar producto : ingresar al endpoint eliminar producto por ID
