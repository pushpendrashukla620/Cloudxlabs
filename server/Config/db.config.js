const mongoose = require('mongoose');
const colors = require('colors');

const username = "Quickreply";
const password = "Quickreply";
const cluster = "cluster0.ycx0bvl";
const dbname = "Quickreply";

mongoose.connect(
    `mongodb+srv://${username}:${password}@${cluster}.mongodb.net/${dbname}?retryWrites=true&w=majority`, 
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
    console.log(`Database Connected successfully`.bold.blue);
}); 

module.exports = db;