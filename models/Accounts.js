const { Model, Datatypes, Sequelize } = require('sequelize');
const sequelize = require('../config/connection');

class Accounts {}

Accounts.init({
    id: {
        // tell Sequelize what type of data it is
        type: Datatypes.INTEGER,
        // make sure it can't be null
        allowNull: false,
        // this is the primary key
        primaryKey: true,
        // auto increment 
        autoIncrement: true
    },
        // define an username column
    username: {
        type: Datatypes.STRING(20),
        allowNull: false
    },
        // define an email column
    email: {
        type: Datatypes.STRING,
        allowNull: false,
        // make sure theres no duplicates
        unique: true,
        // if allowNull is set to false, we can run our data through validators before creating the table data
        validate: {
            isEmail: true
        }
    },
        // define password column
    password: {
        type: Datatypes.STRING,
        allowNull: false,
        // password must be atleast four characters
        validate: {
            len: [4]
        }
    }
})

module.exports = { Accounts };