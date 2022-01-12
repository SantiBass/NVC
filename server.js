// where the main server lives
const express = require('express');
exphbs = require('express-handlebars');
const path = require('path');
const hbs = exphbs.create({});

// set up express app
const app = express();
const PORT = process.env.PORT || 3001;

// Sey Handlebbars as the default template engine.
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.listen(PORT, () => {
    console.log('Server listening on https://localhost:' + PORT);
});