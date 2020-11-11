//Load express module
const express = require('express')
//Create express server
const app = express()
const port = 3000

//Load handlebars
const handlebars = require('express-handlebars')

//Sets app use handlebars engine
app.set('view engine', 'hbs')

//Sets handlebars configurations
app.engine('hbs', handlebars({
    layoutsDir: __dirname + '/views/layouts',
    partialsDir: __dirname + '/views/partials/',
    extname: 'hbs',
    defaultLayout: 'planB',
}))

//Serves static files
app.use(express.static('public'))



fakeApi = () => {
    return [
      {
        name: 'Katarina',
        lane: 'midlaner'
      },
      {
        name: 'Jayce',
        lane: 'toplaner'
      },
      {
        name: 'Heimerdinger',
        lane: 'toplaner'
      },
      {
        name: 'Zed',
        lane: 'midlaner'
      },
      {
        name: 'Azir',
        lane: 'midlaner'
      }
    ];
  }

//Sets basic route
app.get('/', (req, res) => {
    //Serves body page aka 'main.handlebars' to container
    //aka 'index.handlebars'
    res.render('main', {layout: 'index',  suggestedChamps: fakeApi(), listExists: true})
})

//Makes app listen port 3000
app.listen(port, () => console.log(`App listening to port ${port}`))