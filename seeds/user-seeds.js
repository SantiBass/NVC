const { User } = require('../models');
const sequelize = require('../config/connection');

const userData = [
    {
        username: 'easymoney',
        email: 'easymoney@yahoo.com',
        password: 'easymoney101'
    },
    {
        username: 'gotitgood',
        email: 'gotitgood@aol.com',
        password: 'sogoodatit'
    },
    {
        username: 'mememe',
        email: 'allaboutme@yahoo.com',
        password: 'dontforget'
    }
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;