const { Router } = require("express");
const router = Router();
const index = require("../models/index");

router.route("/").post(async (req, res) => {
  const { idUsuario, fechaCreacion } = req.body;

  const resultado = await index.AgregarPedido(idUsuario, fechaCreacion);
  res.json("pedido ingresado");
});

module.exports = router;
