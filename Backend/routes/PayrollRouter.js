//PayrollRouter

import express from "express";

import { getPayrollInfo, getEmployeePayroll, addPayrollEntry} from "../controllers/PayrollController.js";

const router = express.Router();

//ROUTER FOR GETTING PAYROLL FOR ALL EMPLOYEES
router.get("/", getPayrollInfo);

//ROUTER FOR GETTING PAYROLL FOR A SPECIFIC
router.get("/:employeeId", getEmployeePayroll);

// ROUTE FOR ADDING A NEW PAYROLL ENTRY
router.post("/", addPayrollEntry);

export default router;
