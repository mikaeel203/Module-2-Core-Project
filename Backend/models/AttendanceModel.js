import { db } from "../db.js";

// To get all the record data from the DB to show when an employee is working
const getEmployeeAttendanceForCalenderMfunc = async () => {
    try {
        const [data] = await db.promise().query(""); // Query will be updated later
        return data;
    } catch (error) {
        console.error("Database query error (Calendar Attendance):", error);
        throw new Error("Failed to retrieve calendar attendance data.");
    }
};

// To get all employees to show their attendance history
const getEmployeeAttendanceForRecordMfunc = async () => {
    try {
        const [data] = await db.promise().query("SELECT * FROM moderntech_db.attendance;");
        return data;
    } catch (error) {
        console.error("Database query error (Attendance Record):", error);
        throw new Error("Failed to retrieve attendance records.");
    }
};

export { getEmployeeAttendanceForCalenderMfunc, getEmployeeAttendanceForRecordMfunc };


//NOT NEEDED FOR NOW
// const express = require("express");
// const db = require("../db");
// const router = express.Router()



// router.get("/", async (req, res) => {
//     try {
//         const [results] = await db.promise().query("SELECT * FROM Attendance");
//         res.json(results);
//     } catch (err) {
//         res.status(500).send(err);
//     }
// });
// router.post("/", async (req, res) => {
//     try {
//         const { AttendanceId, employeeId, date, status } = req.body;
//         const [results] = await db.promise().query(
//             "INSERT INTO Attendance (AttendanceId, employeeId, date, status) VALUES (?, ?, ?, ?)",
//             [AttendanceId, employeeId, date, status]
//         );
//         res.json({ message: "Attendance Recorded succesfully!", id: results.insertId });
//     } catch (err) {
//         res.status(500).send(err);
//     }
// });

// module.exports = router;

// // Use delete (remove)


// //Use patch (change specific part)


// // use put (update)