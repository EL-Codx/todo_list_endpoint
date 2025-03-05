const dotenv = require('dotenv')
dotenv.config()
const mysql = require('mysql'); // importing mysql

const db = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
});

db.connect((err)=>{
    if(err){
        console.log(process.env)
        console.log("Database connection failed: " + err.stack);
        return;
    }
    console.log("Connected to Database.")
});

module.exports = db;