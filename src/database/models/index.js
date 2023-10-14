import Sequelize from 'sequelize';

const config = require("../config/config");
const sequelize = new Sequelize(config.database, config.username, config.password, config);

const db = {};

db.Contact = require("./contact.js")(sequelize, Sequelize);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;