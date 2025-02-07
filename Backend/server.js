// import modules
import cors from 'cors';
import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { pool } from './config/db.js'; // Import database connection
import authMiddleware from './middleware/authMiddleware.js';

const app = express();
app.use(cors());
app.use(express.json());
// app.use(bodyParser.json()) NOT SURE IF ANYONE WAS USING THIS BUT WAS CAUSING ERRORS
// app.use(bodyParser.urlencoded({ extended: true }));

// import routes
import employeeRoutes from "./routes/EmployeeRouter.js";
// import payrollRoutes from "./routes/PayrollRouter.js";
import attendanceRoutes from "./routes/AttendanceRouter.js";
import leaveRequestsRoutes from "./routes/leaveRequestsRouter.js";



// routes
app.use("/employees", employeeRoutes);
// app.use("/payroll", payrollRoutes);
app.use("/attendance", attendanceRoutes);
app.use("/leaveRequests", leaveRequestsRoutes);

// login route
app.post('/login', async(req,res)=>{
    try{
        const {username, password} = req.body;

        if(!username || !password){
            return res.status(400).json({message: "Username and password are required"})
        }
        // query database for user
        const [rows] = await pool.execute('SELECT * FROM users WHERE username = ?', [username]);

    if (rows.length === 0) {
    return res.status(400).json({ message: "Invalid username or password" });
}

const user = rows[0];

const isMatch = await bcrypt.compare(password, user.password); //Compare hashed password

if (!isMatch) {
    return res.status(400).json({ message: "Invalid username or password" });
}

// create JWT token for authentication
const token = jwt.sign(
    { id: user.id, username: user.username }, 
    process.env.JWT_SECRET,
    { expiresIn: '1h' }
);
return res.status(200).json({message: "Login successful", token})
    }catch (err){
        console.error("Login error:", err);
        res.status(500).json({message: "Internal server error"});
    }
});

// protect route
app.get('/protected', authMiddleware, (req, res) => {
    res.json({ message: "You have accessed a protected route", user: req.user });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));

