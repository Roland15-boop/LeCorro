'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Sujet extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Sujet.belongsToMany(models.Document);
      models.Sujet.hasMany(models.Etude);
    }
  };
  Sujet.init({
    description: DataTypes.BLOB("long")
  }, {
    sequelize,
    modelName: 'Sujet',
  });
  return Sujet;
};