const express = require("express");
const app = express();

app.listen(3000, () => {
  console.log("servidor corre puerto 3000");
});

// middleware
app.use(express.json());

// routes
app.use("/api/usuarios", require("./routes/usuarios"));
app.use("/api/producto", require("./routes/productos"));
app.use("/api/pedido", require("./routes/pedidos"));
