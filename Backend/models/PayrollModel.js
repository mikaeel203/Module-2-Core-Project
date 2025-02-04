

const express = require("express");
const db = require("../db"); 
const router = express.Router();

// Get all payroll records

router.get("/", async (req, res) => {
    try {
        const [results] = await db.promise().query("SELECT * FROM Payroll");
        res.json(results);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Add new payroll record

router.post("/", async (req, res) => {
    try {
        const { payrollId, employeeId, hoursWorked, leaveDeductions, finalSalary } = req.body;
        
        const [results] = await db.promise().query(
            "INSERT INTO Payroll (payrollId, employeeId, hoursWorked, leaveDeductions, finalSalary) VALUES (?, ?, ?, ?, ?)",
            [payrollId, employeeId, hoursWorked, leaveDeductions, finalSalary]
        );
        
        res.json({ message: "Payroll Record Added successfully!", id: results.insertId });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;






// Use delete (remove)


//Use patch (change specific part)


// use put (update)

