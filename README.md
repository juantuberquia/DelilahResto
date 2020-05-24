Proyecto Delilah Resto

se base en la construccion de una API, para realizar pedidos en un restaurante

## instalacion del proyecto

- ejecutar el comando npm install
- ejecutar los querys que se encuentran en el archivo createDataBase, el cual esta alojado en la carpeta scripts
- en la carpeta configuracion se encuentra alojado el archivo conexionDB.js, en el cual se puede cambiar La cadena de conexión

- Para registrar un nuevo usuario:

1. ingresar a la aplicacion POSTMAN
2. ingresar a la sub-carpeta usuarios
3. ingresar al endpoint agregar usuarios, proceder a ingresar los datos: usuario, nombre, correo telefono, direccion, contrasena

- Para obtener la lista de los productos

1. ingresar a la aplicacion POSTMAN
2. ingresar a la sub-carpeta usuarios
3. ingresar al endpoint agregar validar login, proceder a ingresar los datos: correo: "4dministr4dor",
   "contrasena" : "4dmin40"
4. ingresar a la sub-carpeta producto
5. ingresar al endpoint obtener productos

- Para agregar un pedido

1. ingresar a la aplicacion POSTMAN
2. ingresar a la sub-carpeta usuarios
3. ingresar al endpoint agregar validar login, proceder a ingresar los datos: correo: "4dministr4dor",
   "contrasena" : "4dmin40"
4. ingresar a la sub-carpeta pedido
5. ingresar al endpoint realizar pedido
6. ingresar los datos: fechaCreacion y metodoPago

- Para actualizar un estado

1. ingresar a la aplicacion POSTMAN
2. ingresar a la sub-carpeta usuarios
3. ingresar al endpoint agregar validar login, proceder a ingresar los datos: correo: "4dministr4dor",
   "contrasena" : "4dmin40"
4. ingresar a la sub-carpeta pedido
5. ingresar al endpoint actualizar pedido

- operacion CRUD sobre los productos

1. ingresar a la aplicacion POSTMAN
2. ingresar a la sub-carpeta usuarios
3. ingresar al endpoint agregar validar login, proceder a ingresar los datos: correo: "4dministr4dor",
   "contrasena" : "4dmin40"
4. ingresar a la sub-carpeta producto
   4.1 agregar producto : ingresar al endpoint agregar producto
   4.2 obtener producto : ingresar al endpoint obtener producto por ID
   4.3 actualizar producto : ingresar al endpoint actualizar producto por ID
   4.4 eliminar producto : ingresar al endpoint eliminar producto por ID

<!-- falta agregar que dbe coger la repsuest json que le da cuanndo se loguea y debe engersarlso  ene el headers como authrization, falta os querys params -->
