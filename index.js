
//Modules and globals
require('dotenv').config()
const express = require('express');
const  mongoose = require('mongoose');

const app = express();

app.get('/', function (req, res) {
    res.send('Hello world');
});

//Middleware
app.use(express.json());


// MONGOOSE
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log('connected to mongo on: ', process.env.MONGO_URI)
});


//Controllers and routes
app.use('/books', require('./controllers/books.js'));

app.listen(process.env.PORT, function(){
    console.log('Port: 3006')
});
