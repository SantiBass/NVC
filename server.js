// where the main server lives
const express = require('express');
exphbs = require('express-handlebars');
const sequelize = require('./config/connection');
const path = require('path');
const hbs = exphbs.create({});
const routes = require('./controllers');

// set up express app
const app = express();
const PORT = process.env.PORT || 3001;

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// api routes
app.use(routes);

// Sey Handlebbars as the default template engine.
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
});