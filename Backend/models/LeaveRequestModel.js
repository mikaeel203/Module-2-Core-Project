

const express = require("express");
const db = require("../db");
const router = express.Router()



router.get("/", async (req, res) => {
    try {
        const [results] = await db.promise().query("SELECT * FROM LeaveRequests");
        res.json(results);
    } catch (err) {
        res.status(500).send(err);
    }
});



router.post("/", async (req, res) => {
    try {
        const { leaveId, employeeId, date, reason, status } = req.body;
        const [results] = await db.promise().query(
            "INSERT INTO LeaveRequests (leaveId, employeeId, date, reason, status) VALUES (?, ?, ?, ?, ?)",
            [leaveId, employeeId, date, reason, statuss]
        );
        res.json({ message: "Leave Request Submitted!", id: results.insertId });
    } catch (err) {
        res.status(500).send(err);
    }
});

module.exports = router;


// Use delete (remove)


//Use patch (change specific part)


// use put (update)