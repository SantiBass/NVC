// where the main server lives
const path =  require('path');
const express = require('express');
const session =  require('express-session');
const routes =  require');
const helpers =  require('./utils/helpers');
const sequelize =  require('./config/connection');
const PORT = process.env.PORT || 3003;
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const exphbs = require('express-handlebars');
const app = express();
const hbs = exphbs.create({ helpers });
const sess = {
  secret: 'Mountainoffire',
  cookie: { expires: 15 * 60 * 1000
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.engine('handlebars', hbs.engine); 
app.set('view engine', 'handlebars');
app.use(session(sess));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes); 
sequelize.sync({force: false}).then(()=>{
    app.listen(PORT, () => {
      console.log(`App listening on port ${PORT}! It's online`);
    });
    });
 