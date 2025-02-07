import { pool } from '../config/db.js';

// Get all leave requests
const getLeaveRequestsModel = async () => {
    try {
        const [data] = await pool.promise().query("SELECT * FROM moderntech_db.leave_requests;");
        return data;
    } catch (error) {
        console.error("Database query error (Leave Requests):", error);
        throw new Error("Failed to retrieve leave requests.");
    }
};

// Update leave request status (Approve/Deny) 
const patchLeaveReqToUpdateModel = async (leaveData) => {
    try {
        // Assuming leaveData contains { leaveId, status }
        const { leaveId, status } = leaveData;
        if (!leaveId || !status) {
            throw new Error("Invalid leave data. 'leaveId' and 'status' are required.");
        }

        const [data] = await pool.query(
            "UPDATE moderntech_db.leave_requests SET status = ? WHERE id = ?",
            [status, leaveId]
        );
        return data;
    } catch (error) {
        console.error("Database query error (Update Leave Request):", error);
        throw new Error("Failed to update leave request.");
    }
};

// Get leave history (Approved/Denied)
const getEmployeeLeaveHistoryModel = async () => {
    try {
        const [data] = await pool.query(
            "SELECT * FROM moderntech_db.leave_requests WHERE status != 'Pending';"
        );
        return data;
    } catch (error) {
        console.error("Database query error (Employee Leave History):", error);
        throw new Error("Failed to retrieve employee leave history.");
    }
};

export { getLeaveRequestsModel, patchLeaveReqToUpdateModel, getEmployeeLeaveHistoryModel };




// const express = require("express");
// const pool = require("../pool");
// const router = express.Router()



// router.get("/", async (req, res) => {
//     try {
//         const [results] = await pool.promise().query("SELECT * FROM LeaveRequests");
//         res.json(results);
//     } catch (err) {
//         res.status(500).send(err);
//     }
// });



// router.post("/", async (req, res) => {
//     try {
//         const { leaveId, employeeId, date, reason, status } = req.body;
//         const [results] = await pool.promise().query(
//             "INSERT INTO LeaveRequests (leaveId, employeeId, date, reason, status) VALUES (?, ?, ?, ?, ?)",
//             [leaveId, employeeId, date, reason, statuss]
//         );
//         res.json({ message: "Leave Request Submitted!", id: results.insertId });
//     } catch (err) {
//         res.status(500).send(err);
//     }
// });

// module.exports = router;


// // Use delete (remove)


// //Use patch (change specific part)


// // use put (update)