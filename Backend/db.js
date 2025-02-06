import mysql from "mysql2/promise";
import {config} from "dotenv"
config()

const pool = mysql.createPool({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

const testConnection = async () => {
    try {
        const connection = await pool.getConnection();
        console.log("Connected to MySQL Database.");
        connection.release(); // Release connection back to pool
    } catch (err) {
        console.error("Database Connection Failed:", err);
    }
};

testConnection();

export { pool };