const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

const db = {};


db.Corros = require("./corro.js")(sequelize, Sequelize);
db.Niveaus = require("./niveau.js")(sequelize, Sequelize);
db.Etudes = require("./etude.js")(sequelize, Sequelize);
db.Documents = require("./document.js")(sequelize, Sequelize);
db.Sujets = require("./sujet.js")(sequelize, Sequelize);


db.Sequelize = Sequelize;
db.sequelize = sequelize;

module.exports = db;
