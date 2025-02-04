

const express = require("express");
const db = require("../db");
const router = express.Router();


router.get("/", async (req, res) => {
    try {
        db.query("SELECT * FROM Employees", (err, results) => {
            if (err) return res.status(500).json({ error: err.message });
            res.json(results);
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});




router.post("/", async (req, res) => {
    try {
        const { employee_id, name, department_id, position_id, email } = req.body;
        
        db.query(
            "INSERT INTO Employees (employee_id, name, department_id, position_id, email) VALUES (?, ?, ?, ?, ?)", 
            [employee_id, name, department_id, position_id, email], 
            (err, results) => {
                if (err) return res.status(500).json({ error: err.message });
                res.json({ message: "Employee added successfully!", id: results.insertId });
            }
        );
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;


// Use delete (remove)


//Use patch (change specific part)


// use put (update)
