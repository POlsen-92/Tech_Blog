const express = require('express');
const sequelize = require("./config/connection.js")
const session = require("express-session"); //Sets up those cookies wheeeee
const exphbs = require('express-handlebars');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
// Sets up the Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 3000;

const hbs = exphbs.create({});

// Requiring our models for syncing
const { Blog,Category,Tag,User } = require('./models'); //***add created models
const routes = require("./routes");

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.use(express.static("public"));


// Sets up the Express app to handle data parsing
// this is how we log in and the server remembers who we are
app.use(session({
    secret: process.env.SESSION_SECRET, //yay this should never be exposed, only lives on the local machine
    resave: false,
    saveUninitialized: true,
    cookie: { 
        maxAge: 1000 * 60 * 60 * 2
     },
     store: new SequelizeStore({
        db:sequelize
     })
  }))


app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use(routes)

sequelize.sync({ force: false }).then(function() {
    app.listen(PORT, function() {
    console.log('App listening on PORT ' + PORT);
    });
});