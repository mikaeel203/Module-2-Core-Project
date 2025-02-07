import { 
    // getEmployeeAttendanceForCalenderMfunc, 
    getEmployeeAttendanceForRecordMfunc } from "../models/AttendanceModel.js"; 

// Controller for calendar attendance
// const getEmployeeAttendanceForCalender = async (req, res) => {
//     try {
//         const attendanceCalender = await getEmployeeAttendanceForCalenderMfunc();
//         res.json({ Attendance_calender: attendanceCalender });
//     } catch (error) {
//         console.error("Error fetching attendance for calendar:", error);
//         res.status(500).json({ message: "Internal Server Error", error: error.message });
//     }
// };

// Controller for attendance data|record
const getEmployeeAttendanceForRecord = async (req, res) => {
    try {
        const attendanceRecord = await getEmployeeAttendanceForRecordMfunc();
        res.json({ Attendance_record: attendanceRecord });
    } catch (error) {
        console.error("Error fetching attendance records:", error);
        res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
};

export { 
    // getEmployeeAttendanceForCalender, 
    getEmployeeAttendanceForRecord };
