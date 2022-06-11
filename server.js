/** @format */
const exphbs = require('express-handlebars');
const express = require("express");
const path = require("path");
const routes = require("./controllers");
const hbs = exphbs.create({});
const sequelize = require("./config/connection");
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const app = express();
const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};


const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(session(sess));
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "public")));
// turn on routes

app.use(routes);

// turn on connection to db and server

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("now listening"));
  app.engine('handlebars', hbs.engine);
  app.set('view engine','handlebars');
});

//14.1.4
