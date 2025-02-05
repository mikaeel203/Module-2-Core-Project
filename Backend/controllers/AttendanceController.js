import { getEmployeeAttendanceForCalenderMfunc, getEmployeeAttendanceForRecordMfunc } from "../models/AttendanceModel.js" 

//controller for the calender attendance 
const getEmployeeAttendanceForCalender = async (req, res) => {
    res.json({Attendance_calender: await getEmployeeAttendanceForCalenderMfunc})
}

//controller for the attendance data|record
const getEmployeeAttendanceForRecord = async (req, res) => {
    res.json ({Attendence_record: await getEmployeeAttendanceForRecordMfunc})
}

export {getEmployeeAttendanceForCalender, getEmployeeAttendanceForRecord}