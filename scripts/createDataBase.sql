--crear tabla usuarios
CREATE TABLE usuarios (
    idUsuario int not null AUTO_INCREMENT,
    usuario varchar (60) not null,
    nombreCompleto varchar (60) not null,
    correo varchar (60) not null,
    telefono int not null,
    direccion varchar (60) not null,
    contraseña varchar (60) not null,
    esAdmin BOOLEAN
   
); 

-- query administrador DB
INSERT INTO `usuarios`(
    `usuario`,
    `nombreCompleto`,
    `correo`,
    `telefono`,
    `direccion`,
    `contraseña`,
    `esAdmin`
)
VALUES(
    "4dministr4dor",
    "4dministr4dor",
    "4dministr4dor",
     4020,
    "4dministr4dor",
    "4dmin40",
    TRUE
)