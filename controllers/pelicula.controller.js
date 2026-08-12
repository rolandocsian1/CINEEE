const db = require("../models");
const Pelicula = db.peliculas;

exports.create = (req, res) => {
  if (!req.body.nombre) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  const pelicula = {
    nombre: req.body.nombre,
    sinopsis: req.body.sinopsis,
    actores: req.body.actores,
    duracion: req.body.duracion,
    tipo: req.body.tipo,
    categoria: req.body.categoria,
    anio: req.body.anio
  };

  Pelicula.create(pelicula)
    .then(data => res.send(data))
    .catch(err => res.status(500).send({ message: err.message || "Some error occurred while creating the Pelicula." }));
};

exports.findAll = (req, res) => {
  Pelicula.findAll()
    .then(data => res.send(data))
    .catch(err => res.status(500).send({ message: err.message || "Some error occurred while retrieving peliculas." }));
};

exports.findOne = (req, res) => {
  const id = req.params.id;
  Pelicula.findByPk(id)
    .then(data => res.send(data))
    .catch(err => res.status(500).send({ message: "Error retrieving Pelicula with id=" + id }));
};

exports.update = (req, res) => {
  const id = req.params.id;
  Pelicula.update(req.body, { where: { id: id } })
    .then(num => {
      if (num == 1) {
        res.send({ message: "Pelicula was updated successfully." });
      } else {
        res.send({ message: `Cannot update Pelicula with id=${id}. Maybe Pelicula was not found or req.body is empty!` });
      }
    })
    .catch(err => res.status(500).send({ message: "Error updating Pelicula with id=" + id }));
};

exports.delete = (req, res) => {
  const id = req.params.id;
  Pelicula.destroy({ where: { id: id } })
    .then(num => {
      if (num == 1) {
        res.send({ message: "Pelicula was deleted successfully!" });
      } else {
        res.send({ message: `Cannot delete Pelicula with id=${id}. No fue encontrada!` });
      }
    })
    .catch(err => res.status(500).send({ message: "Could not delete Pelicula with id=" + id }));
};