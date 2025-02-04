

const express = require("express");
const db = require("../db");
const router = express.Router()



router.get("/", async (req, res) => {
    try {
        const [results] = await db.promise().query("SELECT * FROM Attendance");
        res.json(results);
    } catch (err) {
        res.status(500).send(err);
    }
});



router.post("/", async (req, res) => {
    try {
        const { AttendanceId, employeeId, date, status } = req.body;
        const [results] = await db.promise().query(
            "INSERT INTO Attendance (AttendanceId, employeeId, date, status) VALUES (?, ?, ?, ?)",
            [AttendanceId, employeeId, date, status]
        );
        res.json({ message: "Attendance Recorded succesfully!", id: results.insertId });
    } catch (err) {
        res.status(500).send(err);
    }
});

module.exports = router;

// Use delete (remove)


//Use patch (change specific part)


// use put (update)