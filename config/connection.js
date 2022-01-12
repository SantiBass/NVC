const Sequelize = require('sequelize');

require('dotenv').config();

let sequelize;

// create connection to the database using JAWSDB and dotenv

if (process.env.JAWSD_URL) {
    sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
    sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DBB_PW, {
        host: 'localhost',
        dialect: 'mysql',
        port: '3001'
    });
}

module.exports = sequelize;