
//Modules and globals
require('dotenv').config()

const express = require('express');
const app = express();

app.get('/', function (req, res) {
    res.send('Hello world');
});

app.use(express.json());


//Controllers and routes
app.use('/books', require('./controllers/books.js'))

app.listen(process.env.PORT, function(){
    console.log('Port: 3006')
});
