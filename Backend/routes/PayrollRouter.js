import express from "express";
import { getAllPayrollInfo, getEmployeePayroll, addPayrollEntry } from "../controllers/PayrollController.js";

const router = express.Router();

// ROUTER FOR GETTING PAYROLL FOR ALL EMPLOYEES
router.get("/", getAllPayrollInfo);

// ROUTER FOR GETTING PAYROLL FOR A SPECIFIC EMPLOYEE
router.get("/:employeeId", getEmployeePayroll);

// ROUTE FOR ADDING A NEW PAYROLL ENTRY
router.post("/", addPayrollEntry);

export default router;
