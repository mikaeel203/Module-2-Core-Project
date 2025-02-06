import express from 'express'

const router = express.Router()

import {getEmployeesCon, addNewEmployeeCon, deleteEmployeeCon, updateEmployeeCon } from '../controllers/EmployeeController.js'

// Get all employee information
router.get('/',getEmployeesCon)

// Add new employee
router.post('/',addNewEmployeeCon)

// Delete an employee's information
router.delete('/:employee_id',deleteEmployeeCon)

// Update employee information
router.patch('/:employee_id',updateEmployeeCon)

export default router