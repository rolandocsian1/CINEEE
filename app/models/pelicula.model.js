module.exports = (sequelize, Sequelize) => {
  const Pelicula = sequelize.define("pelicula", {
    nombre: {
      type: Sequelize.STRING
    },
    sinopsis: {
      type: Sequelize.TEXT
    },
    actores: {
      type: Sequelize.STRING
    },
    duracion: {
      type: Sequelize.INTEGER
    },
    tipo: {
      type: Sequelize.STRING
    },
    categoria: {
      type: Sequelize.STRING
    },
    anio: {
      type: Sequelize.INTEGER
    }
  });
  return Pelicula;
};