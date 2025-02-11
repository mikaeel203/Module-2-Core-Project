// Import modules
import cors from 'cors';
import express from 'express';
import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';
import session from 'express-session';
import { pool } from './config/db.js';

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();  

// Session middleware
app.use(
    session({
        secret: 'your_secret_key', // Change this to a strong, random string
        resave: false,
        saveUninitialized: true,
        cookie: { secure: false, httpOnly: true, sameSite: 'strict' } // secure: true for HTTPS
    })
);

// CORS middleware
app.use(cors({
    origin: ["http://localhost:5173", "http://localhost:8080"], // Add allowed frontend URLs
    credentials: true, // Allow cookies and sessions
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type"]
}));

app.use(express.json());

// Import routes
import employeeRoutes from "./routes/EmployeeRouter.js";
import payrollRoutes from "./routes/PayrollRouter.js";
import attendanceRoutes from "./routes/AttendanceRouter.js";
import leaveRequestsRoutes from "./routes/leaveRequestsRouter.js";

// Routes
app.use("/employees", employeeRoutes);
app.use("/payroll", payrollRoutes);
app.use("/attendance", attendanceRoutes);
app.use("/leaveRequests", leaveRequestsRoutes);

// Register Route
app.post('/register', async (req, res) => {
    try {
        const { username, password } = req.body;

        if (!username || !password) {
            return res.status(400).json({ message: "Username and password are required" });
        }

        // Check if user already exists
        const [existingUser] = await pool.execute('SELECT * FROM users WHERE username = ?', [username]);
        if (existingUser.length > 0) {
            return res.status(400).json({ message: "Username already exists" });
        }

        // Hash password before storing
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Insert user into database
        await pool.execute('INSERT INTO users (username, password) VALUES (?, ?)', [username, hashedPassword]);

        return res.status(201).json({ message: "User registered successfully" });
    } catch (err) {
        console.error("Registration error:", err);
        res.status(500).json({ message: "Internal server error" });
    }
});

// Login Route (Session-based)
app.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;

        if (!username || !password) {
            return res.status(400).json({ message: "Username and password are required" });
        }

        // Query database for user
        const [rows] = await pool.execute('SELECT * FROM users WHERE username = ?', [username]);

        if (rows.length === 0) {
            return res.status(400).json({ message: "Invalid username or password" });
        }

        const user = rows[0];

        // Compare entered password with hashed password
        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).json({ message: "Invalid username or password" });
        }

        // Store user info in session
        req.session.user = { id: user.id, username: user.username };

        return res.status(200).json({ message: "Login successful", user: req.session.user });
    } catch (err) {
        console.error("Login error:", err);
        res.status(500).json({ message: "Internal server error" });
    }
});

// Logout Route (Clear session)
app.post('/logout', (req, res) => {
    req.session.destroy(err => {
        if (err) {
            return res.status(500).json({ message: "Error logging out" });
        }
        res.clearCookie("connect.sid"); // Clear session cookie
        return res.status(200).json({ message: "Logged out successfully" });
    });
});

// Protected Route (Requires Authentication)
app.get('/protected', (req, res) => {
    if (!req.session.user) {
        return res.status(401).json({ message: "Unauthorized: Please log in" });
    }
    res.json({ message: "You have accessed a protected route", user: req.session.user });
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('http://localhost:', PORT));
