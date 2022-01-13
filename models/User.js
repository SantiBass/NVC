const { Model, Datatypes, Sequelize } = require('sequelize');
const { Accounts } = require('./Accounts');
const sequelize = require('../config/connection');

    // creates a User Model and User inherits everything Model has
    // this is like a javascript object but its really a mysql dataset
class User extends Accounts {

    // method runs on every user to check password
    checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
    }
}

User.init(
    {
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
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'user'
    }
);

module.exports = User;