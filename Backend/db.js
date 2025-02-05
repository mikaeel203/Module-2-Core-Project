const mysql = require("mysql2");
require("dotenv").config();

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "*Veve1234",
    database: "hr_system"
});

db.connect(err => {
    if (err) {
        console.error("Database Connection Failed: " + err.stack);
        return;
    }
    console.log("Connected to MySQL Database.");
});

module.exports = db;