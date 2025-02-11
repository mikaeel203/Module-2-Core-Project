import express from "express";
const router = express.Router();

import * as attendanceController from "../controllers/attendanceController.js";
import { getEmployeeAttendanceForLeaveReqnHistoryCon, getEmployeeAttendanceForRecord } from "../controllers/attendanceController.js";




// Retrieve employee attendance data for the calendar view
// router.get("/calendar", getEmployeeAttendanceForCalender); needs some research for the calender

// Retrieve attendance records
router.get("/record", getEmployeeAttendanceForRecord);

//getting the data for the leaveRequests
router.get("/leaveRequests_history", getEmployeeAttendanceForLeaveReqnHistoryCon);

//updating data
router.patch("/leaveRequests/:employeeId/:date", attendanceController.updateLeaveRequestStatus);



export default router;

