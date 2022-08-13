require('./config/db_connection')
const express = require('express')
const cors = require('cors'); //cross-origin resource sharing
const landing = require('./routes/apis/landing');
const app = express();
const PORT = 8000;

const db_connection = require('./config/db_connection');
app.use(express.json());
app.use(express.urlencoded({ extended:true})); //do app.use on top of reqiuring db connection and routes 
app.use(
    cors({
        origin: 'http://localhost:3000', //54.33.22.0.1
    }),
)

app.use(cors()); //Accept all origins
app.use(express.static("./public/template/index.html"))


app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
})

