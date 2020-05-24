--crear tabla usuarios
CREATE TABLE usuarios (
    idUsuario int not null AUTO_INCREMENT,
    usuario varchar (60) not null,
    nombreCompleto varchar (60) not null,
    correo varchar (60) not null,
    telefono int not null,
    direccion varchar (60) not null,
    contraseña varchar (60) not null,
    esAdmin BOOLEAN not null,
    PRIMARY KEY (idUsuario)
   
); 

-- query para usuario administrador DB
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

CREATE TABLE Productos (

    idProducto int not null AUTO_INCREMENT,
    nombre varchar (60) not null,
    precio varchar (60) not null,
    PRIMARY KEY (idProducto)
      
); 

CREATE TABLE Pedidos (

    idPedidos int not null AUTO_INCREMENT,
    idUsuario int not null,
    nombre varchar (60) not null,
    precio varchar (60) not null,
    PRIMARY KEY (idPedidos),
    FOREIGN KEY (idUsuario) REFERENCES usuarios(idUsuario)
); 

CREATE TABLE Pedidos_Productos (

    id int not null AUTO_INCREMENT,
    idPedidos int not null,
    idProducto int not null,
    FOREIGN KEY (idPedidos) REFERENCES Pedidos(idPedidos),
    FOREIGN KEY (idProducto) REFERENCES Productos(idProducto)
); 