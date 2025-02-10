// Import modules
import cors from 'cors';
import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { pool } from './config/db.js'; 
import authMiddleware from './middleware/authMiddleware.js';

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();
app.use(cors());
app.use(express.json());

// Import routes
import employeeRoutes from "./routes/EmployeeRouter.js";
import attendanceRoutes from "./routes/AttendanceRouter.js";
import leaveRequestsRoutes from "./routes/leaveRequestsRouter.js";
// import payrollRoutes from "./routes/PayrollRouter.js"

// Routes
app.use("/employees", employeeRoutes);
app.use("/attendance", attendanceRoutes);
app.use("/leaveRequests", leaveRequestsRoutes);
// app.use("/payroll", payrollRoutes)

// Register Route
app.post('/register', async (req, res) => {
    try {
        const { username, password } = req.body;

        if (!username || !password) {
            return res.status(400).json({ message: "Username and password are required" });
        }

        // Hash password before storing
        const hashedPassword = await bcrypt.hash(password, 10);

        // Insert user into database
        await pool.execute('INSERT INTO users (username, password) VALUES (?, ?)', [username, hashedPassword]);

        return res.status(201).json({ message: "User registered successfully" });
    } catch (err) {
        console.error("Registration error:", err);
        res.status(500).json({ message: "Internal server error" });
    }
});

// Login Route
app.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;

        if (!username || !password) {
            return res.status(400).json({ message: "Username and password are required" });
        }

        // Query database for user
        const [rows] = await pool.execute('SELECT id, username, password FROM users WHERE username = ?', [username]);

        if (rows.length === 0) {
            return res.status(400).json({ message: "Invalid username or password" });
        }

        const user = rows[0];

        // Compare entered password with hashed password
        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).json({ message: "Invalid username or password" });
        }

        // Ensure JWT_SECRET is loaded
        if (!process.env.JWT_SECRET) {
            return res.status(500).json({ message: "Server error: Missing JWT_SECRET" });
        }

        // Generate JWT token
        const token = jwt.sign(
            { id: user.id, username: user.username },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );

        return res.status(200).json({ message: "Login successful", token, user: { id: user.id, username: user.username } });
    } catch (err) {
        console.error("Login error:", err);
        res.status(500).json({ message: "Internal server error" });
    }
});

// Protected Route (requires authentication)
app.get('/protected', authMiddleware, (req, res) => {
    res.json({ message: "You have accessed a protected route", user: req.user });
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
