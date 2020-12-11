'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Niveau extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Niveau.hasMany(models.Etude);
    }
  };
  Niveau.init({
    libelle: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Niveau',
  });
  return Niveau;
};