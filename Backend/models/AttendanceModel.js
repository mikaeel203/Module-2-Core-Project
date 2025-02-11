import { pool } from "../config/db.js";




//Controller for the update of attendance
// Update leave request status (Approved/Denied)
export const updateLeaveRequestStatus = async (employeeId, date, status) => {
    const [result] = await pool.execute(
        "UPDATE Leave_Requests SET status = ? WHERE employee_id = ? AND date = ?",
        [status, employeeId, date]
    );
    return result;
};

// Check if all leave requests are processed
export const checkAllLeaveRequestsProcessed = async () => {
    const [pendingRequests] = await pool.execute(
        "SELECT COUNT(*) as count FROM Leave_Requests WHERE status = 'Pending'"
    );
    return pendingRequests[0].count === 0;
};



//Getting attendance record
const getEmployeeAttendanceForRecordMfunc = async () => {
    try {
        const [data] = await pool.query("SELECT e.employee_id AS employeeId,e.name AS name,a.date AS date,a.status AS status FROM Employees e JOIN Attendance a ON e.employee_id = a.employee_id ORDER BY e.employee_id, a.date;");
        return data;
    } catch (error) {
        console.error("Database query error (Attendance Record):", error);
        throw new Error("Failed to retrieve attendance records.");
    }
};

//model query for getting the history and leaveRequests
const getEmployeeAttendanceForLeaveReqnHistroyMfunc = async () => {
    try {
        const [data] = await pool.query("SELECT e.name AS name, e.employee_id as employeeId, lr.date AS date, lr.reason AS reason, lr.status AS status FROM Employees e JOIN Leave_Requests lr ON e.employee_id = lr.employee_id ORDER BY lr.date;");
        return data;
    } catch (error) {
        console.error("Database query error (Leave Requests):", error);
        throw new Error("Failed to retrieve leaveRequests.");
    }
};

export { 
    getEmployeeAttendanceForLeaveReqnHistroyMfunc,
    getEmployeeAttendanceForRecordMfunc, };

