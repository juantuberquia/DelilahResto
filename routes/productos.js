const { Router } = require("express");
const router = Router();
const producto = require("../models/producto");

router.route("/").post(async (req, res) => {
  await producto.agregarProducto(req);
  res.json("producto agregado correctamente");
});

module.exports = router;
