// where the main server lives
const express = require('express');
// exphbs = require('express-handlebars');
const path = require('path');
const sequelize = require('./config/connection');
const routes = require('./controllers');
// const hbs = exphbs.create({});

// set up express app
const app = express();
const PORT = process.env.PORT || 5501;

// turn on the routes
app.use(routes);

// Sey Handlebars as the default template engine.
// app.engine('handlebars', hbs.engine);
// app.set('view engine', 'handlebars');

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
});