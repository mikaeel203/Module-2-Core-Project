import express from 'express'
const router = express.Router()

import { getEmployeeAttendanceForCalender, getEmployeeAttendanceForRecord } from '../controllers/AttendanceController.js'

//importing function from the controler

//retrieve information of employee and place them in the various fields in the Time Off & Attendance
router.get ('/', getEmployeeAttendanceForCalender)
// router.get ('/:employeeData', getSelectionEmployeeAttence) not sure how this will work just yet since a query can be made to select a single row in GET

router.get ('/', getEmployeeAttendanceForRecord)

export default router

