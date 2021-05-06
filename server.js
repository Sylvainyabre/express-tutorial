const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const mongoose = require('mongoose');
const cors = require('cors');


require('dotenv/config');

//A middleware is function that is always executed when we hit a given route

const postsRoute = require('./routes/posts.js');

//These middlewares run on every request
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));


// We want to avoid prefixing the posts route with /posts.
// To achieve that we can use a middleware to inject the prefix whenever the post route is hit.
app.use('/posts', postsRoute);




//DB connection

mongoose.connect(process.env.DB_CONNECTION_URL,
{ useNewUrlParser: true ,
 useUnifiedTopology: true },
 ()=>console.log("DB connection successful"));


//ROUTES
app.get('/', (req, res) =>{
    res.send("Welcome to the home page");
}

)


//Listening to the server 

app.listen(port)


