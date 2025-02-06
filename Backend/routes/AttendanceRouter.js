import express from "express";
const router = express.Router();

import { getEmployeeAttendanceForCalender, getEmployeeAttendanceForRecord } from "../controllers/AttendanceController.js";

// Importing functions from the controller

// Retrieve employee attendance data for the calendar view
router.get("/calendar", getEmployeeAttendanceForCalender);

// Retrieve attendance records
router.get("/records", getEmployeeAttendanceForRecord);

export default router;

