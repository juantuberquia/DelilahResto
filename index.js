const express = require("express");
const sequelize = require("sequelize");
const app = express();

app.listen(3000, () => {
  console.log("servidor corre puerto 3000");
});

// middleware
app.use(express.json());

// routes
app.use("/api/singup", require("./routes/usuarios"));
app.use("/api/login", require("./routes/usuarios"));
app.use("/api/pedido", require("./routes/pedido"));
app.use("/api/producto", require("./routes/productos"));
