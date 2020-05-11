const { Router } = require("express");
const router = Router();
const index = require("../models/index");

// operacion crud  a los productos
router.route("/").get(async (req, res) => {});

router.route("/").post(async (req, res) => {});

router.route("/").delete(async (req, res) => {});

router.route("/").put(async (req, res) => {});

module.exports = router;
