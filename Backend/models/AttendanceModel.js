import {db} from "../db.js"

//to get all the record data from the db to show when an employee is working
const getEmployeeAttendanceForCalenderMfunc = async () =>{
    let [data] = await db.query('')  
}
// this is going to need more going into as dates worked has no data for this --- query will be empty for now

// to get all the eemployees to show their attendance history
const getEmployeeAttendanceForRecordMfunc = async () =>{
    let [data] = await db.query('SELECT * FROM moderntech_db.attendance;')
}

export {getEmployeeAttendanceForCalenderMfunc, getEmployeeAttendanceForRecordMfunc}

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