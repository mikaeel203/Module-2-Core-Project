import express from "express";
const router = express.Router();

import { 
    // getEmployeeAttendanceForCalender, 
    getEmployeeAttendanceForRecord } from "../controllers/AttendanceController.js";

// Importing functions from the controller

// Retrieve employee attendance data for the calendar view
// router.get("/calendar", getEmployeeAttendanceForCalender); needs some research for the calender

// Retrieve attendance records
router.get("/router", getEmployeeAttendanceForRecord);

export default router;

