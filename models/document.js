'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Document extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.Document.hasMany(models.Corro);
      models.Document.hasMany(models.Sujet);
    }
  };
  Document.init({
    titre: DataTypes.BLOB("long"),
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Document',
  });
  return Document;
};