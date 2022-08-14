require('./config/db_connection')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors'); //cross-origin resource sharing
const landing = require('./routes/landing');
const api_routes = require('./routes/apis/landing');

const app = express();
const PORT = 8000;

const db_connection = require('./config/db_connection');
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended:true})); //do app.use on top of reqiuring db connection and routes 
//app.use(routes)
app.use(api_routes)
app.use(
    cors({
        origin: 'http://localhost:3001', //54.33.22.0.1
    }),
)

app.use(cors()); //Accept all origins
app.use(express.static("./public/template/index.html"))


app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
})

