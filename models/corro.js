'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Corro extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.Corro.belongsTo(models.Document);
    }
  };
  Corro.init({
    description: DataTypes.BLOB("long")
  }, {
    sequelize,
    modelName: 'Corro',
  });
  return Corro;
};