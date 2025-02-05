import mysql from "mysql2";
import {config} from "dotenv"
config()

const db = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
});

db.connect(err => {
    if (err) {
        console.error("Database Connection Failed: " + err.stack);
        return;
    }
    console.log("Connected to MySQL Database.");
});

export {db}