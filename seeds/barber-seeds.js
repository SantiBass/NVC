const { Barber } = require('../models');
const sequelize = require('../config/connection');

const barberData = [
    {
        username: "barberdooks",
        email: "barberdookie@yahoo.com",
        password: "BarberO"
    },
    {
        username: "4gee",
        email: "4gee@gmail.com",
        password: "BarberO"
    },
    {
        username: "Santicuts",
        email: "cuttinsant@yahoo.com",
        password: "BarberO"
    },
    {
        username: "mainbarber",
        email: "imhim@yahoo.com",
        password: "BarberO"
    },
];

const seedBarber = Barber.bulkCreate(barberData);

module.exports = seedBarber;