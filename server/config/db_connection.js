const mongoose = require('mongoose');
//VERY IMPORTANT FOR SOME WINDOWS USERS
// CONST mongoURI = 'mongodb://127.0.0.1:27017/mongo-demo 
const mongoEndpoint = 'mongodb://localhost/';
const dbName = 'instascraperDB';

mongoose
    .connect(`mongodb://localhost/${dbName}`) //{ useNewUrlParcer: true, iseUnifiedTopology: true})
    .then(() => console.log(`Connected to the ${dbName} `))
    .catch((err) => console.log("ERROR IN CONNECTION TO DB", err));
    


