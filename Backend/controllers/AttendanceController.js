import { 
    getEmployeeAttendanceForLeaveReqnHistroyMfunc,
    getEmployeeAttendanceForRecordMfunc} from "../models/AttendanceModel.js"; 

import * as attendanceModel from "../models/AttendanceModel.js";



// Controller for updating the leave req
// Update Leave Request Status
export const updateLeaveRequestStatus = async (req, res) => {
    const { employeeId, date } = req.params;
    const { status } = req.body;

    if (!["Approved", "Denied"].includes(status)) {
        return res.status(400).json({ message: "Invalid status" });
    }

    try {
        // Call model to update the leave request
        const result = await attendanceModel.updateLeaveRequestStatus(employeeId, date, status);

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: "Leave request not found" });
        }

        // Check if all requests have been processed
        const allProcessed = await attendanceModel.checkAllLeaveRequestsProcessed();

        res.json({ message: "Leave request updated successfully", allProcessed });
    } catch (err) {
        console.error("Update error:", err);
        res.status(500).json({ message: "Internal server error" });
    }
};


// Controller for attendance data|record
const getEmployeeAttendanceForRecord = async (req, res) => {
    try {
        const attendanceRecord = await getEmployeeAttendanceForRecordMfunc();
        res.json({ attendanceRecord: attendanceRecord });
    } catch (error) {
        console.error("Error fetching attendance records:", error);
        res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
};

//controller for getting the leaveRequests data and history
const getEmployeeAttendanceForLeaveReqnHistoryCon = async (req, res) => {
    try {
        const leaveRequests = await getEmployeeAttendanceForLeaveReqnHistroyMfunc();
        res.json({ leaveRequests: leaveRequests });
    } catch (error) {
        console.error("Error fetching leave request data:", error);
        res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
};



export { 
    getEmployeeAttendanceForLeaveReqnHistoryCon,
    getEmployeeAttendanceForRecord,};
