const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

    // creates a User Model and User inherits everything Model has
    // this is like a javascript object but its really a mysql dataset
class User extends Model {
          // set up method to run on instance data (per user) to check password
          checkPassword(loginPw) {
          return bcrypt.compareSync(loginPw, this.password);
          }
}

User.init({
        id: {
            // tell Sequelize what type of data it is
            type: DataTypes.INTEGER,
            // make sure it can't be null
            allowNull: false,
            // this is the primary key
            primaryKey: true,
            // auto increment 
            autoIncrement: true,
        },
            // define an username column
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
            // define an email column
        email: {
            type: DataTypes.STRING,
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
            type: DataTypes.STRING,
            allowNull: false,
            // password must be atleast four characters
            validate: {
                len: [6]
            }
        }
    },
    {
        hooks: {
          // set up beforeCreate lifecycle "hook" functionality
          async beforeCreate(newUserData) {
            newUserData.password = await bcrypt.hash(newUserData.password, 10);
            return newUserData;
          },
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'customer'
            }
);

module.exports = User;