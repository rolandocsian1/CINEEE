module.exports = app => {
  const peliculas = require("../controllers/pelicula.controller.js");
  const { verifyToken } = require("../middlewares/authJwt.js");
  var router = require("express").Router();

  router.post("/create/", [verifyToken], peliculas.create);
  router.get("/", [verifyToken], peliculas.findAll);
  router.get("/:id", [verifyToken], peliculas.findOne);
  router.put("/update/:id", [verifyToken], peliculas.update);
  router.delete("/delete/:id", [verifyToken], peliculas.delete);

  app.use("/api/peliculas", router);
};